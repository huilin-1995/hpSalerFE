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
  getCardList,getAddCard
} from '../services/card';
import {
  message
} from 'antd';
function* getCardListData() {
  try {
    const {
      jsonResult
    } = yield call(getCardList);

    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      yield put({
        type: 'cardList/get/success',
        cardList: data.cardList
      })
      console.log(jsonResult.data)
    }
  } catch (err) {
    message.error(err);
    //yi`eld put({
    //  type: 'cardList/get/failed',
    //  err,
    //});
  }
}
function* getAddCardData() {
  try {
    const {
      jsonResult
    } = yield call(getAddCard);
    if (jsonResult.code == 0) {
      var data = jsonResult.data;
      yield put({
        type:'addCard/get/success'
      })
    }
  } catch (err) {
    message.error(err);
  }
}
function* watchCardList() {
  yield takeLatest('cardList/get', getCardListData);
}
function* watchAddCardList() {
  yield takeLatest('addCard/get', getAddCardData);
}
export default function*() {
  yield fork(watchCardList);
  // yield fork(watchCardList);
  // Load todos.
  // yield put({
  //   type: 'cardList/get',
  // });
}
