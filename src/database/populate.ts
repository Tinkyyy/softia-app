import sequelize from './instance';

import Agreement from './models/agreement-model';
import Student from './models/student-model';

async function populate() {
  try {
    // Authenticate to the database
    await sequelize.authenticate();

    // Populate
    await Agreement.fill();
    await Student.fill();
  } catch (error) {
    console.log(error);
  } finally {
    sequelize.close();
  }
}

populate();
