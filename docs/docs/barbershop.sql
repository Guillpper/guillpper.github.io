-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-07-2025 a las 06:58:24
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `barbershop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_agenda`
--

CREATE TABLE `tb_agenda` (
  `Id_Agenda` int(10) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Hora` datetime NOT NULL,
  `presupuesto` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_barbero`
--

CREATE TABLE `tb_barbero` (
  `nombre_barbero` varchar(50) NOT NULL,
  `apellido_barbero` varchar(50) NOT NULL,
  `cedula_barbero` int(9) NOT NULL,
  `telefono_barbero` int(18) NOT NULL,
  `especialidad_barbero` text NOT NULL,
  `foto_perfil_barbero` mediumblob NOT NULL,
  `foto_barbero` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_citas`
--

CREATE TABLE `tb_citas` (
  `Id_cita` int(9) NOT NULL,
  `Id_agenda` int(9) NOT NULL,
  `cedula_barbero` int(9) NOT NULL,
  `cedula_cliente` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_cliente`
--

CREATE TABLE `tb_cliente` (
  `nombre_cliente` varchar(30) NOT NULL,
  `apellido_cliente` varchar(30) NOT NULL,
  `cedula_cliente` int(9) NOT NULL,
  `telefono_cliente` int(18) NOT NULL,
  `Correo_cliente` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--
CREATE TABLE tb_usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE,
  clave VARCHAR(255) NOT NULL
);

--
-- Indices de la tabla `tb_agenda`
--
ALTER TABLE `tb_agenda`
  ADD PRIMARY KEY (`Id_Agenda`),
  ADD UNIQUE KEY `Fecha` (`Fecha`,`Hora`,`presupuesto`);

--
-- Indices de la tabla `tb_barbero`
--
ALTER TABLE `tb_barbero`
  ADD PRIMARY KEY (`cedula_barbero`),
  ADD UNIQUE KEY `Nombre` (`nombre_barbero`,`apellido_barbero`,`telefono_barbero`,`especialidad_barbero`,`foto_perfil_barbero`,`foto_barbero`) USING HASH;

--
-- Indices de la tabla `tb_citas`
--
ALTER TABLE `tb_citas`
  ADD PRIMARY KEY (`Id_cita`),
  ADD UNIQUE KEY `Id_agenda` (`Id_agenda`,`cedula_barbero`,`cedula_cliente`),
  ADD KEY `cedula_cliente` (`cedula_cliente`),
  ADD KEY `cedula_barbero` (`cedula_barbero`);

--
-- Indices de la tabla `tb_cliente`
--
ALTER TABLE `tb_cliente`
  ADD PRIMARY KEY (`cedula_cliente`),
  ADD UNIQUE KEY `Nombre` (`nombre_cliente`,`apellido_cliente`,`telefono_cliente`,`Correo_cliente`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tb_citas`
--
ALTER TABLE `tb_citas`
  ADD CONSTRAINT `tb_citas_ibfk_1` FOREIGN KEY (`cedula_cliente`) REFERENCES `tb_cliente` (`cedula_cliente`),
  ADD CONSTRAINT `tb_citas_ibfk_2` FOREIGN KEY (`cedula_barbero`) REFERENCES `tb_barbero` (`cedula_barbero`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tb_citas_ibfk_3` FOREIGN KEY (`Id_agenda`) REFERENCES `tb_agenda` (`Id_Agenda`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
