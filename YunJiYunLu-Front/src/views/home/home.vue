<style scoped>

</style>

<template>
 <div class="home">
  home
  <div class="nav">
    <router-link to="/home/profile">profile</router-link>
    <router-link to="/home/plan">plan</router-link>
    <router-link to="/home/notice">notice</router-link>
    <router-link to="/home/record">record</router-link>
    <router-link to="/home/staff">staff</router-link>
    <router-link to="/home/department">department</router-link>
    <router-view></router-view>
  </div>
 </div>
</template>

<script setup>
  
</script>