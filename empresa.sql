#DROP DATABASE IF EXISTS empresa;
CREATE DATABASE empresa;

USE empresa;

CREATE TABLE `empresa`.`clientes` (
  `cliente_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido_paterno` VARCHAR(45) NOT NULL,
  `apellido_materno` VARCHAR(45) NULL,
  `domicilio` VARCHAR(45) NULL,
  `correo_electronico` varchar(45) NULL,
  PRIMARY KEY (`cliente_id`));
  
  DESCRIBE clientes;
  