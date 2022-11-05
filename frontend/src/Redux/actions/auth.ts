export const AuthTypes = {
    LOGIN_START: "LOGIN_START",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_ERROR: "LOGIN_ERROR",
    REFRESH_START: "REFRESH_START",
    REFRESH_SUCCESS: "REFRESH_SUCCESS",
    REFRESH_ERROR: "REFRESH_ERROR",
    LOGOUT_START: "LOGOUT_START"
}

const loginStart = (email:string, password:string) => ({
    type: AuthTypes.LOGIN_START,
    email,
    password
})

const loginSuccess = (data:any) => ({
    type: AuthTypes.LOGIN_SUCCESS,
    data
})

const loginError = (error:any) => ({
    type: AuthTypes.LOGIN_ERROR,
    error
})

const refreshStart = (refreshToken:string) => ({
    type: AuthTypes.REFRESH_START,
    refreshToken
})

const refreshSuccess = (accessToken:string) => ({
    type: AuthTypes.REFRESH_SUCCESS,
    accessToken
})

const refreshError = (error:string) => ({
    type: AuthTypes.REFRESH_ERROR,
    error
})

export const AuthActions = {
    loginStart,
    loginSuccess,
    loginError,
    refreshStart,
    refreshSuccess,
    refreshError
}