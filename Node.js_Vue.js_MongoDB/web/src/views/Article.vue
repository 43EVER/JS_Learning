<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue"></div>
      <strong class="flex-1 text-blue pl-2">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        2019-11-3
      </div>
    </div>
    <div v-html="model.body" class="px-3 body"></div>
    <div class="px-3 py-3">
      <div class="d-flex ai-center border-top py-2">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg ml-2">相关资讯</strong>
      </div>
    </div>
    <div class="py-1 fs-lg">
      <router-link tag="div" v-for="item in model.related" :key="item._id"
        :to="`/articles/${item._id}`"
        class="py-2">
        {{item.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true }
  },

  data() {
    return {
      model: null
    }
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },

  created() {
    this.fetch();
  },

  watch: {
    id() {
      this.fetch();
    }
  }

}
</script>

<style lang="scss">
.page-article {
  .icon-back {
    font-size: 1.5rem;
  }

  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>