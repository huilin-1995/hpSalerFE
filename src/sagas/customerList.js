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
  getCustList
} from '../services/customerList';
import {
  message
} from 'antd';

function* getCustomerList() {
  console.log(11111)
  try {
    console.log('进入')
    const {
      jsonResult
    } = yield call(getCustList);

    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      yield put({
        type: 'customerList/get/success',
        customerTotal: data.customerTotal,
        customerList: data.customerList,
        customerListNum: data.customerList.length
      })
      console.log(data.customerList.length)
    }
  } catch (err) {
    message.error(err,3);
    yield put({
      type: 'customerList/get/faild'
    })
    //yield put({
    //  type: 'todos/get/failed',
    //  err,
    //});
  }
}

function* watchCustomerList() {
  yield takeLatest('customerList/get', getCustomerList);
}

export default function*() {
  yield fork(watchCustomerList);

  // Load todos.
  // yield put({
  //   type: 'center/get',
  // });
}
