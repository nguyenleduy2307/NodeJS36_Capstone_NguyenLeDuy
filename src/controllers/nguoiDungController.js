import initModels from '../models/init-models.js'
import sequelize from '../models/connect.js'
import { where, Sequelize } from 'sequelize'
import { decodeToken } from '../config/jwt.js'
import bcrypt from 'bcrypt'

const model = initModels(sequelize)


const thongTinUser = async (req, res) => {

    let { token } = req.headers;

    let decode = decodeToken(token)

    let { nguoi_dung_id } = decode.data.data

    let result = await model.nguoi_dung.findAll({
        where: {
            nguoi_dung_id: nguoi_dung_id
        }
    })

    res.send(result)

}


const updateUser = async (req, res) => {

    let {email, mat_khau, ho_ten, tuoi, anh_dai_dien} = req.body;

    let {token} = req.headers;

    let {nguoi_dung_id} = decodeToken(token).data.data;

    let infoUser = await model.nguoi_dung.findOne ({
        where: {
            nguoi_dung_id: nguoi_dung_id
        }
    })

    let hashPassword = bcrypt.hashSync(mat_khau, 10)

    if (infoUser) {

        let newData = {
            ... infoUser,
            email,
            mat_khau: hashPassword,
            ho_ten,
            tuoi,
            anh_dai_dien,
        }

        let result = await model.nguoi_dung.update(newData, {
            where: {
                nguoi_dung_id: nguoi_dung_id
            }
        })

        res.send("Update người dùng thành công")

    } else {
        res.send("Người dùng không tồn tại")
    }
}

export {
    thongTinUser,
    updateUser,

}