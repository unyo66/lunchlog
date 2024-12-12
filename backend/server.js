const express = require('express');
const path = require('path');
const db = require('./models');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터
const userRouter = require('./routes/user');


// React 정적 파일 제공
app.use(express.static(path.join(__dirname, 'dist')));

// API 라우터 설정
app.use('/api/user', userRouter);

// React 앱의 기본 엔드포인트
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 서버 시작
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
(async () => {
    try {
        // 데이터베이스 연결 확인
        await db.sequelize.authenticate();
        console.log('Database connected successfully!');
        
        // 서버 실행
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // 데이터베이스 연결 실패 시 애플리케이션 종료
    }
})();