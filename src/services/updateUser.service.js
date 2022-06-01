import { users } from "../database"

export const updateUserService = (email, id, name) => {
    const userToBeUpdate = {
        email,
        id,
        name
    }

    const userToBeUpdateIndex = users.findIndex(element => element.id === id)

    if (userToBeUpdateIndex === -1) {
        return "user não encontrado"
    }

    users[userToBeUpdateIndex] = { ...users[userToBeUpdateIndex], ...userToBeUpdate }

    return users[userToBeUpdateIndex]
}