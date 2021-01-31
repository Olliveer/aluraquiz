/* eslint-disable no-case-declarations */
/* eslint-disable linebreak-style */
import { connectToDatabase } from '../../util/mongodb';

const handler = async (request, response) => {
  try {
    const { method } = request;
    const { db } = await connectToDatabase();
    switch (method) {
      case 'GET':
        const data = await db.collection('stats').find().sort({ points: -1 }).limit(10)
          .toArray();
        response.setHeader('Access-Control-Allow-Credentials', true);
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        response.status(200).json(data);
        break;
      case 'POST':
        const { name, points } = request.body;
        if (!name || !points) {
          response.status(400).json({ message: 'Missing information' });
          return;
        }
        const res = await db.collection('stats').insertOne({
          name,
          points,
        });
        response.setHeader('Access-Control-Allow-Credentials', true);
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        response.status(200).json(res.ops[0]);
        break;
      default:
        response.setHeader('Allow', ['GET', 'POST', 'PUT']);
        response.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    response.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
