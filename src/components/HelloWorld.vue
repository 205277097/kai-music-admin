<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const message = ref("后台111")
const hi =() => {
  message.value = "已点击"
}
</script>

<template>
  <h1>{{ message }}</h1>
  <q-btn color="black" @click="count++">点击次数{{ count }}</q-btn>
  <q-btn color="black" @click="hi">请求接口</q-btn>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
