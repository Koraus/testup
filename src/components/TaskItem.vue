<template>
  <div>
    <div class="task-row">
      {{ index + 1 }}
      <label class="task-text-lable">
        <span> </span>
        <input class="task-checkbox" type="checkbox" v-model="task.checked" />
        <span class="spn-replace-checkbox"> </span>

        <input
          v-if="!task.isEditing"
          type="text"
          v-model="task.task"
          class="task-text-input"
        />
      </label>
      <button class="btn" @click="deleteTask()">X</button>
    </div>

    <hr />
  </div>
</template>

<script>
export default {
  name: "TaskItem",

  data() {
    return {};
  },
  props: {
    task: Object,
    index: Number,
  },
  emits: {
    delTask: null,
  },

  methods: {
    deleteTask() {
      this.$emit("delTask");
    },
  },
};
</script>

<style scoped>
.task-row {
  width: 100%;
}
.task-text-input {
  border: none;
  padding: 8px;
  padding-left: 8px;
  width: 77%;
  position: relative;
  margin-left: 30px;
  cursor: pointer;
}

input[type="checkbox"]:checked ~ span,
input[type="checkbox"]:checked ~ input {
  text-decoration: line-through;
  text-decoration-color: rgba(4, 3, 71, 0.425);
  color: rgb(148, 148, 148);
}
.btn {
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: var(--color_btn);
  color: var(--color_white_text);
  border: none;
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
.task-text-lable {
  position: relative;
}
.task-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.spn-replace-checkbox {
  padding-left: 20px;
  padding-top: 20px;
  box-sizing: border-box;
}
.task-text-lable input[type="checkbox"] + .spn-replace-checkbox {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 8px;
  height: 8px;
  border: 1px var(--color_btn) solid;
}
.task-text-lable input[type="checkbox"]:focus + .spn-replace-checkbox {
  border: 1px var(--color_error) solid;
}
input[type="checkbox"]:checked + .spn-replace-checkbox {
  background: url("../assets/img/tick-login.svg") center no-repeat;
  background-size: 75%;
}
</style>