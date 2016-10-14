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
  getShopInfo
} from '../services/setting';
import {
  message
} from 'antd';
function* getShopInfoData() {
  try {
    const {
      jsonResult
    } = yield call(getShopInfo);
    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      yield put({
        type: 'setting/get/success',
        user: data.user,
        shop: data.shop,
        slogan: data.slogan
      })
      console.log(data.user)
    }
  } catch (err) {
    message.error(err);
    //yield put({
    //  type: 'hpmoney/get/failed',
    //  err,
    //});
  }
}

function* watchGetShopInfo() {
  yield takeLatest('setting/get', getShopInfoData);
}

export default function*() {
  yield fork(watchGetShopInfo);
  // Load todos.
  // yield put({
  //   type: 'hpmoney/get',
  // });
}
