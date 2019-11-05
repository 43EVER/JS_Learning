<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30">
      <div class="px-2 flex-1">
        <div class="text-white">Vue</div>
        <span class="text-grey_1 fs-xxs">得劲</span>
      </div>
      <router-link to="/" tag="div" class="text-grey"> 更多英雄&gt;</router-link>
    </div>
    <div class="top" >

    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null,
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/heroes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
}
</script>
