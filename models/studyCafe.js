module.exports = (sequelize, DataTypes) => {
  return sequelize.define('studyCafe', {
    // CREATE TABLE `bangpa_schema`.`studycafe` (
    //   `id` INT UNSIGNED NOT NULL,
    //   `notice` LONGTEXT NOT NULL,
    //   `address` LONGTEXT NOT NULL,
    //   `description` LONGTEXT NOT NULL,
    //   PRIMARY KEY (`id`))
    //  ENGINE = InnoDB
    //  DEFAULT CHARACTER SET = utf8
    //  COMMENT = ‘스터디 카페 (업자들)’;
    id : {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    notice: {
      type: DataTypes.TEXT(long),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT(long),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT(long),
      allowNull: false,
    },
    tel: {
      type: DataTypes.TEXT(medium),
      allowNull: false,
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