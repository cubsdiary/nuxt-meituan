<template>
  <el-container class="layout-default">
    <el-header style="height: auto;">
      <MyHeader />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer style="height: auto;">
      <MyFooter />
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index'
import MyFooter from '@/components/public/footer/index'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
</style>
