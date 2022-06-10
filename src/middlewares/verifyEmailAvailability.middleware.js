import { users } from "../database";

export const verifyEmailAvailabilityMiddleware = (request, response, next) => {
    const { email } = request.body

    const userAlreadyExists = users.find(user => user.email === email)

    if (userAlreadyExists) {
        return response
            .status(400)
            .json({ message: "This Email address is alreasy being used" })
    }
    next()
}