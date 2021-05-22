<template>
  <div id="app">
    <a href="#/home">主页模块</a>
    <a href="#/user">用户模块</a>
    <a href="#/student">学生模块</a>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
