import express from 'express'
import { signin, signup } from '../controllers/authController.js';

const authRoutes = express.Router();

/** API Sign-up
 * http://localhost:8088/api/auth/sign-up
 {
    "email": "rr@gmail.com",
    "mat_khau": "12345",
    "ho_ten": "Nguyen Van A",
    "tuoi": 22,
    "anh_dai_dien": "aa"
}
 */
authRoutes.post("/sign-up", signup);




/** API Sign-in
 * http://localhost:8088/api/auth/sign-in
 {
    "email": "b@gmail.com",
    "mat_khau": "12345"
 }
 */
authRoutes.post("/sign-in", signin);


export default authRoutes