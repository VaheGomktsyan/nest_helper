/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 100422
Source Host           : localhost:3306
Source Database       : node3.4

Target Server Type    : MYSQL
Target Server Version : 100422
File Encoding         : 65001

Date: 2024-01-29 17:15:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for group
-- ----------------------------
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `count` int(11) NOT NULL,
  `teacherId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teacherId` (`teacherId`),
  CONSTRAINT `group_ibfk_1` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf16;

-- ----------------------------
-- Records of group
-- ----------------------------
INSERT INTO `group` VALUES ('1', 'Gagik', '1', null);
INSERT INTO `group` VALUES ('2', 'Gagik', '1', null);
INSERT INTO `group` VALUES ('3', 'Gagik', '1', '1');

-- ----------------------------
-- Table structure for grouplesson
-- ----------------------------
DROP TABLE IF EXISTS `grouplesson`;
CREATE TABLE `grouplesson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grouplessId` int(11) DEFAULT NULL,
  `groupLessonId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `grouplessId` (`grouplessId`),
  KEY `groupLessonId` (`groupLessonId`),
  CONSTRAINT `grouplesson_ibfk_1` FOREIGN KEY (`grouplessId`) REFERENCES `group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `grouplesson_ibfk_2` FOREIGN KEY (`groupLessonId`) REFERENCES `lesson` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf16;

-- ----------------------------
-- Records of grouplesson
-- ----------------------------
INSERT INTO `grouplesson` VALUES ('1', '1', '2');
INSERT INTO `grouplesson` VALUES ('2', '1', '3');
INSERT INTO `grouplesson` VALUES ('3', '2', '2');
INSERT INTO `grouplesson` VALUES ('4', '2', '3');
INSERT INTO `grouplesson` VALUES ('5', '3', '2');
INSERT INTO `grouplesson` VALUES ('6', '3', '3');

-- ----------------------------
-- Table structure for lesson
-- ----------------------------
DROP TABLE IF EXISTS `lesson`;
CREATE TABLE `lesson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf16;

-- ----------------------------
-- Records of lesson
-- ----------------------------
INSERT INTO `lesson` VALUES ('2', 'css');
INSERT INTO `lesson` VALUES ('3', 'js');
INSERT INTO `lesson` VALUES ('4', 'node');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `groupId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `groupId` (`groupId`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- ----------------------------
-- Records of student
-- ----------------------------

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf16;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', 'Gagik', 'Mesropyan');
SET FOREIGN_KEY_CHECKS=1;
