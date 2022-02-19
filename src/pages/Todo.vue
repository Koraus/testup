<template>
  <div class="todolist">
    <div v-if="isAuthorized === undefined"><p>NotAuthorize</p>  <router-link to="/login">Login</router-link>  </div>

    <div v-if="isAuthorized === 'true'" >
      <div class="todolist__top">
        <img class="todolist__logo" src="../assets/img/logo-todo.svg" alt="" />
        <div class="todolist__list-area">
          <h1 class="todolist__title">Thank you {{ username }} !</h1>
          <label for="newTask" class="todolist__">
            <!-- <input
            
              class="todolist__newTaskInput"
              type="text"
              v-model="newTask"
              @keydown.enter="addTask()"
            />
            <button class="btn" @click="addTask()">add task</button> -->
          </label>
          <!-- <input
              class="todolist__newTaskInput"
              type="text"
              v-model="newTask"
              @keydown="addTask()"
              placeholder="Enter you task"
            /> -->

          <ul class="todolist__taskList">
            <TaskItem
              v-for="(task, index) in this.tasks"
              :key="task.key"
              :index="index"
              :isLast="Boolean(index === tasks.length - 1)"
              :task="task"
              @addEmptyTask="addEmptyTask ()"
              @delTask="removTask(task)"
            />

          </ul>
        </div>
      </div>

      <div class="todolist__bottom">
        <button class="ex-logout" @click="clearLS()">logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "../components/TaskItem.vue";
export default {
  components: {
    TaskItem,
  },
  mounted() {
    (this.isAuthorized = localStorage.isAuthorized),
    (this.username = localStorage.username),
    this.addTask()
  },
  data() {
    return {
      isAuthorized: undefined,
      username: undefined,
      newTask: undefined,
      tasks: [],
      editedTask: undefined,
      tasktasktitle: undefined,
    };
  },
  methods: {
    clearLS() {
      localStorage.removeItem("isAuthorized");
      localStorage.removeItem("username");
      this.$router.push("Login");
    },
    addTask() {

        this.tasks.push({
          key: Math.random().toFixed(10),
          task: this.newTask,
          checked: false,
          
        }), 
     this.newTask = ""; 
      } ,
      removTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },

    addEmptyTask () { 
       
        if( this.tasks[ this.tasks.length - 1 ] !== undefined && this.tasks[ this.tasks.length - 1 ].task !== '' ){ console.log('sss'), this.addTask()}
    },
    
    },
    
  computed: {},
  watch: {


  },
};


</script>

<style lang="scss" scoped>
.todolist {
    width: 100%;
   

  &__top {
    min-height: 800px;
    background: var(--liniar_gr);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
  }
  &__bottom {
    background: #e5e5e5;
    min-height: 200px;
    padding-top: 150px;

  }
  &__list-area {
    width: 80%;
    background: white;
    min-height: 650px;
    margin-bottom: -100px;
    box-sizing: border-box;
    padding: 20px;
  }
  &__title {
    color: black;
  }
  &__logo {
    margin-bottom: 66px;
  }

  &__taskList {
      padding-inline-start: 0;
  }
  &__newTaskInput {
    width: 50%;
    padding: 10px;
    margin-right: 20px;
    margin-left: 20px;
    border: none;
    border-bottom: 1px solid #101010;
  }

  .ex-logout {
    width: 135px;
    height: 35px;
    background: var(--color_btn);
    color: var(--color_white_text);
    border: none;
  }
  .ex-logout:hover {
    border: 2px solid var(--color_btn);
    background: white;
    color: var(--color_btn);
  }
  .btn {
    width: 85px;
    height: 25px;
    background: var(--color_btn);
    color: var(--color_white_text);
    border: none;
    margin-left: 20px;
  }
  .btn:hover {
    border: 2px solid var(--color_btn);
    background: white;
    color: var(--color_btn);
  }
    .btn:focus {
    border: 1px solid var(--color_btn);
    background: white;
    color: var(--color_btn);
  }

}
</style>