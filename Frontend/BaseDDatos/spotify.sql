-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema spotify
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema spotify
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spotify` DEFAULT CHARACTER SET latin1 ;
USE `spotify` ;

-- -----------------------------------------------------
-- Table `spotify`.`artistas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`artistas` (
  `id_artistas` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `img` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id_artistas`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`pais` (
  `id_pais` INT(11) NOT NULL AUTO_INCREMENT,
  `name` CHAR(3) NULL DEFAULT NULL,
  PRIMARY KEY (`id_pais`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`discograficas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`discograficas` (
  `id_discograficas` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `pais_id_pais` INT(11) NOT NULL,
  PRIMARY KEY (`id_discograficas`),
  INDEX `fk_discograficas_pais1_idx` (`pais_id_pais` ASC) VISIBLE,
  CONSTRAINT `fk_discograficas_pais1`
    FOREIGN KEY (`pais_id_pais`)
    REFERENCES `spotify`.`pais` (`id_pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`album`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`album` (
  `id_album` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `año_publ` DATE NULL DEFAULT NULL,
  `img` VARCHAR(200) NULL DEFAULT NULL,
  `discograficas_id_discograficas` INT(11) NOT NULL,
  `artistas_id_artistas` INT(11) NOT NULL,
  PRIMARY KEY (`id_album`),
  INDEX `fk_album_discograficas1_idx` (`discograficas_id_discograficas` ASC) VISIBLE,
  INDEX `fk_album_artistas1_idx` (`artistas_id_artistas` ASC) VISIBLE,
  CONSTRAINT `fk_album_artistas1`
    FOREIGN KEY (`artistas_id_artistas`)
    REFERENCES `spotify`.`artistas` (`id_artistas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_album_discograficas1`
    FOREIGN KEY (`discograficas_id_discograficas`)
    REFERENCES `spotify`.`discograficas` (`id_discograficas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`canciones` (
  `id_canciones` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `duracion` TIME NULL DEFAULT NULL,
  `album_id_album` INT(11) NOT NULL,
  PRIMARY KEY (`id_canciones`),
  INDEX `fk_canciones_album1_idx` (`album_id_album` ASC) VISIBLE,
  CONSTRAINT `fk_canciones_album1`
    FOREIGN KEY (`album_id_album`)
    REFERENCES `spotify`.`album` (`id_album`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`genero` (
  `id_genero` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_genero`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`cancion_genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`cancion_genero` (
  `id_cancion_genero` INT(11) NOT NULL AUTO_INCREMENT,
  `canciones_id_canciones` INT(11) NOT NULL,
  `genero_id_genero` INT(11) NOT NULL,
  PRIMARY KEY (`id_cancion_genero`),
  INDEX `fk_cancion_genero_canciones1_idx` (`canciones_id_canciones` ASC) VISIBLE,
  INDEX `fk_cancion_genero_genero1_idx` (`genero_id_genero` ASC) VISIBLE,
  CONSTRAINT `fk_cancion_genero_canciones1`
    FOREIGN KEY (`canciones_id_canciones`)
    REFERENCES `spotify`.`canciones` (`id_canciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cancion_genero_genero1`
    FOREIGN KEY (`genero_id_genero`)
    REFERENCES `spotify`.`genero` (`id_genero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`estado` (
  `id_estado` TINYINT(2) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id_estado`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`likes` (
  `id_likes` INT(11) NOT NULL AUTO_INCREMENT,
  `canciones_id_canciones` INT(11) NOT NULL,
  PRIMARY KEY (`id_likes`),
  INDEX `fk_likes_canciones_idx` (`canciones_id_canciones` ASC) VISIBLE,
  CONSTRAINT `fk_likes_canciones`
    FOREIGN KEY (`canciones_id_canciones`)
    REFERENCES `spotify`.`canciones` (`id_canciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`sexo_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`sexo_usuario` (
  `id_sexo_usuario` INT NOT NULL AUTO_INCREMENT,
  `name` CHAR(6) NOT NULL,
  PRIMARY KEY (`id_sexo_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`usuarios` (
  `id_usuarios` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `pass` CHAR(8) NULL DEFAULT NULL,
  `date _pass_creation` DATE NULL DEFAULT NULL,
  `fecha_nac` DATE NULL DEFAULT NULL,
  `cp` VARCHAR(6) NULL DEFAULT NULL,
  `pais_id_pais` INT(11) NOT NULL,
  `sexo_usuario_id_sexo_usuario` INT NOT NULL,
  PRIMARY KEY (`id_usuarios`),
  INDEX `fk_usuarios_pais1_idx` (`pais_id_pais` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_usuarios_sexo_usuario1_idx` (`sexo_usuario_id_sexo_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_pais1`
    FOREIGN KEY (`pais_id_pais`)
    REFERENCES `spotify`.`pais` (`id_pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_sexo_usuario1`
    FOREIGN KEY (`sexo_usuario_id_sexo_usuario`)
    REFERENCES `spotify`.`sexo_usuario` (`id_sexo_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`pass_validation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`pass_validation` (
  `id_pass_validation` INT(11) NOT NULL AUTO_INCREMENT,
  `time_remaning` DATE NULL DEFAULT NULL,
  `usuarios_id_usuarios` INT(11) NOT NULL,
  PRIMARY KEY (`id_pass_validation`),
  INDEX `fk_pass_validation_usuarios1_idx` (`usuarios_id_usuarios` ASC) VISIBLE,
  CONSTRAINT `fk_pass_validation_usuarios1`
    FOREIGN KEY (`usuarios_id_usuarios`)
    REFERENCES `spotify`.`usuarios` (`id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`playlists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`playlists` (
  `id_playlists` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `num_canciones` INT(11) NULL DEFAULT NULL,
  `fecha_creacion` DATE NULL DEFAULT NULL,
  `fecha_eliminacion` DATE NULL DEFAULT NULL,
  `usuarios_id_usuarios` INT(11) NOT NULL,
  `estado_id_estado` TINYINT(2) NOT NULL,
  PRIMARY KEY (`id_playlists`),
  INDEX `fk_playlists_usuarios1_idx` (`usuarios_id_usuarios` ASC) VISIBLE,
  INDEX `fk_playlists_estado1_idx` (`estado_id_estado` ASC) VISIBLE,
  CONSTRAINT `fk_playlists_usuarios1`
    FOREIGN KEY (`usuarios_id_usuarios`)
    REFERENCES `spotify`.`usuarios` (`id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_playlists_estado1`
    FOREIGN KEY (`estado_id_estado`)
    REFERENCES `spotify`.`estado` (`id_estado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`playlists_canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`playlists_canciones` (
  `id_playlists_canciones` INT(11) NOT NULL AUTO_INCREMENT,
  `playlists_id_playlists` INT(11) NOT NULL,
  `canciones_id_canciones` INT(11) NOT NULL,
  PRIMARY KEY (`id_playlists_canciones`),
  INDEX `fk_playlists_canciones_playlists1_idx` (`playlists_id_playlists` ASC) VISIBLE,
  INDEX `fk_playlists_canciones_canciones1_idx` (`canciones_id_canciones` ASC) VISIBLE,
  CONSTRAINT `fk_playlists_canciones_canciones1`
    FOREIGN KEY (`canciones_id_canciones`)
    REFERENCES `spotify`.`canciones` (`id_canciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_playlists_canciones_playlists1`
    FOREIGN KEY (`playlists_id_playlists`)
    REFERENCES `spotify`.`playlists` (`id_playlists`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `spotify`.`reproducciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`reproducciones` (
  `id_reproducciones` INT(11) NOT NULL,
  `canciones_id_canciones` INT(11) NOT NULL,
  PRIMARY KEY (`id_reproducciones`),
  INDEX `fk_reproducciones_canciones1_idx` (`canciones_id_canciones` ASC) VISIBLE,
  CONSTRAINT `fk_reproducciones_canciones1`
    FOREIGN KEY (`canciones_id_canciones`)
    REFERENCES `spotify`.`canciones` (`id_canciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
