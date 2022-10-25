import { Application, Request, Response } from 'express';
import Express from 'express';
import Student from './database/models/student-model';
import Agreement from './database/models/agreement-model';
import * as studentController from './controllers/student.controller';
import * as agreementController from './controllers/agreement.controller';
import * as certificateController from './controllers/certificate.controller';

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
  const agreements: Agreement[] = await agreementController.getAgreements();

  response.render('index', {
    created: false,
    students,
    agreements,
  });
});

app.post('/', async (request: Request, response: Response) => {
  const students: Student[] = await studentController.getStudents();
  const agreements: Agreement[] = await agreementController.getAgreements();

  await studentController.getStudentById(request.body.student_id)
    .then(async (student) => {
      if (student instanceof Student) {
        await certificateController.postCertificate(student, request.body.content);
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
  console.log(`Example app listening on port ${port}`);
});
