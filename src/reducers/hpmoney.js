import {
  handleActions
} from 'redux-actions';
import {
  combineReducer
} from 'redux';

const hpmoney = handleActions({
  ['hpmoney/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['hpmoney/get/success'](state, action) {
    return {...state,
      loading: false,
      hpmoney: action.hpmoney
    };
  },
  ['hpmoney/get/faild'](state, action) {
    return {...state
    };
  }
}, {
  loading: false
});

export default hpmoney;
