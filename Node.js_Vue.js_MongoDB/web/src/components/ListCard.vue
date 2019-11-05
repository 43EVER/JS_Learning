<template>
  <m-card :title="title" :icon="icon">
    <div class="nav jc-between px-2">
      <div class="nav-item" :class="{active: idx === active}"
        v-for="(category, idx) in categories" :key="idx"
        @click="$refs.list.swiper.slideTo(idx)">
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list" :options="{autoHeight: true}"
      @slide-change="() => active = $refs.list.swiper.realIndex">
        <swiper-slide v-for="(category, idx) in categories" :key="idx">
          <slot name="items" :category="category">
          </slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        icon: { type: String, required: true },
        categories: { type: Array, required: true },
    },
    data() {
      return {
        active: 0
      }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
.card {
    .card-header {
        border-bottom: 1px solid $border-color;
    }
    border-bottom: 1px solid $border-color;
}
</style>