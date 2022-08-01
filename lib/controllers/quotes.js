const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()
  .get('/:id', async (req, res) => {
    
    const data = await Quote.getById(req.params.id);
    res.json(data);
  })

  .post('/', async (req, res) => {
    const quote = await Quote.insert(req.body);
   
    res.json(quote);
  });