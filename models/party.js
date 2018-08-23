module.exports = (sequelize, DataTypes) => {
  return sequelize.define('party', {
    id : {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    title: {

    },
    description: {

    },
    area: {

    },
    day: {
      
    },
    studyPerWeek: {

    },
    peopleNum: {

    },
    peopleJob: {
      
    },
    term: {

    },
    hashtag: {

    },
    comment: {
      // 모델따로 만들어야함
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