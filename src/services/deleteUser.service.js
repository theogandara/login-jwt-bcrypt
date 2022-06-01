import { users } from "../database"


export const deleteUserService = (id) => {
    const idUserToBeDeleted = users.findIndex(element => element.id === id)

    if (idUserToBeDeleted === -1) {
        return "User não encontrado"
    }

    users.splice(idUserToBeDeleted, 1)

    return "Usuário excluido"
}