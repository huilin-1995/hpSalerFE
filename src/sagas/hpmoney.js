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
  getHpMoney
} from '../services/hpmoney';
import {
  message
} from 'antd';
function* getHpMoneyData() {
  try {
    const {
      jsonResult
    } = yield call(getHpMoney);

    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      yield put({
        type: 'hpmoney/get/success',
        hpmoney: data.hpmoney
      })
    }
  } catch (err) {
    message.error(err);
    //yield put({
    //  type: 'hpmoney/get/failed',
    //  err,
    //});
  }
}

function* watchHpMoney() {
  yield takeLatest('hpmoney/get', getHpMoneyData);
}

export default function*() {
  yield fork(watchHpMoney);
  // Load todos.
  // yield put({
  //   type: 'hpmoney/get',
  // });
}
