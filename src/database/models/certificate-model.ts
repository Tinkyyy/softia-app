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
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: true,
  },
  updated_at: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'certificate',
  tableName: 'certificates',
  timestamps: false,
  underscored: true,
});

Student.hasMany(Certificate, { foreignKey: 'student_id' });
Certificate.belongsTo(Student, { foreignKey: 'student_id' });

Agreement.hasMany(Certificate, { foreignKey: 'agreement_id' });
Certificate.belongsTo(Agreement, { foreignKey: 'agreement_id' });

export default Certificate;
