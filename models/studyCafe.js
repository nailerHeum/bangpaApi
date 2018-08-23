module.exports = (sequelize, DataTypes) => {
  return sequelize.define('studyCafe', {
    id : {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    notice: {
      // 하나만 갖고 수정하는거면 여기 맞고 아니라면 빼야 함
    },
    address: {

    },
    image: {

    },
    hashtag: {
        // 따로 모델 만들어야 할 가능성 높음
    },
    rating: {
        // 따로 모델 만들어야함
    },
    description: {

    },
    tel:{

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