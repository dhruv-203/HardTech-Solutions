-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2022 at 07:48 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

CREATE TABLE `queries` (
  `QUERY_NO` int(5) NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `PHONE_NO` decimal(11,0) NOT NULL,
  `QUERY` varchar(300) NOT NULL,
  `EMAIL` varchar(60) NOT NULL,
  `Date` date NOT NULL,
  `Time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `queries`
--

INSERT INTO `queries` (`QUERY_NO`, `NAME`, `PHONE_NO`, `QUERY`, `EMAIL`, `Date`, `Time`) VALUES
(1, 'Dhruv Patel', '9106033690', 'sdwoijoiqjwfj aainkja clas ckl kxnclksanclksncskskncaslkcnak olnasocnaosnc knckasncloasnc', '21amtics445@gmail.com', '2022-10-19', '11:10:00'),
(2, 'Ayush Kumar', '9876543210', 'asdkjnaifqwoid asbdnoandasjdn  osndoiawndoiqwnd  adnandoiqwnfo sdnoandoand', '21amtics253@gmail.com', '2022-10-19', '11:12:44'),
(3, 'Dhruv Patel', '9106033690', 'sjkdbqwidqiwubiubwqcskjbckask ask cxn cscna sc as jk d ajcabdiqwduinczxmnc,mxnckjasnkjnajsncjn', '21amtics445@gmail.com', '2022-10-19', '11:21:54'),
(4, 'Patel dhruv', '9106033690', 'Euwbsusuwbeus', '21amtics445@gmail.com', '2022-10-30', '09:32:10'),
(5, 'Patel Dhruv', '9106033690', 'Shdhe d', 'pateldhruv2460@gmail.com', '2022-10-30', '09:36:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `queries`
--
ALTER TABLE `queries`
  ADD PRIMARY KEY (`QUERY_NO`),
  ADD UNIQUE KEY `QUERY_NO` (`QUERY_NO`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `queries`
--
ALTER TABLE `queries`
  MODIFY `QUERY_NO` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
