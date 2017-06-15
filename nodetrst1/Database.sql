CREATE DATABASE teacherdb;
CREATE TABLE `teacherdb`.`student` (
  `lastname` CHAR(25) NOT NULL,
  `firstname` CHAR(25) NOT NULL,
  PRIMARY KEY (`lastname`, `firstname`));
