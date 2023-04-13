CREATE DATABASE  IF NOT EXISTS `petsuniverse_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `petsuniverse_db`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: petsuniverse_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `zipcode` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Calle Falsa 123','Mataderos','Buenos Aires',1350,'2023-04-06 14:02:33','2023-04-06 14:02:33',NULL),(2,'Siempre Vivas 342','Lanus','Buenos Aires',1320,'2023-04-06 14:02:33','2023-04-06 14:02:33',NULL),(3,'Siempre Vivas 567','Lanus','Buenos Aires',1380,'2023-04-06 14:02:33','2023-04-06 14:02:33',NULL),(4,'Springfield 145','Temperley','Buenos Aires',1320,'2023-04-06 14:02:33','2023-04-06 14:02:33',NULL),(5,'Springfield 245','Temperley','Buenos Aires',1320,'2023-04-06 14:02:33','2023-04-06 14:02:33',NULL),(6,'Calle Falsa 697','Merlo','Buenos Aires',5678,'2023-04-06 14:02:33','2023-04-06 14:02:33',NULL);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `productId` int NOT NULL,
  `orderId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `orderId` (`orderId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,1,3,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(2,1,5,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'perros','2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(2,'gatos','2023-04-06 14:02:34','2023-04-06 14:02:34',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `total` int DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2023-04-06 14:02:34',7700,5,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(2,'2023-04-06 14:02:34',8100,2,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `categoryId` int NOT NULL,
  `productTypeId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  KEY `productTypeId` (`productTypeId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`productTypeId`) REFERENCES `producttypes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Alimento Hop','Perro adulto mediano y grande, Sabor mix: Pulpa de remolacha, Extracto de yucca, Vitamina E, Cloruro de sodio, Sulfato de hierro, Carbonato de calcio, DL-metionina, Nicotinamida, Pantotenato de calcio, Vitamina B1, Vitamina B2, Vitamina K3, Biotina, Vitamina A, Vitamina D3, Ácido fólico, Vitamina B12, Vitamina B6, Iodato de calcio, Selenito de sodio',5190,12,'perro1.png',21,27,1,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(2,'Alimento Pacha','Perros adultos, coktail de sabores: Maiz, harina de carne y huesos bovina, arroz, germen de maiz, afechillo de trigo, expeller de soja, sal, hidrolizado de visceras frescas(pollo y cerdo), aceite de pollo. Colorantes: chocolate, amarillo - anaranjado. Antioxidantes: BHT, BHA, extracto de Romero. Núcleo Vitamínico - Mineral: vitamina A, vitamina D3, vitamina E, vitamina K, pantotenato de calcio, ácido fólico, niacina, vitamina B1, vitamina B2, vitamina B6, vitamina B12, biotina, óxido de manganeso, óxido de zinc, iodato de calcio, sulfato ferroso, sulfato de cobre, cloruro de colina, sorbato de potasio, selenito de sodio.',4661,5,'perro2.png',22,56,1,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(3,'Old Prince Premium','Perros adultos, Su fórmula contiene un 25% de proteína, 100% natural y no contiene soja, diseñado para fortalecer la estructura corporal y mejorar la salud de la piel y el pelaje, manteniéndolo suave y brillante.',7700,25,'perro3.png',15,88,1,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(4,'Sieger Super Premium','Perros de todos los tamaños, ingredientes: Harina de subproductos de pollo, maíz integral, arroz, gluten de maíz, aceite de pollo refinado (fuente de omega 6), harina de pescado, saborizante natural (hidrolizado de menudencias porcinas y aviares), aceite de pescado refinado (fuente de omega 3), trigo, pulpa de remolacha, inulina, cloruro de sodio, fructo-oligosacáridos (FOS), colina, L-lisina, DL-metionina, carbonato de calcio, fosfato monodicálcico, extracto de yucca, antioxidantes naturales (extracto de romero/tocoferoles), betaína, manano-oligosacáridos (MOS), condroitín sulfato, glucosamina, vitamina E, antifúngico (ácido propiónico), sulfato de hierro, metionina de zinc, sulfato de zinc, vitamina C, sulfato de cobre, taurina, nicotinamida, pantotenato de calcio, sulfato manganoso, vitamina A, vitamina B2, vitamina B6, vitamina D3, vitamina B1, vitamina K3, biotina, ácido fólico, vitamina B12, iodato de calcio, selenio orgánico, selenito de sodio.',12500,12,'perro4.png',20,10,1,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(5,'Agility Active Health','Perros adultos de raza mediana y grande, sabor mix: Pulpa de remolacha, Extracto de yucca, Vitamina E, Cloruro de sodio, Sulfato de hierro, Carbonato de calcio, DL-metionina, Nicotinamida, Pantotenato de calcio, Vitamina B1, Vitamina B2, Vitamina K3, Biotina, Vitamina A, Vitamina D3, Ácido fólico, Vitamina B12, Vitamina B6, Iodato de calcio, Selenito de sodio',8100,10,'perro5.png',20,31,1,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(6,'Gigwy Duraspikes Dinosaurio',' Algodón/Tpr Azul',8588,0,'juguetePerro1.png',NULL,30,1,2,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(7,'Juguete Peluche Hulk','tela suave y resistente. Está fabricado con material 100% poliéster altamente durable a las mordeduras. Además posee sonido en su interior y su cuerpo es angosto permitiento la comodidad en el agarre de la mascota. Medidas: 21 cm x 14 cm x 6 cm.',4994,27,'juguetePerro2.png',NULL,9,1,2,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(8,'Mordedor Star Wars Con Sonido','ideal para estimular la dentición y ayudar a tu perro a liberar energía. Está hecho de plástico resistente y no tóxico, con hendiduras que estimulan una mejor higiene dental.',4456,5,'juguetePerro3.png',NULL,5,1,2,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(9,'Total Full Suspension','Antiparasitario interno en suspensión oral. Estuche con frasco con 15 ml y jeringa dosificadora. Antiparasitario interno de amplio espectro. Fenbendazol: Actúa por unión a la tubulina, proteína que compone los microtúbulos del parásito, inhibiendo la captación de glucosa parasitaria lo que genera disminución de energía y muerte. Pirantel: Estimula la liberación de la acetilcolina, inhibiendo la colintesterasa y provocando un bloqueo neuromuscular en los helmintos. En consecuencia,provoca parálisis y desprendimiento de los parásitos.',1500,0,'saludPerro1.png',NULL,18,1,3,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(10,'Serenex Spray','Libera desde el sitio del rociado, feromona M2. Estas feromonas, con acción análoga a las secretadas naturalmente durante la maternidad canina, ayuda a controlar conductas inadecuadas en los caninos. Estos comportamientos generalmente son consecuencia del estrés y la ansiedad ante situaciones desafiantes y se manifiestan por ejemplo con aullidos, destrucción de muebles y objetos, eliminación de orina y heces en lugares inapropiados, etc. En comparación con las feromonas naturales, las feromonas M2 tienen mayor estabilidad, nivel de difusión y residualidad en el medio ambiente. Funciona tanto con cachorros, así como con perros adultos. Es una solución libre de fármacos, recomendada por los veterinarios para los problemas de comportamiento. Puede ser usado en conjunto con otras medicaciones u otros tratamientos.',4900,0,'saludPerro2.png',NULL,23,1,3,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(11,'Vitalcan Complete','Gato senior adultos mayores de 7 años. Sabor: Mix, aporta minerales quelados que favorecen los procesos metabólicos, proteínas de alto valor biológico y vitaminas del complejo B que los gatos mayores necesitan en esta etapa de la vida. Protege su pelo y su sistema urinario, además de controlar el olor de las heces.',1259,0,'michi1.png',2,80,2,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(12,'Alimento Hop','Gatos adultos, sabor: Mix, ingrediente pollo, con proteina bruta 29%',8000,12,'michi2.png',15,16,2,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(13,'Alimento Infinity Premium Pet Food','Gatos adultos, sabor: Mix, Aporte de nutrientes: 3% Fibra cruda, 10% minerales, 1.5% Calcio, 1.1% Fósforo',11390,12,'michi3.png',10,33,2,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(14,'Alimento Agility Premium Urinary','Gatos adultos, sabor: Mix, 23% de Proteinas, 14% de Grasa, sin colorantes ni conservantes artificiales',8600,15,'michi4.png',10,25,2,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(15,'Alimento Complete','Gatos adultos, ingredientes: Arroz, harina de vísceras de pollo, harina de carne, maíz, gluten de maíz, harina de soja micronizada, harina de germen de maíz, aceite de pollo, grasa bovina, pulpa de remolacha, hidrolizado de vísceras de pollo, aceite de pescado, levadura de cerveza, trigo, manano-oligosacáridos (MOS), fructooligosacáridos (FOS), taurina, lisina, metionina, sal, zeolita, extracto de Yucca schidigera, celulosa en polvo, cloruro de potasio, bisulfato de sodio, sorbato de potasio, BHA, BHT, lecitina, tocoferoles, extracto de romero. Vitaminas: A, D3, E, colina, C, ácido nicotínico, biotina, ácido pantoténico, B1, B2, B6, K3, ácido fólico, B12. Minerales: zinc, hierro, cobre, manganeso, yodo y selenio',1500,0,'michi5.png',2,34,2,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(16,'Set X 3 Ratitas','Ratas De Paño Con Chifle, Ideal para estimular los sentidos de tu gato. Mantenerlo feliz y entretenido. Ningún juguete para perro/gato es indestructible. Se debe prestar atención a la forma de juego de su mascota, ya que si la intención es romperlo es posible que lo haga.',776,20,'jugueteGato1.png',NULL,99,2,2,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(17,'Vesper Rocket','Forma de cohete espacial. Incluye almohadon suave y mullido, Las redes aseguran una optima ventilacion, Confeccionado en tela de alta calidad. Los pelos no se adhieren, Base ponderada para mayor estabilidad, Fácil de ensamblar, no requiere herramientas, Incluye bolsa para guardar',32147,0,'jugueteGato2.png',NULL,11,2,2,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(18,'Rascador Cancat 4 Pisos','Tipo de rascador: Torre, Material del tapizado: Felpa, Ancho x Altura x Largo: 35 cm x 50 cm x 50 cm',80990,0,'jugueteGato3.png',NULL,22,2,2,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(19,'Feliway Classic Feromona Spray','Relajante para gatos, ayuda a reducir el estrés y la ansiedad durante las visitas al veterinario y la hospitalización o el alojamiento de su gato. se puede utilizar para ayudar a controlar problemas de comportamiento como rascarse y rociar orina. También se puede utilizar para ayudar a reducir los niveles de estrés de sus gatos durante los viajes y las visitas al veterinario.',5695,0,'saludGato1.png',NULL,25,2,3,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(20,'Purina Fortiflora','Fortiflora es un suplemento probiótico que ha demostrado favorecer la salud intestinal del gato y desarrollar un sistema inmunitario fuerte. ',5809,0,'saludGato2.png',NULL,12,2,3,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producttypes`
--

DROP TABLE IF EXISTS `producttypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producttypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producttypes`
--

LOCK TABLES `producttypes` WRITE;
/*!40000 ALTER TABLE `producttypes` DISABLE KEYS */;
INSERT INTO `producttypes` VALUES (1,'alimento','2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(2,'juguetes','2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(3,'salud','2023-04-06 14:02:34','2023-04-06 14:02:34',NULL);
/*!40000 ALTER TABLE `producttypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(2,'customer','2023-04-06 14:02:34','2023-04-06 14:02:34',NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230403203425-create-address.js'),('20230403215027-create-role.js'),('20230403215228-create-product-type.js'),('20230403221158-create-category.js'),('20230403221830-create-user.js'),('20230403222304-create-product.js'),('20230403222712-create-user-product.js'),('20230403223043-create-order.js'),('20230403223253-create-cart.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userproducts`
--

DROP TABLE IF EXISTS `userproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userproducts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `productId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `userproducts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `userproducts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userproducts`
--

LOCK TABLES `userproducts` WRITE;
/*!40000 ALTER TABLE `userproducts` DISABLE KEYS */;
INSERT INTO `userproducts` VALUES (1,5,3,'2023-04-06 14:02:34','2023-04-06 14:02:34'),(2,2,5,'2023-04-06 14:02:34','2023-04-06 14:02:34');
/*!40000 ALTER TABLE `userproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(105) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `roleId` int NOT NULL,
  `addressId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`),
  KEY `addressId` (`addressId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Gabriela','Meza','gabrielameza1993@gmail.com','$2a$10$jC83hKqaoRLwwghSKgBLFeCxxxZEFc95bjN5rP5e05ZR3i3q0xp0m','defaultAvatar.png',1,1,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(2,'Massi','Cuellar','messiteamo@gmail.com','$2a$10$5vG2hdU5Fc4Xh.58QNCqQu3gKoaMhiZ5kef4CFSNmlqYyVNTf43fu','defaultAvatar.png',2,2,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(3,'Maximiliano Ezequiel','Cuellar','masi12boca@gmail.com','$2a$10$PXz.HnXMUPy5sGAbZpAau.myHXIAqrdlw6gDnF4A6AVKHCGEPw7ZO','defaultAvatar.png',1,3,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(4,'cristian','yelmo','cristianama2019@gmail.com','$2a$10$V4kFnchkJXJ.6uTgLnTQI.KYTrP/ORvNFxriQuyL6AXbI3WFz8r7W','defaultAvatar.png',1,4,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(5,'elba','gallo','holaxd@gmail.com','$2a$10$Bto8I.6.L2l.N73nzEtXS.rvVgAGEzLre5Mdsl.8I6d8oC.lkiLEK','defaultAvatar.png',2,5,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL),(6,'Gustavo','Romero','gus_eze1988@hotmail.com','$2a$10$PwuW/Xxqs6pdjIeWVJVcvuokELHJ9l.xpW/TcMhKAimq2AQLYUR56','defaultAvatar.png',1,6,'2023-04-06 14:02:34','2023-04-06 14:02:34',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-06 11:04:40
