import sequelize from './instance';

import Agreement from './models/agreement-model';
import Student from './models/student-model';
import Certificate from './models/certificate-model';

async function migrate() {
  try {
    // Authenticate to the database
    await sequelize.authenticate();

    // Create tables
    await Agreement.sync().then(() => console.log('Table \'agreements\' has been successfully created'));
    await Student.sync().then(() => console.log('Table \'students\' has been successfully created'));
    await Certificate.sync().then(() => console.log('Table \'certificates\' has been successfully created', '\n'));
  } catch (error) {
    console.log(error);
  } finally {
    sequelize.close();
  }
}

migrate();
