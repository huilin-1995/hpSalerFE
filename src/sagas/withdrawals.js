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
  getIncomeInfo,
  getCashedInfo
} from '../services/withdrawals';
import {
  message
} from 'antd';

//获取收入提现基本信息
function* getIncomeInfoData() {
  try {
    const {
      jsonResult
    } = yield call(getIncomeInfo);

    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      yield put({
        type: 'getIncomeInfo/get/success',
        allow: data.allow,
        settlement: data.settlement,
        process: data.process,
        history: data.history
      })
    }
  } catch (err) {
    message.error(err);
    //yield put({
    //  type: 'getCashedInfo/get/failed',
    //  err,
    //});
  }
}
//获取提现明细
function* getCashedInfoData() {
  try {
    const {
      jsonResult
    } = yield call(getIncomeInfo);

    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      yield put({
        type: 'getCashedInfo/get/success',
        list: data.list
      })
    }
  } catch (err) {
    message.error(err);
  }
}
//获取提现明细
function* getBonusInfoData() {
  try {
    const {
      jsonResult
    } = yield call(getIncomeInfo);

    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      yield put({
        type: 'getBonusInfo/get/success',
        bonusList: data.bonusList
      })
    }
  } catch (err) {
    message.error(err);
  }
}

function* watchIncomeInfo() {
  yield takeLatest('getIncomeInfo/get', getIncomeInfoData);
}

function* watchCashedInfo() {
  yield takeLatest('getCashedInfo/get', getCashedInfoData);
}

function* watchBonusInfo() {
  yield takeLatest('getBonusInfo/get', getBonusInfoData);
}
export default function*() {
  yield fork(watchIncomeInfo);
  yield fork(watchCashedInfo);
  yield fork(watchBonusInfo);
  // Load todos.
  // yield put({
  //   type: 'getIncomeInfo/get',
  // });
}
