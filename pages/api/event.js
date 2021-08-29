// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma';

const createEvent = async (name, date) => prisma.event.create({
  data: {
    name,
    date: new Date(date),
  },
});
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
  let result = {};
  switch (req.method) {
    case 'GET':
      result = await getEvents();
      break;
    case 'POST':
      result = await createEvent(body.name, body.date);
      break;
    case 'DELETE':
      result = await deleteEvent(body.id);
      break;
    default:
      break;
  }
  res.status(200).json(result);
}
