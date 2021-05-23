<!-- 添加用户 -->
<template>
  <div>
    <h2>编辑用户</h2>
    <form action="">
      <P> 姓名:<input v-model="user.name" type="text" /> </P>
      <P>年龄:<input v-model="user.age" type="text" /> </P>
      <P>生日:<input v-model="user.birthday" type="text" /> </P>
      <P><input type="button" @click="editUserInfo" value="更新用户信息" /></P>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        id: "",
      },
    };
  },
  methods: {
    findOne(id) {
      this.$http
        .get("http://rap2api.taobao.org/app/mock/283878/user/findOne?id=" + id)
        .then((res) => {
          this.user = res.data;
        });
    },
    editUserInfo() {
      this.$http
        .post(
          "http://rap2api.taobao.org/app/mock/283878/user/update",
          this.user
        )
        .then((res) => {
          if (res.data.success) {
            alert(res.data.msg);
            this.$router.push("/user"); //切换路由
          }
        });
    },
  },
  components: {},
  created() {
    this.user.id = this.$route.query.id;
    this.findOne(this.$route.query.id);
  },
};
</script>

<style  scoped>
</style>
