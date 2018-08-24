module.exports = (sequelize, DataTypes) => {
  return sequelize.define('studyRoom', {
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
