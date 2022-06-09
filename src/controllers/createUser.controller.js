import { createUserService } from "../services/createUser.service";

export const createUserController = (request, response) => {
    const { email, name, password } = request.body

    const user = createUserService(email, name, password)

    return response.json(user)
}