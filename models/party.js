module.exports = (sequelize, DataTypes) => {
  return sequelize.define('party', {
    // CREATE TABLE `bangpa_schema`.`user` (
//   `id` INT UNSIGNED NOT NULL,
//   `name` VARCHAR(45) NULL,
//   `area` MEDIUMTEXT NOT NULL,
//   `teleNum` MEDIUMTEXT NULL,
//   `idKakao` VARCHAR(45) NULL,
//   PRIMARY KEY (`id`),
//   UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
//  ENGINE = InnoDB
//  DEFAULT CHARACTER SET = utf8
//  COMMENT = ‘사용자 정보’;
    id : {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT(medium),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT(long),
      allowNull: false,
    },
    area: {
      type: DataTypes.TEXT(medium),
      allowNull: false,
    },
    day: {
      type: DataTypes.TEXT(medium),
      allowNull: false,
    },
    studyPerWeek: {
      type: DataTypes.TEXT(medium),
      allowNull: false,
    },
    peopleNum: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
    },
    peopleJob: {
      type: DataTypes.TEXT(medium),
      allowNull: false,
    },
    term: {
      type: DataTypes.TEXT(long),
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
