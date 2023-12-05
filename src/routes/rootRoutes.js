import authRoutes from "./authRoutes.js";
import binhLuanRoutes from "./binhLuanRoutes.js";
import hinhAnhRoutes from "./hinhAnhRoutes.js";
import luuAnhRoutes from "./luuAnhRoutes.js";
import nguoiDungRoutes from "./nguoiDungRoutes.js";

import express from 'express'

const rootRoutes = express.Router();

rootRoutes.use("/hinh-anh", hinhAnhRoutes);

rootRoutes.use("/binh-luan", binhLuanRoutes);

rootRoutes.use("/auth", authRoutes);

rootRoutes.use("/nguoi-dung", nguoiDungRoutes);

rootRoutes.use("/luu-anh", luuAnhRoutes);

export default rootRoutes;