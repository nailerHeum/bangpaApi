module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    id : {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      
    },
    area: {

    },
    teleNum: {

    },
    idKakao: {

    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()'),
    },
  }, {
    timestamps: false,
  });
};