import express from 'express'
import { khoaAPI } from '../config/jwt.js';
import { thongTinUser, updateUser } from '../controllers/nguoiDungController.js';

const nguoiDungRoutes = express.Router();


/** API Get thông tin người dùng
 * http://localhost:8088/api/nguoi-dung/thong-tin-user
 * token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGEiOnsibmd1b2lfZHVuZ19pZCI6MiwiZW1haWwiOiJiQGdtYWlsLmNvbSIsIm1hdF9raGF1IjoiJDJiJDEwJHU5UDFmemdLMFdkOHkwVGtxTDlteE9IN3R6MTc0ajR5d09PQ1J1a2szRHE3bHZsOVZFRVJDIiwiaG9fdGVuIjoiTmd1eeG7hW4gVsSDbiBCIiwidHVvaSI6MjUsImFuaF9kYWlfZGllbiI6ImltYWdlMiJ9fSwiaWF0IjoxNzAxNzg2OTUwLCJleHAiOjE4NTk1NzQ5NTB9.cmNWuZ72gSI4wFv6ygAeCjGMtUcnxkM3YZCJDPwOX7c
 */
nguoiDungRoutes.get("/thong-tin-user", khoaAPI, thongTinUser);



/** API Update thông tin người dùng
 * http://localhost:8088/api/nguoi-dung//update-user
 {
    "email": "b@gmail.com",
    "mat_khau": "$2b$10$u9P1fzgK0Wd8y0TkqL9mxOH7tz174j4ywOOCRukk3Dq7lvl9VEERC",
    "ho_ten": "Nguyễn Văn B",
    "tuoi": 100,
    "anh_dai_dien": "image2"
}
 * token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGEiOnsibmd1b2lfZHVuZ19pZCI6MiwiZW1haWwiOiJiQGdtYWlsLmNvbSIsIm1hdF9raGF1IjoiJDJiJDEwJHU5UDFmemdLMFdkOHkwVGtxTDlteE9IN3R6MTc0ajR5d09PQ1J1a2szRHE3bHZsOVZFRVJDIiwiaG9fdGVuIjoiTmd1eeG7hW4gVsSDbiBCIiwidHVvaSI6MjUsImFuaF9kYWlfZGllbiI6ImltYWdlMiJ9fSwiaWF0IjoxNzAxNzg2OTUwLCJleHAiOjE4NTk1NzQ5NTB9.cmNWuZ72gSI4wFv6ygAeCjGMtUcnxkM3YZCJDPwOX7c
 */
nguoiDungRoutes.put("/update-user", khoaAPI, updateUser);


export default nguoiDungRoutes