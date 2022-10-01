import pool from "../helpers/db.js"

export const sendDataToDataBase = async (body) => {
    const query = `INSERT INTO data VALUES ('yuhfs7h3u2w2r3a', '${body.deviceId}', '${body.type}', '${body.val}', '${new Date().getTime()}')`
    const data = await new Promise((resolve, reject) => {
        pool.query(query, (err, response) => {
            if(err) reject(err)
            resolve(response)
        })
    })

    if(!data) throw "Cannot save data"
}