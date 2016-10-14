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
  getOrder
} from '../services/order';
import {
  message
} from 'antd';

function* getOrderData() {
  console.log(111111111)
  try {
    const {
      jsonResult
    } = yield call(getOrder);
    console.log(111)
    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      console.log('sage:',data)
      yield put({
        type: 'order/get/success',
        total: data.total,
        orderList: data.orderList
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

function* watchOrderGet() {
  yield takeLatest('order/get', getOrderData);
}

export default function*() {
  yield fork(watchOrderGet);

  // Load todos.
  // yield put({
  //   type: 'center/get',
  // });
}
