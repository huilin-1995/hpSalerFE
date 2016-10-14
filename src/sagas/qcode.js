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
  getQCode
} from '../services/qcode';
import {
  message
} from 'antd';

function* getQCodeData() {
  try {
    const {
      jsonResult
    } = yield call(getQCode);

    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      console.log(data)
      yield put({
        type: 'qcode/get/success',
        popularize: data.popularize,
        QRCode: data.QRCode,
        img: data.img
      })
    }
  } catch (err) {
    message.error(err);
    //yield put({
    //  type: 'qcode/get/failed',
    //  err,
    //});
  }
}

function* watchQCode() {
  yield takeLatest('qcode/get', getQCodeData);
}

export default function*() {
  yield fork(watchQCode);
  // Load todos.
  // yield put({
  //   type: 'qcode/get',
  // });
}
