import { Router } from 'express'
import { saveData } from '../controllers/sensor.controller.js'

const router = Router()

router.post('/sendData', saveData)

export default router