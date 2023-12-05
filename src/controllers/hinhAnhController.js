import initModels from '../models/init-models.js'
import sequelize from '../models/connect.js'
import { where, Sequelize } from 'sequelize'
import { decodeToken } from '../config/jwt.js'

const model = initModels(sequelize)
const op = Sequelize.Op

const getDanhSachAnh = async (req, res) => {
    let data = await model.hinh_anh.findAll()
    res.send(data)
}

const getDanhSachAnhTheoTen = async (req, res) => {
    let { searchName } = req.params;
    let data = await model.hinh_anh.findAll({
        where: {
            ten_hinh: {
                [op.like]: `%${searchName}%`
            }
        }
    })
    res.send(data)
}

const getThongTinAnhTheoIdAnh = async (req, res) => {
    let { idAnh } = req.params;
    let data = await model.hinh_anh.findByPk(idAnh,
        {
            include: ["nguoi_dung"]
        }
    )
    res.send(data)
}

const getDanhSachAnhTaoTheoUser = async (req, res) => {

    let {token} = req.headers;

    let {nguoi_dung_id} = decodeToken(token).data.data

    let data = await model.hinh_anh.findAll({
        where: {
            nguoi_dung_id: nguoi_dung_id
        }
    }
    )
    res.send(data)
}

const getDanhSachAnhLuuTheoUser = async (req, res) => {

    let {token} = req.headers;

    let {nguoi_dung_id} = decodeToken(token).data.data

    let data = await model.luu_anh.findAll({
        where: {
            nguoi_dung_id: nguoi_dung_id
        }
    }
    )
    res.send(data)
}

const postAnhTheoUser = async (req, res) => {

    let {ten_hinh, duong_dan, mo_ta} = req.body;

    let {token} = req.headers;

    let {nguoi_dung_id} = decodeToken(token).data.data

    let data = await model.hinh_anh.create({ten_hinh, duong_dan, mo_ta, nguoi_dung_id})

    res.send("Thêm hình ảnh thành công")
}

const deleteAnhTheoIdAnh = async (req, res) => {

    let {idHinh} = req.body;
    
    await model.hinh_anh.destroy({
        where: {
            hinh_id: idHinh
        }
    })

    res.send("Xoá hình ảnh thành công")
}

export {
    getDanhSachAnh,
    getDanhSachAnhTheoTen,
    getThongTinAnhTheoIdAnh,
    getDanhSachAnhTaoTheoUser,
    getDanhSachAnhLuuTheoUser,
    postAnhTheoUser,
    deleteAnhTheoIdAnh,

}