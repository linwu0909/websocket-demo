<template>
  <div class="about">
    <input type="text" placeholder="请输入用户名" v-model="username" />
    <button @click="handleEnterBtnClick">进入聊天室</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    handleEnterBtnClick() {
      const username = this.username;
      localStorage.setItem("username", username);
      this.$router.push("/home");
    },
  },
};
</script>
