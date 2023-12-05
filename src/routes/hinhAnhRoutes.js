import express from 'express'
import {deleteAnhTheoIdAnh, getDanhSachAnh, getDanhSachAnhLuuTheoUser, getDanhSachAnhTaoTheoUser, getDanhSachAnhTheoTen, getThongTinAnhTheoIdAnh, postAnhTheoUser} from '../controllers/hinhAnhController.js';
import { khoaAPI } from '../config/jwt.js';

const hinhAnhRoutes = express.Router();

/** API Get danh sách ảnh
 * http://localhost:8088/api/hinh-anh/danh-sach-anh
 */
hinhAnhRoutes.get("/danh-sach-anh", getDanhSachAnh);


/** API Get danh sách ảnh theo tên
 * http://localhost:8088/api/hinh-anh/danh-sach-anh/A
 */
hinhAnhRoutes.get("/danh-sach-anh/:searchName", getDanhSachAnhTheoTen);


/** API Get thông tin ảnh theo id ảnh
 * http://localhost:8088/api/hinh-anh/danh-sach-anh/2
 */
hinhAnhRoutes.get("/thong-tin-anh/:idAnh", getThongTinAnhTheoIdAnh);



/** API Get danh sách ảnh đã tạo theo user_id
 * http://localhost:8088/api/hinh-anh/danh-sach-anh-da-tao
 * token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGEiOnsibmd1b2lfZHVuZ19pZCI6MiwiZW1haWwiOiJiQGdtYWlsLmNvbSIsIm1hdF9raGF1IjoiJDJiJDEwJHU5UDFmemdLMFdkOHkwVGtxTDlteE9IN3R6MTc0ajR5d09PQ1J1a2szRHE3bHZsOVZFRVJDIiwiaG9fdGVuIjoiTmd1eeG7hW4gVsSDbiBCIiwidHVvaSI6MjUsImFuaF9kYWlfZGllbiI6ImltYWdlMiJ9fSwiaWF0IjoxNzAxNzg2OTUwLCJleHAiOjE4NTk1NzQ5NTB9.cmNWuZ72gSI4wFv6ygAeCjGMtUcnxkM3YZCJDPwOX7c
 */
hinhAnhRoutes.get("/danh-sach-anh-da-tao", khoaAPI, getDanhSachAnhTaoTheoUser);



/** API Get danh sách ảnh đã lưu theo user_id
 * http://localhost:8088/api/hinh-anh/danh-sach-anh-da-luu
 * token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGEiOnsibmd1b2lfZHVuZ19pZCI6MiwiZW1haWwiOiJiQGdtYWlsLmNvbSIsIm1hdF9raGF1IjoiJDJiJDEwJHU5UDFmemdLMFdkOHkwVGtxTDlteE9IN3R6MTc0ajR5d09PQ1J1a2szRHE3bHZsOVZFRVJDIiwiaG9fdGVuIjoiTmd1eeG7hW4gVsSDbiBCIiwidHVvaSI6MjUsImFuaF9kYWlfZGllbiI6ImltYWdlMiJ9fSwiaWF0IjoxNzAxNzg2OTUwLCJleHAiOjE4NTk1NzQ5NTB9.cmNWuZ72gSI4wFv6ygAeCjGMtUcnxkM3YZCJDPwOX7c
 */
hinhAnhRoutes.get("/danh-sach-anh-da-luu", khoaAPI, getDanhSachAnhLuuTheoUser);



/** API Post hình ảnh
 * http://localhost:8088/api/hinh-anh/them-hinh-anh
 * {
    "ten_hinh": "hinh 100",
    "mo_ta": "mo ta 100",
    "duong_dan": "duong dan 100"
    }
 * token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGEiOnsibmd1b2lfZHVuZ19pZCI6MiwiZW1haWwiOiJiQGdtYWlsLmNvbSIsIm1hdF9raGF1IjoiJDJiJDEwJHU5UDFmemdLMFdkOHkwVGtxTDlteE9IN3R6MTc0ajR5d09PQ1J1a2szRHE3bHZsOVZFRVJDIiwiaG9fdGVuIjoiTmd1eeG7hW4gVsSDbiBCIiwidHVvaSI6MjUsImFuaF9kYWlfZGllbiI6ImltYWdlMiJ9fSwiaWF0IjoxNzAxNzg2OTUwLCJleHAiOjE4NTk1NzQ5NTB9.cmNWuZ72gSI4wFv6ygAeCjGMtUcnxkM3YZCJDPwOX7c
 */
hinhAnhRoutes.post("/them-hinh-anh", khoaAPI, postAnhTheoUser);


/** API Xóa hình ảnh
 * http://localhost:8088/api/hinh-anh/xoa-anh
 * {
    "idHinh": 7
}
 */
hinhAnhRoutes.delete("/xoa-anh", deleteAnhTheoIdAnh);


export default hinhAnhRoutes

