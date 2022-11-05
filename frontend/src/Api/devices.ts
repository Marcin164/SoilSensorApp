class DeviceApi {
    async getDevices(token: any) {
        const endpoint = "http://localhost:3001/getDevices"
        const headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}

        const response = await fetch(endpoint, {method: 'GET', headers})

        return response
    }

    async postDevice(token: any, data:any) {
        const endpoint = "http://localhost:3001/addDevice"
        const method = "POST"
        const headers = {'Content-Type': 'application/json', 'Authentication': `Bearer ${token}`}
        const body:any = { body: data }

        const response = await fetch(endpoint, {method, headers, body})
        return response
    }

    async putDevice(token:any, data:any, id:any) {
        const endpoint = `http://localhost:3001/updateDevice/${id}`
        const method = "PUT"
        const headers = {'Content-Type': 'application/json', 'Authentication': `Bearer ${token}`}
        const body:any = { body: data }

        const response = await fetch(endpoint, {method, headers, body})
        return response
    }

    async deleteDevice(token: any, id:any) {
        const endpoint = `http://localhost:3001/deleteDevice/${id}`
        const method = "DELETE"
        const headers = {'Content-Type': 'application/json', 'Authentication': `Bearer ${token}`}

        const response = await fetch(endpoint, {method, headers})
        return response
    }

    async getDeviceData(token: any, type:any, id:any) {
        const endpoint = `http://localhost:3001/getData/${id}/${type}`
        const method = "GET"
        const headers = {'Content-Type': 'application/json', 'Authentication': `Bearer ${token}`}

        const response = await fetch(endpoint, {method, headers})
        return response
    }
}

const deviceApi = new DeviceApi()
export default deviceApi