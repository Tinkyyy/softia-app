import sequelize from './instance';

import Agreement from './models/agreement-model';
import Student from './models/student-model';

async function populate() {
  try {
    // Authenticate to the database
    await sequelize.authenticate();

    // Populate
    let { count } = await Agreement.findAndCountAll();
    if (count === 0) {
      await Agreement.fill();
    }

    count = (await Student.findAndCountAll()).count;
    if (count === 0) {
      await Student.fill();
    }
  } catch (error) {
    console.log(error);
  } finally {
    sequelize.close();
  }
}

populate();
