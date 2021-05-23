<!-- 添加用户 -->
<template>
  <div>
    <h2>添加用户</h2>
    <form action="">
      <P> 姓名:<input v-model="user.name" type="text" /> </P>
      <P>年龄:<input v-model="user.age" type="text" /> </P>
      <P>生日:<input v-model="user.birthday" type="text" /> </P>
      <P><input type="button" @click="saveUserInfo" value="添加用户信息" /></P>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserAdd",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    saveUserInfo() {
      this.$http
        .post("http://rap2api.taobao.org/app/mock/283878/user/save", this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/user"); //切换路由
          }
        });
    },
  },
  components: {},
  created() {},
};
</script>

<style  scoped>
</style>
