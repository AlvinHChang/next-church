// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma';

const mockEvents = {
  dateUpdated: Date.now(),
  events: [
    {
      name: 'test1',
      date: Date.now(),
      description: 'test2',
    },
    {
      name: 'test2',
      date: Date.now(),
      description: 'test2',
    },
    {
      name: 'test3',
      date: Date.now(),
      description: 'test2',
    },
  ],
};

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

export default async function handler(req, res) {
  const { body } = req;
  let result = {};
  switch (req.method) {
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
