<template>
    <div>
        <el-form
                :rules="loginFormRuler" ref="loginForm" :model="loginForm"
                 class="loginContainer">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <el-input size="large" type="text" v-model="loginForm.username" autocomplete="false"
                          placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input size="large" type="password" v-model="loginForm.password" autocomplete="false"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input size="large" type="text" v-model="loginForm.code"
                          auto-complete="false"
                          placeholder="点击图片更换验证码" style="width:245px;margin-right: 5px">
                </el-input>
                <img alt="captcha" :src="captchaUrl" @click="updateCaptcha">
            </el-form-item>
            <el-checkbox class="loginRemember" v-model="checked">记住我</el-checkbox>

            <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loading: false,
                captchaUrl: '/api/captcha?time=' + new Date(),
                loginForm: {
                    username: 'admin',
                    password: '123',
                    code: ''
                },
                checked: true,
                loginFormRuler: {
                    username: [
                        {
                            required: true,
                            message: '请输入用户名',
                            trigger: 'blur',
                        },
                        {
                            min: 3,
                            max: 5,
                            message: 'Length should be 3 to 5',
                            trigger: 'blur',
                        },
                    ],
                    password: [
                        {
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur',
                        },
                        {
                            min: 3,
                            max: 5,
                            message: 'Length should be 3 to 5',
                            trigger: 'blur',
                        },
                    ],
                    code: [
                        {
                            required: true,
                            message: '请输入验证码',
                            trigger: 'blur',
                        },
                        {
                            min: 4,
                            max: 4,
                            message: 'Length should be 4',
                            trigger: 'blur',
                        },
                    ],
                }
            }
        },
        methods: {
            updateCaptcha() {
                this.captchaUrl = '/api/captcha?time=' + new Date();
            },
            submitLogin() {
                this.$refs['loginForm'].validate((valid) => {
                    if (valid) {
                        this.$postRequest('/login', this.loginForm).then(resp => {
                            if (resp) {
                                //存储用户token
                                const tokenStr = resp.data.tokenHead+resp.data.token;
                                window.sessionStorage.setItem('tokenStr', tokenStr);
                                this.$router.replace('/home');
                            }
                        })

                    } else {
                        this.$message.error('请输入所有字段');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .loginContainer {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .loginTitle {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }


    .el-form-item__content {
        display: flex;
        align-items: center;
    }

</style>
