import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';

class Agreement extends Model {
  public static async fill() {
    try {
      await sequelize.authenticate();
      sequelize.query(`
      INSERT INTO agreements(name,hours)
        VALUES
          ("Convention A", 7),
          ("Convention B", 2),
          ("Convention C", 9),
          ("Convention D", 0);`).then(() => {
        console.log('Table \'agreements\' has been filled up!');
      });
    } catch (error) {
      console.log(error);
    }
  }
}

Agreement.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  hours: {
    type: DataTypes.FLOAT,
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
  modelName: 'Agreement',
  tableName: 'agreements',
  timestamps: false,
  underscored: true,
});

export default Agreement;
