// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma';

const createEvent = async (name, date) => {
  const createDate = new Date(date);
  if (createDate < Date.now()) { return [{}, 409]; }
  const prismaResponse = await prisma.event.create({
    data: {
      name,
      date: createDate,
    },
  });
  return [prismaResponse, 200];
};

const deleteEvent = async (id) => prisma.event.delete({
  where: {
    id,
  },
});

const getEvents = async () => {
  const events = await prisma.event.findMany();
  return { events };
};

export default async function handler(req, res) {
  const { body } = req;
  let response = {};
  let statusCode = 200;
  switch (req.method) {
    case 'GET':
      response = await getEvents();
      break;
    case 'POST':
      [response, statusCode] = await createEvent(body.name, body.date);
      break;
    case 'DELETE':
      response = await deleteEvent(body.id);
      break;
    default:
      break;
  }
  res.status(statusCode).json(response);
}
