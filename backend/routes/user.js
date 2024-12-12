const express = require('express');
const router = express.Router();
const db = require('../models');
// const { User } = db;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    console.log(req);
    res.json({ message: 'user main' });
});

router.get('/list', async (req, res) => {
    console.log(req);
    const users = await db.user.findAll();
    res.json(users); 
});

router.post('/create', async (req, res) => {
    console.log('========= User.create start ==========');
    console.log('req.body', req.body);
    // 랜덤 아이디 생성
    const id = uuidv4();
    // 비밀번호 암호화
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const param = {
        id: id,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        salt: salt,
        login_mod: 'pw'
    };
    console.log('param', param);
    const user = await db.user.create(param);
    res.json(user);
});

module.exports = router; 