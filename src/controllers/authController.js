import initModels from '../models/init-models.js'
import sequelize from '../models/connect.js'
import { where, Sequelize } from 'sequelize'
import bcrypt from 'bcrypt'
import { createToken } from '../config/jwt.js'

const model = initModels(sequelize)

const signup = async (req, res) => {
    let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;

    let checkEmail = await model.nguoi_dung.findOne({
        where: {
            email: email
        }
    })

    let hashpassword = bcrypt.hashSync(mat_khau, 10)

    if (checkEmail) {
        res.send("Email đã tồn tại")
    } else {
        let newData = {
            email,
            mat_khau: hashpassword,
            ho_ten,
            tuoi,
            anh_dai_dien
        }
        let result = await model.nguoi_dung.create(newData)
        res.send("Đăng ký thàng công")
    }
}

const signin = async (req, res) => {
    let {email, mat_khau} = req.body;

    let checkEmail = await model.nguoi_dung.findOne({
        where: {
            email: email
        }
    })

    if (checkEmail) {
        let checkPassword = bcrypt.compareSync(mat_khau, checkEmail.mat_khau)
        if (checkPassword) {
            let token = createToken({data: checkEmail})
            res.send(token)
            return
        } else {
            res.send("Mật khẩu không đúng")
        }
    } else {
        res.send("Email chưa được đăng ký")
    }
}


export {
    signup,
    signin,

}