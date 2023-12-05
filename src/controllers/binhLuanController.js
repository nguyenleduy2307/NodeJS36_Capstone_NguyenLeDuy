import initModels from '../models/init-models.js'
import sequelize from '../models/connect.js'
import { where, Sequelize } from 'sequelize'
import { decodeToken } from '../config/jwt.js'

const model = initModels(sequelize)


const getBinhLuanTheoIDAnh = async (req, res) => {
    let { idAnh } = req.params;
    let data = await model.binh_luan.findAll(
        {
            where: {
                hinh_id: idAnh
            }
        }
    )
    res.send(data)
}

const postBinhLuan = async (req, res) => {

    let { hinh_id, ngay_binh_luan, noi_dung } = req.body;

    let { token } = req.headers;

    let decode = decodeToken(token)

    let { nguoi_dung_id } = decode.data.data

    let result = await model.binh_luan.create({ nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung })

    res.send("Thêm bình luận thành công")

}


export {
    getBinhLuanTheoIDAnh,
    postBinhLuan
}