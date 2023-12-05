import initModels from '../models/init-models.js'
import sequelize from '../models/connect.js'
import { where, Sequelize } from 'sequelize'
import { decodeToken } from '../config/jwt.js'
import bcrypt from 'bcrypt'

const model = initModels(sequelize)


const luuAnh = async (req, res) => {

    let {hinh_id, ngay_luu} = req.body;

    let {token} = req.headers;

    let {nguoi_dung_id} = decodeToken(token).data.data

    let data = await model.luu_anh.findAll({
        where: {
            nguoi_dung_id: nguoi_dung_id,
            hinh_id: hinh_id
        }
    })

    if (data.length !== 0) {
        res.send("Hình này đã được lưu trước đó")
    } else {
        await model.luu_anh.create({nguoi_dung_id, hinh_id, ngay_luu})
        res.send("Lưu thành công")
    }


}

export {
    luuAnh,

}
