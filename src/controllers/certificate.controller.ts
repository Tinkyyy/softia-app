import sequelize from '../database/instance';
import Student from '../database/models/student-model';

async function postCertificate(student: Student, message: string) {
  await sequelize.query(`
        INSERT INTO certificates(student_id,agreement_id,message)
        VALUES (${student.get().id}, ${student.get().agreement_id}, "${message}");
    `);
}

export default {
  postCertificate,
};
