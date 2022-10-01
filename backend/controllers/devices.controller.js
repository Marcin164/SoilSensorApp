import Device from "../models/devices.model.js"

export const addDevice = async (req, res) => {
    try{
        const body = req.body
        await Device.addDevice(body)
        res.status(200).send('Device saved!')
    } catch (error) {
        res.status(401).send(error)
    }
}

export const deleteDevice = async (req, res) => {
    try{
        const { id, isConnected } = req.params
        await Device.deleteDevice(id, isConnected)
        res.status(200).send('Device deleted!')
    } catch (error) {
        res.status(401).send(error)
    }
}

export const updateDevice = async (req, res) => {
    try{
        const {id} = req.params
        const body = req.body
        await Device.updateDevice(id, body)
        res.status(200).send('Device updated!')
    } catch (error) {
        res.status(401).send(error)
    }
}

export const getDevices = async (req, res) => {
    try{
        const id = req.user
        const devices = await Device.fetchDevices(id)
        res.status(200).send(devices)
    } catch (error) {
        res.status(401).send(error)
    }
}

export const connectDevice = async (req, res) => {
    try{
        let body = req.body
        
        res.status(200).send('Device saved!')
    } catch (error) {
        res.status(401).send(error)
    }
}

export const disconnectDevice = async (req, res) => {
    try{
        let body = req.body
        
        res.status(200).send('Device saved!')
    } catch (error) {
        res.status(401).send(error)
    }
}

export const getData = async (req, res) => {
    try{
        const { id, type } = req.params
        const deviceHumidities = await Device.fetchData(id, type)
        res.status(200).send(deviceHumidities)
    } catch (error) {
        res.status(404).send(error)
    }
}