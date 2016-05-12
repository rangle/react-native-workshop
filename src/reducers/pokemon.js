import { fromJS } from 'immutable';
import { CATCH_EM_ALL, I_CHOOSE_YOU, FILTER } from '../constants';

const initialState = fromJS({
  all: [],
  active: {},
  query: '',
  ready: false,
});

function pokemon(state = initialState, action = {}) {
  switch (action.type) {
    case CATCH_EM_ALL:
      return state.set('all', fromJS(action.payload))
                  .set('ready', true);

    case I_CHOOSE_YOU:
      return state.set('active', fromJS(action.payload));

    case FILTER:
      return state.set('query', fromJS(action.payload));

    default:
      return state;
  }
}

export default pokemon;
