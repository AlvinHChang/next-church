// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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

export default function handler(req, res) {
  res.status(200).json(mockEvents);
}
