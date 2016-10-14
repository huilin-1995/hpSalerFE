import {
  handleActions
} from 'redux-actions';
import {
  combineReducer
} from 'redux';

const customerList = handleActions({
  ['customerList/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['customerList/get/success'](state, action) {
    return {...state,
      loading: false,
      customerTotal: action.customerTotal,
      customerList: action.customerList,
    };
  },
  ['customerList/get/faild'](state, action) {
    return {...state,
      loading:false
    };
  },
  ['customerList/changeNum'](state, action) {
    return {...state,
      pointNum: action.pointNum
    };
  }
}, {
  loading: false,
  customerTotal: 0,
  customerList: []
});

export default customerList;

