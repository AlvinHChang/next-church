export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      // call into deployment, triggers getStaticProps
      // eslint-disable-next-line no-undef
      fetch('https://api.vercel.com/v1/integrations/deploy/prj_UFNGiOnbTGbE7R9bRzjMt3F9ZWHT/p2IhHgYKrX');
      res.status(200);
      break;
    default:
      res.status(401);
      break;
  }
}