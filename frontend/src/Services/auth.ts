import { loginApi } from "../Api/auth"

export const loginService = async (email:string, password:string) => {
    try {
        if(!email) throw Error("there is no email")
        if(email === "") throw Error("type in email")
        if(!password) throw Error("there is no password")
        if(password === "") throw Error("type in password")

        const result = await loginApi({email, password})

        if(!result.ok) throw Error("Wrong email or password")

        return result

    } catch (error) {
        return error
    }
}