<template >
<div >
        
      <div v-if="isAuthorized === undefined"> <p>NotAuthorize </p>  </div>

      <div v-if="isAuthorized === 'true'" class="todolist">
          <div class="todolist__top">
                  <button @click="clearLS()">ex</button>
                  <img class="todolist__logo" src="../assets/img/logo-todo.svg" alt="">
                  <div class="todolist__list-area"> <h1 class="todolist__title"> Thank you {{username}} ! </h1>   </div>
                  
                      <label for="newTask"> Enter you task
                          <input type="text" v-model="newTask">
                      </label>
                  <button @click.stop="addTask()"> add new task </button>
     
                   {{tasks}}

                   <ul>
                       <li  v-for="task in this.tasks" :key="task.id"  >
                          <input type="checkbox" v-model="task.checked" >
                           {{task.task}} 
                          <button @click="removTask()"> X </button>
                          <button @click="editTask()"> edit </button>
                          <input v-if="isEditing" type="text" v-model="editedTask">
                       </li>
                   </ul>
                  </div>

                  <div class="todolist__bottom" > </div>
         </div>
       
  
    

</div>
 
</template>

<script>

export default {
mounted(){
     this.isAuthorized = localStorage.isAuthorized,
     this.username = localStorage.username
},
 data() {
    return {
       isAuthorized : undefined,
       username : undefined,
       newTask : undefined,
       tasks : [],
       isEditing : false,
       editedTask: undefined,

    };
  },
  methods: {
      clearLS (){
          localStorage.removeItem('isAuthorized');
           localStorage.removeItem('username');
      },
      addTask(){
          if(this.newTask != null){
            this.tasks.push( {task : this.newTask, checked : false,   } )
          }
   
      },
      removTask (){
          this.tasks.splice(this.task, 1);
      },
      editTask (){
          this.isEditing = true;

           this.tasks[this.tasks.indexOf(this.task)] = this.editedTask;

        //   this.$set(this.tasks,  this.editedTask)

        //   this.task = this.editedTask;this.tasks.indexOf(this.task)

      }

  }
}
</script>

<style lang="scss" scoped>
.todolist{

    &__top{
        min-height: 800px;
        background: var(--liniar_gr);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    &__bottom{
        background: #E5E5E5;
        min-height: 200px;  
    }
    &__list-area{
        width: 1200px;
        background: white;
        min-height: 660px;
        margin-bottom: -250px;
    }
    &__title{
        color: black;
    }
    &__logo{
           margin-bottom: 66px;
    }
}
</style>