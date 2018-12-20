<template>
  <div class="">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd
        v-for="item in list"
        :key="item"
      >
        <a :href="'#city-'+item">
          {{ item }}
        </a>
      </dd>
    </dl>
    <dl
      v-for="item in block"
      :key="item.title"
      class="m-categroy-section"
    >
      <dt :id="'city-'+item.title">
        {{ item.title }}
      </dt>
      <dd>
        <span
          v-for="c in item.city"
          :key="c"
        >
          {{ c }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
// import pyjs from 'js-pinyin'
export default {
  data() {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      block: []
    }
  },
  async mounted() {}
}
</script>

<style lang="scss">
@import '@/assets/css/changeCity/categroy.scss';
</style>
