import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';
import Agreement from './agreement-model';
import Student from './student-model';

class Certificate extends Model {}

Certificate.init({
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
  modelName: 'Certificate',
  tableName: 'certificates',
  timestamps: false,
  underscored: true,
});

Student.hasMany(Certificate, { foreignKey: 'student_id' });
Agreement.hasMany(Certificate, { foreignKey: 'agreement_id' });

export default Certificate;
