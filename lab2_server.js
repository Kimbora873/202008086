// 실습 2: 첫 Express 서버
// 실행: node lab2_server.js → http://localhost:3000

const express = require("express"); // express 모듈 불러오기
const path = require("path");
const app = express();              // 앱 만들기
const PORT = 3000;

// 라우트: "GET / 요청이 오면 이 함수를 실행해라"
app.use(express.static(path.join(__dirname, "public")));
// 서버 시작
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
