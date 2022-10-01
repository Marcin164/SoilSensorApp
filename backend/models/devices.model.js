import { deleteDevice } from "../controllers/devices.controller.js"
import pool from "../helpers/db.js"

class Device {
    async addDevice (body) {
        if (!body) throw "No valid data!"
        const query = `INSERT INTO devices VALUES ('${new Date().getTime()}', '${body.userId}', '${body.name}', '${body.isConnected}', '${body.lat}', '${body.lng}', '${body.soilType}', '${new Date().getTime()}')`
        const data = await new Promise((resolve, reject) => {
            pool.query(query, (err, response) => {
                if(err) reject(err)
                resolve(response)
            })
        })
    
        if(!data) throw "Cannot add device!"
    
        return true
    }

    async deleteDevice (id, isConnected) {
        if(isConnected === 1) throw "Disconnect device"

        const query = `DELETE FROM devices WHERE id='${id}'`
        const data = await new Promise((resolve, reject) => {
            pool.query(query, (err, response) => {
                if(err) reject(err)
                resolve(response)
            })
        })

        if(!data) throw "Cannot add device!"
    
        return true
    }

    async updateDevice (id, body) {
        if (!body) throw "No valid data!"
        const query = `UPDATE devices SET name='${body.name}', lat='${body.lat}', lng='${body.lng}', soilType='${body.soilType}' WHERE id='${id}'`
        const data = await new Promise((resolve, reject) => {
            pool.query(query, (err, response) => {
                if(err) reject(err)
                resolve(response)
            })
        })
    
        if(!data) throw "Cannot update device"
    
        return data
    }

    async fetchDevices (id) {
        const query = `SELECT * FROM devices WHERE id_user='${id}'`
        const data = await new Promise((resolve, reject) => {
            pool.query(query, (err, response) => {
                if(err) reject(err)
                resolve(response)
            })
        })

        if(!data) throw 'Cannot fetch devices!'

        return data
    }

    async fetchData (id, type) {
        const query = `SELECT * FROM data WHERE id_device='${id}' AND type='${type}'`
        const data = await new Promise((resolve, reject) => {
            pool.query(query, (err, response) => {
                if(err) reject(err)
                resolve(response)
            })
        })
    
        if(!data) throw "Cannot fetch humidity"
    
        return data
    }
}

const device = new Device()
export default device