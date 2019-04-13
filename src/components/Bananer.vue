<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"
        v-for="(item,index) in banners"
        :key="index">
            <img :src="item.imgUrl" alt="" >
            </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
const Swiper = window.Swiper
 export default{
     props:{
         banners:{
             type:Array
         }
     },
     data() {
         return {
           swiper:null
         }
     },
     updated(){
         if(!this.swiper){
      this.swiper =  new Swiper('.swiper-container',{
              loop: true,
             pagination:{
                 el:'.swiper-pagination',
             }
         })
     }
     }
 }
</script>
<style lang="less">
.swiper-container{
    width:100%;
    height: 210px;

 img{
    width: 100%;
 }
   .swiper-pagination-bullet {
     background: #fff;
     opacity: 1;
   }

   .swiper-pagination-bullet-active {
     background: red;
   }
}
</style>

