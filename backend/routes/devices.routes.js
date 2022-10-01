import { Router } from 'express'
import { addDevice, deleteDevice, updateDevice, getDevices, getData } from '../controllers/devices.controller.js'
import auth from "../middlewares/auth.js"

const router = Router()

router.get('/getData/:id/:type', auth, getData)
router.post('/addDevice', auth, addDevice)
router.delete('/deleteDevice/:id/:isConnected', auth, deleteDevice)
router.put('/updateDevice/:id', auth, updateDevice)
router.get('/getDevices', auth, getDevices)

export default router
