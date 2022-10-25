import { Application, Request, Response } from 'express';
import Express from 'express';
import Student from './database/models/student-model';
import Agreement from './database/models/agreement-model';
import * as studentController from './controllers/student.controller';
import getAgreements from './controllers/agreement.controller';
import postCertificate from './controllers/certificate.controller';

const path = require('path');
const bodyParser = require('body-parser');

const app: Application = Express();
const port: number = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (request: Request, response: Response) => {
  const students: Student[] = await studentController.getStudents();
  const agreements: Agreement[] = await getAgreements();

  response.render('index', {
    created: false,
    students,
    agreements,
  });
});

app.post('/', async (request: Request, response: Response) => {
  const students: Student[] = await studentController.getStudents();
  const agreements: Agreement[] = await getAgreements();

  await studentController.getStudentById(request.body.student_id)
    .then(async (student) => {
      if (student instanceof Student) {
        await postCertificate(student, request.body.content);
        response.render('index', {
          created: true,
          students,
          agreements,
        });
      } else {
        response.redirect('/');
      }
    });
});

app.listen(port, () => {
  console.log(`Softia is listening on port ${port}`);
});
