module.exports = (sequelize, DataTypes) => {
  return sequelize.define('studyRoom', {
    id : {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    fee: {

    },
    utility: {

    },
    image: {

    },
    description:{
      
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()'),
    },
  }, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
};