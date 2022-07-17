import express from 'express';
import config from 'config';
import mongoose from 'mongoose';
import cards from './routes/api/cards.js';
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = config.get('mongoURI');


// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
});

// Middlewares
app.use(express.json());
app.use(Cors());

// API Endpoints
app.use('/', cards);

// Listener
app.listen(port, () => console.log(`Listening on Local Host: ${port}`));