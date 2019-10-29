<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item style="display: flex; justify-content: center;">
          <el-button type="primary" native-type="submit" style="width: 10rem">
          登录
        </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.model);
      // sessionStorage.token = res.data.token;
      localStorage.token = res.data.token;
      this.$router.push('/');
      this.$message({
        type: 'success',
        message: '登陆成功'
      });
    }
  }
}
</script>

<style>
.login-card {
  width: 30rem;
  margin: 5rem auto;
}
</style>