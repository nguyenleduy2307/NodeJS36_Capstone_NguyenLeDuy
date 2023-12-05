import express from 'express'
import { luuAnh } from '../controllers/luuAnhController.js';

const luuAnhRoutes = express.Router();


/** API lưu ảnh
 * http://localhost:8088/api/luu-anh
 {
    "hinh_id": 5,
    "ngay_luu": "10-10-2023"
 }
 */
luuAnhRoutes.post("", luuAnh);


export default luuAnhRoutes