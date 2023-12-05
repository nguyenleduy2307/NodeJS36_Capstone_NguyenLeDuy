/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `binh_luan`;
CREATE TABLE `binh_luan` (
  `binh_luan_id` int NOT NULL AUTO_INCREMENT,
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_binh_luan` datetime NOT NULL,
  `noi_dung` varchar(50) NOT NULL,
  PRIMARY KEY (`binh_luan_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `binh_luan_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `hinh_anh`;
CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(50) NOT NULL,
  `duong_dan` varchar(50) NOT NULL,
  `mo_ta` varchar(50) NOT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `luu_anh`;
CREATE TABLE `luu_anh` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_luu` datetime NOT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `luu_anh_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `nguoi_dung`;
CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mat_khau` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ho_ten` varchar(50) NOT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(1, 1, 3, '2023-10-01 10:10:10', 'noi dung 1');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(2, 1, 5, '2023-10-02 10:10:10', 'noi dung 2');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(3, 2, 1, '2023-10-03 10:10:10', 'noi dung 3');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(4, 2, 5, '2023-10-04 10:10:10', 'noi dung 4'),
(5, 3, 6, '2023-10-05 10:10:10', 'noi dung 5'),
(6, 3, 8, '2023-10-06 10:10:10', 'noi dung 6'),
(7, 4, 1, '2023-10-07 10:10:10', 'noi dung 7'),
(8, 4, 9, '2023-10-08 10:10:10', 'noi dung 8'),
(9, 4, 10, '2023-10-09 10:10:10', 'noi dung 9'),
(10, 4, 8, '2023-10-10 10:10:10', 'noi dung 10'),
(11, 1, 7, '2023-11-14 00:00:00', 'hình đẹp'),
(12, 1, 5, '2023-01-01 00:00:00', 'Đẹp lắm'),
(13, 7, 6, '2023-01-01 00:00:00', 'Đẹp lắm em ơi'),
(14, 7, 6, '2023-01-01 00:00:00', 'Đẹp lắm em ơi'),
(15, 7, 8, '2025-01-01 00:00:00', 'Đẹp lắm em ơi'),
(16, 7, 8, '2025-01-01 00:00:00', 'Đẹp lắm em ơi');

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(1, 'Hinh1', 'duong dan 1', 'mo ta 1', 1);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(3, 'Hinh3', 'duong dan 3', 'mo ta 3', 1);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(5, 'Hinh5', 'duong dan 5', 'mo ta 5', 2);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(6, 'Hinh6', 'duong dan 6', 'mo ta 6', 2),
(7, 'Hinh7', 'duong dan 7', 'mo ta 7', 3),
(8, 'Hinh8', 'duong dan 8', 'mo ta 8', 3),
(9, 'Hinh9', 'duong dan 9', 'mo ta 9', 3),
(10, 'Hinh10', 'duong dan 10', 'mo ta 10', 4),
(11, 'Hinh A', 'Duong Dan A', 'mota A', 1),
(12, 'Hinh A', 'Duong Dan A', 'mota A', 1),
(13, 'Hinh A', 'Duong Dan A', 'mota A', 1),
(14, 'Hinh P', 'Duong Dan P', 'mota A', 1);

INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1, 3, '2023-10-01 10:10:10');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1, 5, '2023-10-02 10:10:10');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1, 6, '2023-10-03 10:10:10');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(2, 3, '2023-10-09 17:00:00'),
(2, 6, '2023-10-03 10:10:10'),
(2, 7, '2023-10-09 17:00:00'),
(3, 7, '2023-10-03 10:10:10'),
(4, 5, '2023-10-03 10:10:10'),
(4, 9, '2023-10-03 10:10:10');

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(1, 'UD@gmail.com', '$2b$10$xmb2fw6CyANpGmk/V22mmO6Cm9/Uiqbd5g9an7lanZ7paISexIBJy', 'UD', 25, 'Hình');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(2, 'b@gmail.com', '$2b$10$u9P1fzgK0Wd8y0TkqL9mxOH7tz174j4ywOOCRukk3Dq7lvl9VEERC', 'Nguyễn Văn B', 25, 'image2');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(3, 'c@gmail.com', '$2b$10$u9P1fzgK0Wd8y0TkqL9mxOH7tz174j4ywOOCRukk3Dq7lvl9VEERC', 'Nguyễn Văn C', 22, 'image3');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(4, 'd@gmail.com', '$2b$10$u9P1fzgK0Wd8y0TkqL9mxOH7tz174j4ywOOCRukk3Dq7lvl9VEERC', 'Nguyễn Văn D', 24, 'image4'),
(5, 't@gmail.com', '$2b$10$u9P1fzgK0Wd8y0TkqL9mxOH7tz174j4ywOOCRukk3Dq7lvl9VEERC', 'Nguyễn Văn T', 25, 'hinhT'),
(6, 'r@gmail.com', '$2b$10$u9P1fzgK0Wd8y0TkqL9mxOH7tz174j4ywOOCRukk3Dq7lvl9VEERC', 'Nguyễn Văn R', 25, 'hinhR'),
(7, 's@gmail.com', '$2b$10$u9P1fzgK0Wd8y0TkqL9mxOH7tz174j4ywOOCRukk3Dq7lvl9VEERC', 'Nguyễn Văn S', 25, 'hinhS'),
(8, 'P@gmail.com', '$2b$10$6zMYM5xhE.pfZLYMq6SIyuZVFL4zUrShbzwm7IIbP8694A.3yX.6q', 'Nguyễn Văn P', 25, 'hinhP');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;