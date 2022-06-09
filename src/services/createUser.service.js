import { users } from "../database"
import { v4 as uuidv4 } from "uuid"
import * as bcrypt from "bcryptjs"

export const createUserService = async (email, name, password) => {
    const userAlreadyExists = users.find(user => user.email === email)

    if (userAlreadyExists) {
        return "This Email address is alreasy being used"
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
        email,
        name,
        password: hashedPassword,
        id: uuidv4()
    }

    users.push(newUser)

    return newUser
}