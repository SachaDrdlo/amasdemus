-- MySQL dump 10.13  Distrib 5.7.26, for osx10.10 (x86_64)
--
-- Host: localhost    Database: amasdemus
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `beers`
--

DROP TABLE IF EXISTS `beers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beers` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `level` decimal(3,1) DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `description` text,
  `description2` text,
  `image` text,
  `id_brewery` smallint(6) DEFAULT NULL,
  `id_location` smallint(6) DEFAULT NULL,
  `id_glass` smallint(6) DEFAULT NULL,
  `id_type` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_brewery` (`id_brewery`),
  KEY `id_location` (`id_location`),
  KEY `id_glass` (`id_glass`),
  KEY `id_type` (`id_type`),
  CONSTRAINT `beers_ibfk_1` FOREIGN KEY (`id_brewery`) REFERENCES `breweries` (`id`),
  CONSTRAINT `beers_ibfk_2` FOREIGN KEY (`id_location`) REFERENCES `locations` (`id`),
  CONSTRAINT `beers_ibfk_3` FOREIGN KEY (`id_glass`) REFERENCES `glasses` (`id`),
  CONSTRAINT `beers_ibfk_4` FOREIGN KEY (`id_type`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beers`
--

LOCK TABLES `beers` WRITE;
/*!40000 ALTER TABLE `beers` DISABLE KEYS */;
INSERT INTO `beers` VALUES (1,'Tripel Karmeliet',8.4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'3 Monts Cuivrée',7.5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Anosteke',8.0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `beers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beers_flavours`
--

DROP TABLE IF EXISTS `beers_flavours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beers_flavours` (
  `id_beer` smallint(6) NOT NULL,
  `id_flavour` smallint(6) NOT NULL,
  PRIMARY KEY (`id_beer`,`id_flavour`),
  KEY `id_flavour` (`id_flavour`),
  CONSTRAINT `beers_flavours_ibfk_1` FOREIGN KEY (`id_beer`) REFERENCES `beers` (`id`),
  CONSTRAINT `beers_flavours_ibfk_2` FOREIGN KEY (`id_flavour`) REFERENCES `flavours` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beers_flavours`
--

LOCK TABLES `beers_flavours` WRITE;
/*!40000 ALTER TABLE `beers_flavours` DISABLE KEYS */;
INSERT INTO `beers_flavours` VALUES (1,2),(1,4),(1,16);
/*!40000 ALTER TABLE `beers_flavours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beers_formats`
--

DROP TABLE IF EXISTS `beers_formats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beers_formats` (
  `id_beer` smallint(6) NOT NULL,
  `id_format` smallint(6) NOT NULL,
  PRIMARY KEY (`id_beer`,`id_format`),
  KEY `id_format` (`id_format`),
  CONSTRAINT `beers_formats_ibfk_1` FOREIGN KEY (`id_beer`) REFERENCES `beers` (`id`),
  CONSTRAINT `beers_formats_ibfk_2` FOREIGN KEY (`id_format`) REFERENCES `formats` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beers_formats`
--

LOCK TABLES `beers_formats` WRITE;
/*!40000 ALTER TABLE `beers_formats` DISABLE KEYS */;
/*!40000 ALTER TABLE `beers_formats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `breweries`
--

DROP TABLE IF EXISTS `breweries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `breweries` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `description` text,
  `logo` text,
  `address` varchar(60) DEFAULT NULL,
  `url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breweries`
--

LOCK TABLES `breweries` WRITE;
/*!40000 ALTER TABLE `breweries` DISABLE KEYS */;
INSERT INTO `breweries` VALUES (1,'Brouwerij Bosteels',NULL,NULL,NULL,NULL),(2,'Brasserie 3-Monts',NULL,NULL,NULL,NULL),(3,'Brasserie du pays flamand',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `breweries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flavours`
--

DROP TABLE IF EXISTS `flavours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flavours` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `flavour` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flavours`
--

LOCK TABLES `flavours` WRITE;
/*!40000 ALTER TABLE `flavours` DISABLE KEYS */;
INSERT INTO `flavours` VALUES (1,'malt'),(2,'houblon'),(3,'épices'),(4,'fleurs'),(5,'fruits'),(6,'fruits secs'),(7,'caramel'),(8,'chocolat'),(9,'café'),(10,'acidulée'),(11,'champagne'),(12,'whisky'),(13,'rhum'),(14,'miel'),(15,'vanille'),(16,'céréales');
/*!40000 ALTER TABLE `flavours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formats`
--

DROP TABLE IF EXISTS `formats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `formats` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `format` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formats`
--

LOCK TABLES `formats` WRITE;
/*!40000 ALTER TABLE `formats` DISABLE KEYS */;
INSERT INTO `formats` VALUES (1,'25cl'),(2,'33cl'),(3,'50cl'),(4,'75cl');
/*!40000 ALTER TABLE `formats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `glasses`
--

DROP TABLE IF EXISTS `glasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `glasses` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `glass` varchar(30) DEFAULT NULL,
  `logo` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `glasses`
--

LOCK TABLES `glasses` WRITE;
/*!40000 ALTER TABLE `glasses` DISABLE KEYS */;
INSERT INTO `glasses` VALUES (1,'Tulipe',NULL),(2,'Calice',NULL),(3,'Ballon',NULL),(4,'Weizen',NULL),(5,'Pinte',NULL);
/*!40000 ALTER TABLE `glasses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locations` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `location` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Nord'),(2,'Pas de Calais'),(3,'Belgique');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `type` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'triple'),(2,'blonde'),(3,'brune'),(4,'blanche'),(5,'noire'),(6,'IPA'),(7,'ambrée');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'amasdemus'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-09 10:25:00
