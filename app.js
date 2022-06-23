const express = require("express");
const app = express();
const cors = require("cors");
// const mainRouter = require("./routes/main");

// 접속 로그 남기기
const requestMiddleware = (req, res, next) => {
  console.log(
    "[Ip address]:",
    req.ip,
    "[method]:",
    req.method,
    "Request URL:",
    req.originalUrl,
    " - ",
    new Date()
  );
  next();
};

// 각종 미들웨어
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("uploads"));

//라우터 연결
// app.use("/main", [mainRouter]);
app.get("/", (req, res) => {
  res.send("Hi docker");
});

app.listen(3000, () => {
  console.log("3000번 서버가 정상적으로 켜졌습니다");
});
