const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./modles');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const raw = req.headers.authorization.split(' ').pop();
        const tokenData = jwt.verify(raw, SECRET);
        req.user = await User.findById(tokenData.id);
        next();
    } catch (ex) {
        res.send({
            status: 'failed',
            message: 'authorization failed'
        });
    }
}

const app = express();

app.use(express.json());

const SECRET = '43ever.me';

app.get('/', async (req, res) => {
    res.send({
        status: 'success'
    });
});

app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.post('/api/register', async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    });
    res.send(user);
});

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    });
    if (!user) {
        return res.status(422).send({
            status: 'failed',
            message: 'can\'t find username'
        });
    }

    const isPasswordValid = require('bcrypt').compareSync(
        req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(422).send({
            status: 'failed',
            message: 'password incorrect'
        });
    }

    const token = jwt.sign({
        id: String(user._id),
    }, SECRET);

    res.send({
        user: user,
        token: token
    });
});

app.get('/api/profile', auth, async (req, res) => {
    res.send(req.user);
});

app.listen(5269, () => {
    console.log('http://localhost:5269');
});