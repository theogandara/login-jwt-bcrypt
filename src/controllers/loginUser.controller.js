import { loginUserService } from "../services/loginUser.service"

export const loginUserController = (request, response) => {
    const { email, password } = request.body

    const userOrErrorMessage = loginUserService(email, password)

    return response.json(userOrErrorMessage)
}