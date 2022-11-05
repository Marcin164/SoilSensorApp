import { loginApi, refreshTokenApi } from "../Api/auth"

const login = async (data:any) => {
    try {
        if(!data.email) throw Error("there is no email")
        if(data.email === "") throw Error("type in email")
        if(!data.password) throw Error("there is no password")
        if(data.password === "") throw Error("type in password")

        const result = await loginApi({email: data.email, password: data.password})

        if(!result.ok) throw Error("Wrong email or password")

        const resultJson = await result.json()

        return {result, ...resultJson}

    } catch (error) {
        return error
    }
}

const refreshToken = async (token:string) => {
    try{
        if(!token) throw Error("No token")

        const result = await refreshTokenApi(token)

        if(!result.ok) throw Error("Cannot refresh")

        return result

    } catch(error) {
        return error
    }
}   

export const AuthService = {
    login,
    refreshToken
}