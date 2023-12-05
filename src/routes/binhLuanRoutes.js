import express from 'express'
import { getBinhLuanTheoIDAnh, postBinhLuan } from '../controllers/binhLuanController.js';
import { khoaAPI } from '../config/jwt.js';

const binhLuanRoutes = express.Router();

/** API Get bình luận theo id ảnh
 * http://localhost:8088/api/binh-luan/binh-luan-theo-id-anh/5
 */
binhLuanRoutes.get("/binh-luan-theo-id-anh/:idAnh", getBinhLuanTheoIDAnh);



/** API Post bình luận
 * http://localhost:8088/api/binh-luan//them-binh-luan
 {
    "hinh_id": "1",
    "ngay_binh_luan": "01-10-2023",
    "noi_dung": "binh luan 1"
 }
 * token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGEiOnsibmd1b2lfZHVuZ19pZCI6MiwiZW1haWwiOiJiQGdtYWlsLmNvbSIsIm1hdF9raGF1IjoiJDJiJDEwJHU5UDFmemdLMFdkOHkwVGtxTDlteE9IN3R6MTc0ajR5d09PQ1J1a2szRHE3bHZsOVZFRVJDIiwiaG9fdGVuIjoiTmd1eeG7hW4gVsSDbiBCIiwidHVvaSI6MjUsImFuaF9kYWlfZGllbiI6ImltYWdlMiJ9fSwiaWF0IjoxNzAxNzg2OTUwLCJleHAiOjE4NTk1NzQ5NTB9.cmNWuZ72gSI4wFv6ygAeCjGMtUcnxkM3YZCJDPwOX7c
 */
binhLuanRoutes.post("/them-binh-luan", khoaAPI, postBinhLuan)


export default binhLuanRoutes