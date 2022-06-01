import { createUserService } from "../services/createUser.service";

export const createUserController = (request, response) => {
    const { email, name } = request.body

    const user = createUserService(email, name)

    return response.json(user)
}