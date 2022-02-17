<template>
  <div>
    <div v-if="isAuthorized === undefined"><p>NotAuthorize</p></div>

    <div v-if="isAuthorized === 'true'" class="todolist">
      <div class="todolist__top">
        <img class="todolist__logo" src="../assets/img/logo-todo.svg" alt="" />
        <div class="todolist__list-area">
          <h1 class="todolist__title">Thank you {{ username }} !</h1>
          <label for="newTask" class="todolist__">
            Enter you task
            <input
              class="todolist__newTaskInput"
              type="text"
              v-model="newTask"
              @keydown.enter="addTask()"
            />
            <button class="btn" @click="addTask()">add task</button>
          </label>
          <ul class="todolist__taskList">
            <TaskItem
              v-for="(task, index) in this.tasks"
              :key="task.key"
              :index="index"
              :task="task"
              @delTask="removTask(task)"
            />

            <!-- <li v-for="(task, index) in this.tasks" :key="task.key">
            <input type="checkbox" v-model="task.checked" />

            {{ index + 1 }}
            <span
              @click="task.isEditing = true"
              contenteditable
              @ended="task.taskTitle = $event.target.innerHTML"
            >
              {{ task.taskTitle }}
            </span>
            <input v-if="task.isEditing" type="text" v-model="task.taskTitle" />
            <button @click="removTask(task)">X</button>
            <button @click="task.isEditing = !task.isEditing">edit</button>
          </li> -->
          </ul>
        </div>
      </div>

      <div class="todolist__bottom">
        <button class="ex-btn" @click="clearLS()">ex</button>
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
      (this.username = localStorage.username);
  },
  data() {
    return {
      isAuthorized: undefined,
      username: undefined,
      newTask: undefined,
      tasks: [],
      isEditing: true,
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
      if (this.newTask != 'dd') {
        this.tasks.push({
          key: Math.random().toFixed(10),
          isEditing: false,
          task: this.newTask,
          checked: false,
          
        });  this.newTask = "";
      } 
    },
    removTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    editTask(index) {
      if (this.editedTask != "") {
        this.isEditing = true;
        this.$set(this.tasks, index, this.editedTask);
        this.editedTask = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todolist {
  &__top {
    min-height: 800px;
    background: var(--liniar_gr);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  }
  &__title {
    color: black;
  }
  &__logo {
    margin-bottom: 66px;
  }

  &__taskList {
    margin: 20px;
    padding: 0;
  }
  &__newTaskInput {
    width: 50%;
    padding: 10px;
    margin-right: 20px;
    margin-left: 20px;
    border: none;
    border-bottom: 1px solid #101010;
  }

  .ex-btn {
    width: 135px;
    height: 35px;
    background: var(--color_btn);
    color: var(--color_white_text);
  }
  .ex-btn:hover {
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