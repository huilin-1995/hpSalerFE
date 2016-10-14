import {
  handleActions
} from 'redux-actions';
import {
  combineReducer
} from 'redux';

const order = handleActions({
  ['order/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['order/get/success'](state, action) {
    return {...state,
      loading: false,
      total: action.total,
      orderList: action.orderList
    };
  },
  ['order/get/faild'](state, action) {
    return {...state
    };
  },
  ['order/changeNum'](state, action) {
    return {...state,
      pointNum: action.pointNum
    };
  }
}, {
  loading: false
});
export default order;
