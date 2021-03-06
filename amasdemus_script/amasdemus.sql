-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: amasdemus
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

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
  `name` varchar(60) NOT NULL,
  `level` decimal(3,1) NOT NULL,
  `title` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `id_brewery` smallint(6) NOT NULL,
  `id_location` smallint(6) NOT NULL,
  `id_glass` smallint(6) NOT NULL,
  `id_type` smallint(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_brewery` (`id_brewery`),
  KEY `id_location` (`id_location`),
  KEY `id_glass` (`id_glass`),
  KEY `id_type` (`id_type`),
  CONSTRAINT `beers_ibfk_1` FOREIGN KEY (`id_brewery`) REFERENCES `breweries` (`id`),
  CONSTRAINT `beers_ibfk_2` FOREIGN KEY (`id_location`) REFERENCES `locations` (`id`),
  CONSTRAINT `beers_ibfk_3` FOREIGN KEY (`id_glass`) REFERENCES `glasses` (`id`),
  CONSTRAINT `beers_ibfk_4` FOREIGN KEY (`id_type`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beers`
--

LOCK TABLES `beers` WRITE;
/*!40000 ALTER TABLE `beers` DISABLE KEYS */;
INSERT INTO `beers` VALUES (4,"Ch'ti Triple",8.0,'3','une bonne chtite binouze','Mis en avant par le succ??s du d??sormais c??l??bre.\r\nBi??re de Garde cr????e en 1997 par la Brasserie Castelain, cette bi??re de fermentation haute qui contient trois fois plus de malts que la normale pr??sente une robe blonde cuivr??e qui rappelle celle des vieux Rhum.\r\nLe nez est port?? par des ar??mes de malts caramelis??s suivi par des notes de levure ??voquant les ??pices. L\'alcool lui, reste discret.\r\nSur le palais, la bi??re est onctueuse et apporte des saveurs mielleuses, mais aussi de caramel et de fruits. L\'ensemble est relev?? par des touches poivr??es et le final laisse appara??tre une fine amertume.\r\nEntre c??r??ales doucement miell??es et ??pices, cette Ch\'ti triple, riche et ??l??gante sublimera vos plats relev??s.',4,2,2,1);
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
  CONSTRAINT `beers_flavours_ibfk_1` FOREIGN KEY (`id_beer`) REFERENCES `beers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
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
-- Table structure for table `breweries`
--

DROP TABLE IF EXISTS `breweries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `breweries` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `logo` text NOT NULL,
  `address` varchar(60) NOT NULL,
  `url` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breweries`
--

LOCK TABLES `breweries` WRITE;
/*!40000 ALTER TABLE `breweries` DISABLE KEYS */;
INSERT INTO `breweries` VALUES (4,'Brasserie Castelain','La Brasserie Castelain embarque les amateurs et les amoureux de la bi??re dans une passionnante aventure o?? l???amour du m??tier et le savoir-faire artisanal font la force et le succ??s de l???entreprise.\r\nSp??cialiste de bi??res de garde, la Brasserie Castelain est une entreprise familiale ?? taille humaine qui a su conserver les nobles valeurs qui ont si bien anim?? et nourri l???entreprise tout au long de son existence. Situ??e en r??gion Nord-Pas-de-Calais-Picardie, o?? la culture de la bi??re est fortement ancr??e, la brasserie partage une passionnante histoire d???amour avec une client??le fid??le et florissante.\r\nGr??ce ?? un r??el savoir-faire, la Brasserie Castelain a su d??velopper plusieurs gammes de bi??res qui ont b??ti sa renomm??e. C???est une entreprise familiale qui se nourrit de la passion de toute une ??quipe. Toutes ses bi??res sont faites avec beaucoup d???amour et dans le strict respect d???une charte qualit?? ?? avec le plus de naturalit?? possible et un mode de fabrication qui va laisser le temps au temps avec une garde longue ??, nous pr??cise Annick Castelain, l\'actuelle dirigeante. Des bi??res qui  s???adaptent aux diff??rents gouts des consommateurs et aussi ?? diff??rents moments de consommation.','brasserie-castelain.png','13 Rue Pasteur, 62410 B??nifontaine','http://brasseriecastelain.com/'),(5,'Brasserie Castelain','La Brasserie Castelain embarque les amateurs et les amoureux de la bi??re dans une passionnante aventure o?? l???amour du m??tier et le savoir-faire artisanal font la force et le succ??s de l???entreprise.\r\nSp??cialiste de bi??res de garde, la Brasserie Castelain est une entreprise familiale ?? taille humaine qui a su conserver les nobles valeurs qui ont si bien anim?? et nourri l???entreprise tout au long de son existence. Situ??e en r??gion Nord-Pas-de-Calais-Picardie, o?? la culture de la bi??re est fortement ancr??e, la brasserie partage une passionnante histoire d???amour avec une client??le fid??le et florissante.\r\nGr??ce ?? un r??el savoir-faire, la Brasserie Castelain a su d??velopper plusieurs gammes de bi??res qui ont b??ti sa renomm??e. C???est une entreprise familiale qui se nourrit de la passion de toute une ??quipe. Toutes ses bi??res sont faites avec beaucoup d???amour et dans le strict respect d???une charte qualit?? ?? avec le plus de naturalit?? possible et un mode de fabrication qui va laisser le temps au temps avec une garde longue ??, nous pr??cise Annick Castelain, l\'actuelle dirigeante. Des bi??res qui  s???adaptent aux diff??rents gouts des consommateurs et aussi ?? diff??rents moments de consommation.','brasserie-castelain.png','13 Rue Pasteur, 62410 B??nifontaine','http://brasseriecastelain.com/');
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
INSERT INTO `flavours` VALUES (1,'malt'),(2,'houblon'),(3,'??pices'),(4,'fleurs'),(5,'fruits'),(6,'fruits secs'),(7,'caramel'),(8,'chocolat'),(9,'caf??'),(10,'acidul??e'),(11,'champagne'),(12,'whisky'),(13,'rhum'),(14,'miel'),(15,'vanille'),(16,'c??r??ales');
/*!40000 ALTER TABLE `flavours` ENABLE KEYS */;
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
  `logo` text DEFAULT NULL,
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
  `location` varchar(60) NOT NULL,
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
  `type` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'triple'),(2,'blonde'),(3,'brune'),(4,'blanche'),(5,'noire'),(6,'IPA'),(7,'ambr??e');
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

-- Dump completed on 2021-04-12 15:00:52
