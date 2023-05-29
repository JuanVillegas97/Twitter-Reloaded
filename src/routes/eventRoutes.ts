import { Router } from 'express';
import { EventController } from '../controllers/EventController';

const eventController = new EventController();
const router = Router();

router.post('/', eventController.registerEvent);
router.get('/reports', eventController.generateReports);

export default router;
