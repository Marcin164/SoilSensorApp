export const loginApi = async (data:any) => {
    const url = "http://localhost:4000/auth/login"
    const method = "POST"
    const headers = {'Content-Type': 'application/json'}
    const body = JSON.stringify(data)
    
    const response = await fetch(url, {method, headers, body})

    return response
}

export const refreshTokenApi = async (data:any) => {
    const url = "http://localhost:4000/auth/refresh"
    const method = "POST"
    const headers = {'Content-Type': 'application/json'}
    const body = JSON.stringify(data)
    
    const response = await fetch(url, {method, headers, body})

    return response
}