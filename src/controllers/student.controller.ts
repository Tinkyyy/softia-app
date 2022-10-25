import Student from '../database/models/student-model';
import Agreement from '../database/models/agreement-model';

async function getStudents() {
  const studentsArray: Student[] = [];

  await Student.findAll({ attributes: ['id', 'firstname', 'lastname'], include: [Agreement] })
    .then((students: Student[]) => {
      students.forEach((student) => {
        const { firstname } = student.get();
        const { lastname } = student.get();

        const fullname: string = `${firstname} ${lastname}`;

        student.setDataValue('fullname', fullname);

        studentsArray.push(student);
      });
    });

  return studentsArray;
}

async function getStudentById(studentId: any) {
  const student = await Student.findOne({ where: { id: studentId }, include: [Agreement] });

  if (student === null) {
    return {};
  }

  return student;
}

export {
  getStudents,
  getStudentById,
};
