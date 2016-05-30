# Using Selectors to Filter Data

We're going to want to filter our Pokemon listing data using our search component. We could do this using our actions & reducers, however it is a better idea to implement something called a `Selector`.

To do this, we can make use of the library `reselect`. To install it, just run:
```bash
npm install --save reselect
```

## What is Reselect?

Reselect is a library built to help us construct "memoized" selectors for efficiently sorting through datasets. "Memoization" is an optimization process that caches the results of an expensive operation, returning that cached value each time the function is called unless given different inputs.

Reselect allows us to easily create selectors that integrate perfectly with our redux store. Here is an example below for creating a selector:

```javascript
import {createSelector} from 'reselect';

const getTodoList = state => state.todos;
const getFilterType = state => state.filterType;

const filterTodoList = createSelector(
  [getTodoList, filterType],
  (todos, filter) => {
    switch (filter) {
      case 'DONE':
        return todos.filter(t => t.status === 'complete');
      case 'INCOMPLETE':
        return todos.filter(t => t.status === 'incomplete');
      default:
        return todos;
    }
  },
);

export default filterTodoList;
```

You could then use this selector inside of a container component's `mapStateToProps` function like so:

```javascript
import filterTodoList from '../selectors';

const mapStateToProps = state => {
  return {
    todos: filterTodoList(state)
  };
}
```

That's all there is to it. Now let's implement a selector of our own to use in our Pokedex!
