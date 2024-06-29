<template>
  <client-only>
    <div class="content">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <div class="slide-1"></div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style>
.slide-1 {
  height: 730px;
  background-image: url(/cat.jpg);
  background-repeat: no-repeat;
  width: 100%;
}

.swiper-pagination>.swiper-pagination-bullet {
  background-color: rgba(252, 252, 252, 0.5);
  opacity: 1;
  width: 25px;
  height: 25px;
}

.swiper-pagination>.swiper-pagination-bullet-active {
  height: 25px;
  width: 25px;
  background-color: #000000;
  border: 5px solid rgba(252, 252, 252, 0.5);
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 13.5px;
}
</style>