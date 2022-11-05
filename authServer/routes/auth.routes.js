import { Router } from 'express'
import {login_post, refreshToken_post} from "../controllers/auth.controller.js"

const router = Router()

router.post('/auth/login', login_post)
router.post('/auth/refreshToken', refreshToken_post)

export default router
