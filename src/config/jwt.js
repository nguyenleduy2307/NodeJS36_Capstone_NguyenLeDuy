import jwt from "jsonwebtoken"

const createToken = (data) => {
    let token = jwt.sign({ data }, "NodeJS36", { expiresIn: "5y" })
    return token
}

const checkToken = (token) => {
    return jwt.verify(token, "NodeJS36")
}

const decodeToken = (token) => {
    return jwt.decode(token, "NodeJS36")
}

const khoaAPI = (req, res, next) => {
    let { token } = req.headers;

    if (token) {

        if (checkToken(token)) {
            // res.send(checkToken(token))
        } else {
            res.status(401).send("Token không hợp lệ")
        }

        next();

    } else {
        res.status(403).send("Token user hết hạn hoặc không đúng")
    }
}

export {
    createToken,
    checkToken,
    khoaAPI,
    decodeToken

}
