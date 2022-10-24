import { Application, Request, Response } from 'express';
import Express from 'express';

const app: Application = Express();
const port: number = 8080;

app.get('/', (request: Request, response: Response) => {
  response.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
