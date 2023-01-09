<template>
  <div class="container">
    <h3>配置页面</h3>
    <template v-for="(section, index) in Object.keys(model)">
      <div class="title" :key="section">{{ section }}</div>
      <el-form ref="configForm" :key="index" :model="model[section]">
        <el-form-item
          v-for="label in Object.keys(model[section])"
          :key="label"
          :label="label"
          :prop="label"
          :rules="[{ required: true, message: '请输入内容' }]"
        >
          <el-input
            :disabled="
              label === 'make_label_json' || label === 'draw_wave_sepc'
            "
            v-model="model[section][label]"
          ></el-input>
        </el-form-item>
      </el-form>
    </template>
    <el-button type="primary" @click="handleGet">拉取配置</el-button>
    <el-button @click="handleSend">提交配置</el-button>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'MyForm',
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async getConfigInfo () {
      const res = await request({
        url: '/config',
        method: 'get'
      })
      const { data } = res
      for (const key of Object.keys(data)) {
        this.$set(this.model, key, {})
        for (const attribute of Object.keys(data[key])) {
          this.$set(this.model[key], attribute, data[key][attribute])
        }
      }
    },
    handleGet () {
      this.getConfigInfo()
    },
    async setConfigInfo (config) {
      try {
        const valids = this.$refs.configForm.map(item => item.validate())
        const results = await Promise.all(valids)
        if (!results.every(item => item === true)) {
          console.log('校验不通过')
          return false
        }
      } catch (e) {
        console.log(e)
        return
      }
      try {
        const res = await request({
          url: '/config',
          method: 'post',
          data: config
        })
        console.log(res)
        this.$message({
          type: 'success',
          message: '数据发送成功'
        })
      } catch (e) {
        console.log(e)
      }
    },
    handleSend () {
      this.setConfigInfo(this.model)
    }
  },
  created () {
    this.getConfigInfo()
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 16px;
}
.title {
  text-align: left;
  width: 100px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}
</style>