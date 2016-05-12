import { ROUTES, GOTO_ROUTE } from '../constants';
import { NavigationExperimental } from 'react-native';

const  { Reducer: NavigationReducer } = NavigationExperimental;

const navigatorReducer = NavigationReducer.StackReducer({
  getPushedReducerForAction: (action) => {
    if (action.type === GOTO_ROUTE) {
      return state => state || action.payload;
    }

    return null;
  },
  getReducerForState: initialState => state => state || initialState,
  initialState: ROUTES.POKEDEX,
});

export default navigatorReducer;
