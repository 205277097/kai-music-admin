<template>
    <div class="login-card">
        <q-card class="my-card">
            <div class="title">Music</div>
            <div class="q-pa-md">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                    <q-input filled v-model="accout" label="用户名" lazy-rules
                        :rules="[val => val && val.length > 0 || '请输入用户名']" />

                    <q-input filled type="password" v-model="code" label="验证码" lazy-rules
                        :rules="[val => val && val.length > 0 || '请输入密码']" />

                    <q-toggle v-model="accept" label="记住用户名" />

                    <div>
                        <q-btn class="login-btn" label="登录" type="submit" color="primary" />
                    </div>
                </q-form>
            </div>
        </q-card>
    </div>

</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const accept = ref(false);
        return {
            accept
        }
    }
}
</script>
<style scoped lang="scss">
.login-card{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    .my-card{
        width: 410px;
        .title{
            text-align: center;
            padding: 20px;
            font-size: 20px;
        }
        .q-pa-md{
            .login-btn{
                width: 100%;
            }
        }
    }
}

</style>