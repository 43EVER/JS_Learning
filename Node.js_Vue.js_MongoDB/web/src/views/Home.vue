<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/images/1.jpeg" class="w-100">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/2.jpeg" class="w-100">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/3.jpeg" class="w-100">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1"
      slot="pagination">
      </div>
    </swiper>
    <!-- end of swiper -->
    
    <div class="text-grey-1 nav-icons bg-white mt-3 text-center pt-3">
      <div class=" d-flex flex-wrap">
        <div class="nav-item mb-3"
          v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div>
        <div class="bg-light py-2 fs-sm">
          <i class="sprite sprite-arrow mr-1"></i>
          <span>收起</span>
        </div>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card :title="'新闻资讯'" :icon="'news'" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" v-for="(news, idx) in category.newsList" :key="idx" 
          class="py-2 fs-lg d-flex">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark_1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey_1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card :title="'英雄列表'" :icon="'helmet'" :categories="heroesCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link :to="`heroes/${hero._id}`" tag="div" v-for="(hero, idx) in category.heroesList" :key="idx" 
            class="p-2 text-center"
            style="width: 20%;">
            <img :src="hero.avatar" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD');
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        },
      },
      newsCats: [],
      heroesCats: []
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('/news/list');
      this.newsCats = res.data;
    },
    async fetchHeroesCats() {
      const res = await this.$http.get('/heroes/list');
      this.heroesCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroesCats();
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($map: $colors, $key: 'white');
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: 'info');
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
