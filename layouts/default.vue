<template>
  <el-container class="layout-default">
    <el-header height="auto">
      <MyHeader />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="auto">
      <MyFooter />
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFooter from '@/components/public/footer/index.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
