CREATE SCHEMA `javace` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;

CREATE  TABLE `javace`.`Contact` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `firstName` VARCHAR(45) NOT NULL ,
  `lastName` VARCHAR(45) NULL ,
  `headshot` VARCHAR(45) NOT NULL ,
  `twitter` VARCHAR(45) NULL ,
  `telephone` VARCHAR(45) NULL ,
  `city` VARCHAR(45) NOT NULL ,
  `state` VARCHAR(45) NOT NULL ,
  `country` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`id`) )
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;

INSERT INTO `javace`.`Contact` (`id`, `firstName`, `lastName`, `headshot`, `twitter`, `telephone`, `city`, `state`, `country`) VALUES ('1', 'Loiane', 'Groner', 'loiane.png', 'loiane', '11-9999-9999', 'Vit—ria', 'Esp’rito Santo', 'Brazil');

