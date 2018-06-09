getters : {
    todoCount: (state) => {
      return state.todos.length
    }
    todos: (state) => {
      return state.todos
    }
    isLoading: (state) => {
      return state.isLoading
    }
    statusBasedTodos: (state) => {
      return state.statusBasedTodos
    } 
}
export default getters