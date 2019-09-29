<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140">
    </el-table-column>
    <el-table-column prop="body" label="内容" width="420">
    </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        articles: []
      };
    },
    created: function () {
      this.fetch();
    },
    methods: {
      async fetch() {
        let res = await this.$http.get('articles');
        this.articles = res.data;
      },

      edit(id) {
        this.$router.push(`/articles/${id}/edit`);
      },

      async remove(id) {
        await this.$http.delete(`articles/${id}`);
        this.$message({
            message: "文章创建成功",
            type: "success"
          });
        this.fetch();
      }
    }
  };
</script>