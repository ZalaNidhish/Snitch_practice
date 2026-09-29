import {Router} from 'express'
import { getmeController, loginUserController, logoutUserController, refreshController, registerUserController } from '../controllers/auth.controller.js'
import {authenticate} from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/login', loginUserController)
router.post('/register', registerUserController)
router.post('/refresh', refreshController)
router.post('/logout', authenticate,  logoutUserController)
router.get('/getme', authenticate,  getmeController)

export default router