import { Router } from 'express';
import { invalidRoute, v1Controller, v2Controller } from '../controllers';

const apiRouter = Router();

apiRouter.route('/v1/parse').post(v1Controller);
apiRouter.route('/v2/parse').post(v2Controller);
apiRouter.all('**', invalidRoute);

export default apiRouter;
