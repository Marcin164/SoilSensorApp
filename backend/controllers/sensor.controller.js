import { sendDataToDataBase } from "../models/sensor.model.js"

export const saveData = async (req, res) => {
    try{
        const body = req.body
        await sendDataToDataBase(body)
        res.status(200).send('Saved!')
    } catch (error) {
        res.status(401).send(error)
    }
}