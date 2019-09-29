<template>
    <el-form ref="form" label-width="80px" @submit.native.prevent="editArticle">
        <el-form-item label="文章标题">
            <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
            <el-input type="textarea" v-model="article.body"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">立即保存</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>


<script>
  export default {
    data: function () {
      return {
        article: {
          title: '',
          body : ''
        }
      }
    },

    created: function () {
      this.fetch();
    },


    methods: {
      editArticle: async function() {
        let res = await this.$http.put(`articles/${this.$route.params.id}`, this.article);
        this.$message({
          message: "文章更新成功",
          type   : "success"
        });
        this.$router.push('/articles/index');
      },

      fetch: async function () {
        let res = await this.$http.get(`articles/${this.$route.params.id}`);
        this.article = res.data;
      }

    }
  }
</script>