import express, { Request, Response } from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (req: any, res: any) => {
  try {
    res.send('Hi there!');
  } catch (error) {
    console.log('🚀 ~ file: index.ts:12 ~ app.get ~ error:', error);
  }
  console.log(`==============>req.query`);
  console.log(req?.query);
});

app.listen(3000, () => {
  console.log(`==============>111`);
  console.log(111);

  console.log('Listening on port 3000');
});
