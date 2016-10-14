import {
  handleActions
} from 'redux-actions';
import {
  combineReducer
} from 'redux';

const getIncomeInfo = handleActions({
  ['getIncomeInfo/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['getIncomeInfo/get/success'](state, action) {
    return {...state,
      loading: false,
      allow: action.allow,
      settlement: action.settlement,
      process: action.process,
      history: action.history
    };
  },
  ['getIncomeInfo/get/faild'](state, action) {
    return {...state
    };
  },
  ['getCashedInfo/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['getCashedInfo/get/success'](state, action) {
    return {...state,
      loading: false,
      list: action.list
    };
  },
  ['getCashedInfo/get/faild'](state, action) {
    return {...state
    };
  },
  ['getBonusInfo/get'](state, action) {
    return {...state,
      loading: true
    };
  },
  ['getBonusInfo/get/success'](state, action) {
    return {...state,
      loading: false,
      list: action.list
    };
  },
  ['getBonusInfo/get/faild'](state, action) {
    return {...state
    };
  }
}, {
  loading: false
});

export default getIncomeInfo;
