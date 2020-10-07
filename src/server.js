import express from 'express';
import BullBoard from 'bull-board';
import UserController from './controllers/UserController';
import Queue from './lib/Queue';
import 'dotenv/config';

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());
app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);
app.listen(3333);
