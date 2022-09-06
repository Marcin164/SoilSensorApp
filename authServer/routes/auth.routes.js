import { Router } from 'express'
import {login_post} from "../controllers/auth.controller.js"

const router = Router()

router.post('/auth/login', login_post)

export default router
