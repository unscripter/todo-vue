import { ADD_TODO, REMOVE_TODO, CHANGE_STATUS, FETCH_TODOS, TODO_STATUS, MARK_COMPLETED } from '../store/actionTypes'
const state = {
  todos: [],
  isLoading: true,
  statusBasedTodos: [],
  active: 0,
  completed: 0,
}

const getters = {
  
  todoCount (state) {
    return state.todos.length
  },
  todos (state) {
    return state.todos
  },
  isLoading (state) {
    return state.isLoading
  },
  statusBasedTodos (state) {
    return state.statusBasedTodos
  },
  statusBasedTodosCount (state) {
    return state.statusBasedTodos.length
  },
  // activeCount (state) {
  //   let activeArray =  state.todos.filter( item => {
  //     item.status === 'active'
  //   })
  //   return activeArray.length;
  // },
  // completedCount (state) {
  //   let completedArray =  state.todos.filter( item => {
  //     item.status === 'completed'
  //   })
  //   return completedArray.length
  // }
}

const mutations = {
  [FETCH_TODOS] (state) {
    state = { ...state, isLoading: false };
  },
  [ADD_TODO] (state, payload) {
    debugger;
    let item = {name: payload.name, id: payload.id, status: 'active'}
    state = { ...state, todos: state.todos.push(item)}
    state.activeCount = state.activeCount + 1;
  },
  [REMOVE_TODO] (state, payload) {
    debugger
    state.todos = state.todos.filter( (item) => {
      return item != payload;
  }); 
    state.statusBasedTodos = state.statusBasedTodos.filter( item => {
      return item != payload;      
  });
  },
  [CHANGE_STATUS] (state, payload) {
    return { ...state, todos: state.todos.map( item => {
        if (item.id === payload) {
            if (item.status === 'active') {
            item.status = "completed"         
            } else if (item.status === 'completed') {
              item.status = 'active'                   
            }
        }
    })
  }
  },
  [TODO_STATUS] (state, payload) {
    debugger;
   let statusTodos = state.todos.filter( item =>
        item.status === payload.status );
   state.statusBasedTodos = statusTodos;
},
  [MARK_COMPLETED] (state, payload) {
    debugger
    if (payload) {
    state.todos.map( todo => {
      todo.status = 'completed';
    })
  } else {
    state.todos.map( todo => {
      todo.status = 'active';
    })
  }
}
}

const actions = {
  [FETCH_TODOS] ({ commit }, ...payload) {
    commit(FETCH_TODOS)
    return state
  },
  [ADD_TODO] ({ commit }, ...payload) {
    commit(ADD_TODO, ...payload)
    return state
  },
  [REMOVE_TODO]  ({ commit }, ...payload) {
    commit(REMOVE_TODO, ...payload)
    return state;
  },
  [CHANGE_STATUS]  ({ commit }, ...payload) {
    commit(CHANGE_STATUS, ...payload)
    return state;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
