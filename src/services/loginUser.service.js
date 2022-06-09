import { users } from "../database"
import jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"

export const loginUserService = (email, password) => {
    const user = users.find((element) => element.email === email)

    if (!user) {
        return { "message": "user not found" }
    }

    const passwordMatched = bcrypt.compareSync(password, user.password)

    if (!passwordMatched) {
        return { "message": "Email or password incorrect" }
    }

    const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" })

    return token
}