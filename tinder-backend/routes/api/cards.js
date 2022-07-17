import {response, Router} from 'express';
import Cards from '../../dbCards.js';

const router = Router();

router.get('/tinder/cards', async (req, res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

router.post('/tinder/cards', async (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
});

export default router;