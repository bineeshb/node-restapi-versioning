import { resolve } from 'path';
import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import apiRouter from './routes/apiRouter';
import errorHandler from './middlewares/errorHandler';
import { invalidRoute } from './controllers';

config({ path: resolve(__dirname, '../config/config.env') });

const serverPort = process.env.PORT || 3000;
const app = express();

// Middleware - Request Parser
app.use(express.json());

// Middleware - Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api', apiRouter);
app.all('**', invalidRoute);

// Middleware - Error Handler
app.use(errorHandler);

// App Server
const server = app.listen(serverPort, () => {
  console.log(`Server is listening on ${serverPort}`);
});
