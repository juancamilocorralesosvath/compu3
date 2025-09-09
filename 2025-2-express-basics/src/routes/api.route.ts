import { Router } from "express";
import { ApiController } from '../controllers/api.controller';

const router = Router()
const apiController = new ApiController()

router.get('/hello', apiController.sayHello);
router.get('/url-params', apiController.sendParamsByUrl);
router.post('/body-params', apiController.sendParamsByBody);



export default router;