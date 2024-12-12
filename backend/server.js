const express = require('express');
const path = require('path');

const app = express();

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, 'dist')));

// React 앱의 기본 엔드포인트 설정
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// API 엔드포인트
app.get('/api/message', (req, res) => {
    res.json({ message: 'Welcome to LunchLog API!' });
});

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});