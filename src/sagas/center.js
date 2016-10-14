import {
  takeLatest
} from 'redux-saga';
import {
  take,
  call,
  put,
  fork,
  cancel
} from 'redux-saga/effects';
import {
  getSalerHome
} from '../services/center';
import {
  message
} from 'antd';

//画布绘制折线图
function showCanvas(data) {

  // 处理数据，生成折线图数据
  function grid(data, width, height) {
    let length = data.length; //天数
    let part = (width - 30) / (length - 1); //每段的长度
    let arr = data.map((element, index) => element.revenue).sort(); //价格数据的数组
    let num = Number(arr[0]) + Number(arr[length - 1]); //定义显示的价格区域
    //最后返回的折线图数据
    return data.map(function(element, index) {
      element.x = 15 + index * part;
      element.y = height - (30 + (height - 60) * Number(element.revenue) / num);
      return element;
    });
  }


  //创建画布
  let canvas = document.createElement("canvas");
  //确定画布大小
  const IMG_WIDTH = screen.width - 30; //画布宽度
  const IMG_HEIGHT = IMG_WIDTH * 0.5; //画布高度


  // 获取上下文
  let ctx = canvas.getContext("2d");
  canvas.width = IMG_WIDTH;
  canvas.height = IMG_HEIGHT;



  //获取坐标
  let point = grid(data, IMG_WIDTH, IMG_HEIGHT);

  // 绘制折线
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#ff6699";
  for (let i = 0, pl = point.length - 1; i < pl; i++) {
    ctx.beginPath();
    ctx.moveTo(point[i].x, point[i].y);
    ctx.lineTo(point[i + 1].x, point[i + 1].y);
    ctx.stroke();
  }


  /* 画横线（x轴）*/
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#e3e3e3";

  ctx.beginPath();
  ctx.moveTo(15, IMG_HEIGHT - 30);
  ctx.lineTo(IMG_WIDTH - 15, IMG_HEIGHT - 30);
  ctx.stroke();


  point.forEach((val) => {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#e3e3e3";
    //画短轴
    ctx.beginPath();
    ctx.moveTo(val.x, IMG_HEIGHT - 30);
    ctx.lineTo(val.x, IMG_HEIGHT - 35);
    ctx.stroke();
    //画日期
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(val.date, val.x, IMG_HEIGHT - 15);
    //画坐标图形
    ctx.beginPath();
    ctx.strokeStyle = "#ff9933";
    ctx.lineWidth = 4;
    ctx.arc(val.x, val.y, 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  })
  return {
    imgurl: canvas.toDataURL("image/png"),
    grid: point
  };
}

function* getCenter() {
  try {
    const {
      jsonResult
    } = yield call(getSalerHome);

    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      var point = showCanvas(data.income.charts)
      yield put({
        type: 'center/get/success',
        income: data.income,
        user: data.user,
        imgurl: point.imgurl,
        point: point.grid,
        pointNum: 6
      })
    }
  } catch (err) {
    message.error(err);
    //yield put({
    //  type: 'todos/get/failed',
    //  err,
    //});
  }
}

function* watchSalerHomeGet() {
  yield takeLatest('center/get', getCenter);
}

export default function*() {
  yield fork(watchSalerHomeGet);

  // Load todos.
  // yield put({
  //   type: 'center/get',
  // });
}
