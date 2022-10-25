import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';
import Agreement from './agreement-model';

class Student extends Model {
  public static async fill() {
    try {
      await sequelize.authenticate();
      sequelize.query(`
      INSERT INTO students(firstname,lastname,email,agreement_id)
        VALUES
          ("Jeanette","Hills","jeanette.hills@mail.com",1),
          ("Cordell","Wolff","cordell.wolff@mail.com",2),
          ("Mason","Hartmann","mason.hartmann@mail.com",1),
          ("Ruth","Vandervort","ruth.vandervort@mail.com",1),
          ("Ike","Ernser","ike.ernser@mail.com",4),
          ("Eda","Mills","eda.mills@mail.com",1),
          ("Jada","Hackett","jada.hackett@mail.com",2),
          ("Celine","Tillman","celine.tillman@mail.com",3),
          ("Moses","Cronin","moses.cronin@mail.com",3),
          ("Meda","O'Kon","meda.o-kon@mail.de",4);`).then(() => {
        console.log('Table \'students\' has been filled up!');
      });
    } catch (error) {
      console.log(error);
    }
  }
}

Student.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING(48),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(48),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updated_at: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'student',
  tableName: 'students',
  timestamps: false,
  underscored: true,
});

Agreement.hasOne(Student, { foreignKey: 'agreement_id' });
Student.belongsTo(Agreement, { foreignKey: 'agreement_id' });

export default Student;
