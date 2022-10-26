import Certificate from '../database/models/certificate-model';
import Student from '../database/models/student-model';

async function postCertificate(student: Student, message: string) {
  await Certificate.create({
    student_id: student.get().id,
    agreement_id: student.get().agreement_id,
    message,
  }, { fields: ['student_id', 'agreement_id', 'message'] });
}

export default postCertificate;
