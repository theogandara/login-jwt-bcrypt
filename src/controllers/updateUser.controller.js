import { updateUserService } from "../services/updateUser.service"

export const updateUserController = (request, response) => {
    const { id } = request.params
    const { email, name } = request.body

    const updatedUser = updateUserService(email, id, name)

    return response.json(updatedUser)
}