// /* eslint-disable no-case-declarations */
// /* eslint-disable linebreak-style */
// import { connectToDatabase } from '../../util/mongodb';

// const handler = async (request, response) => {
//   try {
//     const { method } = request;
//     switch (method) {
//       case 'GET':
//         const { db } = await connectToDatabase();
//         const data = await db.collection('stats').find().limit(10).toArray();
//         response.status(200).json(data);
//         break;
//       default:
//         response.setHeader('Allow', ['GET', 'PUT']);
//         response.status(405).end(`Method ${method} Not Allowed`);
//     }
//   } catch (err) {
//     response.status(500).json({ statusCode: 500, message: err.message });
//   }
// };

// export default handler;
