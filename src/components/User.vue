<!-- 用户 -->
<template>
  <div>
    <h1>用户模块</h1>

    <table border="1">
      <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>生日</td>
        <td>option</td>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.birthday }}</td>
        <td>
          <a href="javascript:;" @click="deleteUser(user.id)">删除</a
          ><a :href="'#/user/edit?id=' + user.id">修改</a>
        </td>
      </tr>
    </table>
    <a href="#/user/add">添加</a>

    <router-view></router-view>
    <!-- 使用组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer"; //引入组件
export default {
  name: "User",
  data() {
    return { users: [] };
  },
  components: {
    Footer, //注册组件
  },
  methods: {
    findAll() {
      this.$http
        .get("http://rap2api.taobao.org/app/mock/283878/user/findAll")
        .then((res) => {
          this.users = res.data.results;
        });
    },
    deleteUser(id) {
      this.$http
        .get("http://rap2api.taobao.org/app/mock/283878/user/delete?id=" + id)
        .then((res) => {
          if (res.data.success) {
            alert(res.data.msg);
            this.findAll();
          }
        });
    },
  },
  created() {
    this.findAll();
  },
  watch: {
    //监听路由
    $route(to, from) {
      if (to.path == "/user") {
        this.findAll();
      }
    },
  },
};
</script>

<style  scoped>
</style>
