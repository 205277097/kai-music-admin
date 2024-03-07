<script setup>
import { ref } from 'vue'
import { sayHello } from '../api/hello';

defineProps({
  msg: String,
})

const count = ref(0)
const message = ref("未点击")
const hi =() => {
  sayHello().then(res=>{
    console.log(res)
    message.value =res.data
  })
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
</style>../api/hello
