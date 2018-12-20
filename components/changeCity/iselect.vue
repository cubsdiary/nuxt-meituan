<template>
  <div class="m-iselect">
    <span class="name">
      按省份选择:
    </span>
    <el-select
      v-model="pvalue"
      placeholder="省份"
    >
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="cvalue"
      :disabled="!city.length"
      placeholder="城市"
    >
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      province: [],
      pvalue: '',
      city: [],
      cvalue: '',
      input: '',
      cities: []
    }
  },
  watch: {
    async pvalue(newPvalue) {}
  },
  async mounted() {
    // let self=this;
    // let {status,data:{province}}=await self.$axios.get('/geo/province')
    // if(status===200){
    //   self.province=province.map(item=>{
    //     return {
    //       value:item.id,
    //       label:item.name
    //     }
    //   })
    // }
  },
  methods: {
    querySearchAsync() {},
    handleSelect(item) {
      console.log(item.value)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/changeCity/iselect.scss';
</style>
