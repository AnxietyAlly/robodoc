import express from 'express';
import cors from 'cors';
import {
  getAllResponses,
  getAllResponsesFromCategory,
  getSingleResponse,
  getAllCategories,
  getSingleCategory
} from '../controllers/robodocController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('Hi, this is the robodoc microservice');
});

router.options('/responses', (req, res, next) => {
  try {
    //set header before response
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });
    //response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// get a collection of all the accounts, you can also use a query
router.get('/responses', cors(), getAllResponses);
router.get('/responses/:id', cors(), getSingleResponse);
router.get('/responses/getByCategory/:category_id', cors(), getAllResponsesFromCategory);
router.get('/responseCategories', cors(), getAllCategories);
router.get('/responseCategories/:id', cors(), getSingleCategory);



export default router;