import { deleteUserService } from "../services/deleteUser.service"

export const deleteUserController = (request, response) => {
    const { id } = request.params
    const message = deleteUserService(id)

    return response.json(message)
}