
<script>
import { mapGetters, mapActions} from 'vuex'
import gql from 'graphql-tag'
import { ADD_TODO, REMOVE_TODO, CHANGE_STATUS, FETCH_TODOS, TODO_STATUS, MARK_COMPLETED } from '../store/actionTypes'


export default {
  name: 'TestComponent',
  data () {
    return {
      userInfo: {
        name: 'Amit Mundra',
        age: 30
      },
      currentTodo: '',
      id: 0,
      status: 'all'
    }
  },
  created () {
      // let data = this.$store.dispatch(FETCH_TODOS);
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'todoCount',
      'todos',
      'statusBasedTodos',
      'statusBasedTodosCount'
          ]),
  },
  methods: {
    removeTodo (todo) {
        this.$store.dispatch (REMOVE_TODO, todo);
    },
    addTodo () {
        this.id = this.id + 1;
        this.$store.dispatch (ADD_TODO, { name: this.currentTodo, id: this.id });
        this.currentTodo = '';
    },
    fetchTodos (type) {
      this.status = type
      this.$store.commit (TODO_STATUS, {status: type});
    },
    changeToCompleted (payload) {
      debugger
      this.$store.dispatch (CHANGE_STATUS, payload)
    },
    markAllCompleted (payload) {
      debugger;
      this.$store.commit(MARK_COMPLETED, payload)
    }
  }
}
</script>

<template>
    <div style="text-align:left;">
        <div class="card border-dark mb-3 col-sm-8" style="margin: 0 auto;">
          <div class="card-body text-dark">
            <input type="text" class="form-control" placeholder="What needs to be done?" @keyup.enter="addTodo" v-model="currentTodo">  
            <div class="card col-sm-12">
              <ul class="list-group list-group-flush">
                <li class="list-group-item row" v-if="status === 'all'" v-bind:key="todo.id" v-for="todo in todos">
                  <div class="row">
                  <div class="col-sm-10">
                    <strike v-if="todo.status === 'completed'"><span>{{todo.name}}
                    </span></strike><span v-else>{{todo.name}}</span>
                  </div>
                  <div class="col-sm-1">
                    <button v-if="todo.status === 'active'" class="fa fa-square-o btn btn-sm btn-primary" @click="changeToCompleted(todo.id)" ></button>

                    <button v-if="todo.status === 'completed'" class="fa fa-check-square-o btn btn-sm btn-warning" @click="changeToCompleted(todo.id)" ></button> 
                  </div>                 
                  <div class="col-sm-1">
                    <button @click="removeTodo(todo)" class="fa fa-close btn btn-sm btn-danger"></button>
                  </div>
                  </div>      
                </li> 
              </ul>
            </div>

            <div class="card col-sm-12">        
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item row" v-if="status === 'active' || status === 'completed'" v-bind:key="temp.id" v-for="temp in statusBasedTodos">
                          <div class="row">
                            <div class="col-sm-10">
                              <strike v-if="temp.status === 'completed'"><span>{{temp.name}}</span></strike><span v-else>{{temp.name}}</span>
                            </div>

                            <div class="col-sm-1">
                              <button v-if="temp.status === 'active'" class="fa fa-square-o btn btn-sm btn-primary" @click="changeToCompleted(temp.id)" ></button>
                            
                              <button v-if="temp.status === 'completed'" class="fa fa-check-square-o btn btn-sm btn-warning" @click="changeToCompleted(temp.id)" ></button> 
                            </div>

                            <div class="col-sm-1">
                              <button @click="removeTodo(temp)" class="fa fa-close btn btn-sm btn-warning"></button>
                            </div>
                          </div>

                        </li>
                      </ul>
                  <div class="row" style="padding: 15px 15px 15px 0px;">
                  <div class="col-sm-7">
                    <button @click="fetchTodos('all')" class="btn btn-primary">All - {{todoCount}}</button>
                    <button @click="fetchTodos('completed')" class="btn btn-success">Completed</button>
                    <button @click="fetchTodos('active')" class="btn btn-info">active</button>
                  </div>
                  <div class="col-sm-5" >
                    <button class="btn btn-default right" @click="markAllCompleted(true)">Mark All Completed</button>
                     <button class="btn btn-default right" @click="markAllCompleted(false)">Mark All Active</button>
                  </div>
                  </div>
            </div>
          </div>
        </div>       
    </div>
</template>

<style scoped>
#todoComponent {
    z-index: 1150px;
}
completed {
  background-color: green;
} 
active {
  background-color: blue;
}
right {
float: right;
}
</style>






