import { listUsersService } from "../services/listUsers.service"

export const listUsersController = (request, response) => {
    const users = listUsersService()

    if (users.length === 0) {
        return response.json({ "Msg": "ops...não tem users ainda :(" })
    }

    return response.json(users)
}