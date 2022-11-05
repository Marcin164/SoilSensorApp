import deviceApi from "../Api/devices"

export const fetchDevices = async (token:any) => {
    try{
        const result = await deviceApi.getDevices(token)
        const resultJSON = await result.json()

        return resultJSON
    } catch (error) {
        return error
    }
}
