<template>
  <li class="task">
    <div class="task__row">
      <span class="task__index"> {{ index + 1 }} </span>
      <label class="task__text-lable">
        <input
          class="task__checkbox"
          type="checkbox"
          v-model="task.checked"
          v-if="!isLast"
        />
        <span class="spn-replace-checkbox" v-if="!isLast"> </span>

        <textarea 
          
          oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
          v-if="!task.isEditing"
          type="text"
          v-model="task.task"
          class="task__text-textarea"
          placeholder="Enter you task"
          @input="addEmptyTaskAfterInput"
  
        >
        </textarea>

        <button v-if="!isLast" class="btn" @click="deleteTask()">X</button>
      </label>
    </div>

    <hr>
  </li>
</template>

<script>
export default {
  name: "TaskItem",

  data() {
    return {

    };
  },
  props: {
    task: Object,
    index: Number,
    isLast: Boolean,
  },
  emits: {
    delTask: null,
    addEmptyTask: null,
  },

  methods: {
    deleteTask() {
      this.$emit("delTask");
    },
    addEmptyTask() {
      this.$emit("addEmptyTask");
    },

    addEmptyTaskAfterInput: function() {
  if (this.timeout) 
    clearTimeout(this.timeout);  
  this.timeout = setTimeout(() => {
     this.addEmptyTask()
  }, 600); // delay
}
    
  },
};
</script>

<style scoped>
.task{
  list-style: none;
}
.task__row {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 5px;
}
.task__index{
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding-left: 10px;
  margin-right: 10px;
}
.task__text-textarea {
  border: none;
  width: 90%;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  align-self: center;
  padding-top: 5px;
  /* resize: none; */
}

input[type="checkbox"]:checked ~ span,
input[type="checkbox"]:checked ~ textarea {
  text-decoration: line-through;
  text-decoration-color: rgba(4, 3, 71, 0.425);
  color: rgb(148, 148, 148);
}
.btn {
  width: 25px;
  height: 25px;
  padding: 0;
  font-size: 10px;
  background: var(--color_btn);
  color: var(--color_white_text);
  border: none;
  min-width: 25px;
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

hr {
 
  width: 90%;
}
.task__text-lable {
  display: flex;
  align-self: center;
  justify-content: center;
  position: relative;
  flex-grow: 1;

}
.task__checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.spn-replace-checkbox {
  padding-right: 25px;
  padding-top: 25px;
  display: inline-block;
  box-sizing: border-box;
}
.task__text-lable input[type="checkbox"] + .spn-replace-checkbox {
  /* position: absolute; */
  /* top: ; */
  left: 0px;
  border: 1px rgba(0, 118, 192, 0.2) solid;
  max-height: 25px;
}
.task__text-lable input[type="checkbox"]:focus + .spn-replace-checkbox {
  border: 1px rgba(0, 118, 192, 1) solid;
  max-height: 25px;
}
input[type="checkbox"]:checked + .spn-replace-checkbox {
  background: url("../assets/img/tick-login.svg") center no-repeat;
  background-size: 75%;
  max-height: 25px;
}
</style>  