import express from 'express';
const testRouter = express.Router();

testRouter.get('/', (req, res) => {
  res.send('<h1>test page</h1>');
});

export default testRouter;
