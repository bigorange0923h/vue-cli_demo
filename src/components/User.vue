<!-- 用户 -->
<template>
  <div>
    <h1>用户模块</h1>

    <table border="1">
      <tr>
        <td>id</td>
        <td>name</td>
        <td>age</td>
        <td>option</td>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td><a href="">删除</a><a href="">修改</a></td>
      </tr>
    </table>
    <!-- 使用组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer"; //引入组件
export default {
  name: "User",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "张三",
          age: 20,
        },
        {
          id: 2,
          name: "张四",
          age: 21,
        },
        {
          id: 3,
          name: "张五",
          age: 22,
        },
        {
          id: 4,
          name: "张六",
          age: 25,
        },
      ],
    };
  },
  components: {
    Footer, //注册组件
  },
};
</script>

<style  scoped>
</style>
