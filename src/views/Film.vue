<template>
    <div>
        <Bananer :banners="bannerList"></Bananer>
    </div>
</template>
<script>
import Bananer from '../components/Bananer';
import axios from 'axios';
export default {
    data(){
        return{
         bannerList:[],
        }
    },
  components: {
      Bananer
  },
  methods:{
      /**
     * 请求轮播图的数据
     */
    getBannerList() {
      axios.get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=3684551', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546520171868310774513"}',
          'X-Host': 'mall.cfg.common-banner'
        }
      }).then(res => {
              //console.log(res.data);
          let data = res.data;
        if (data.status === 0) {
          this.bannerList = data.data;
        } else {
          alert(data.msg);
            }
          })
      }
  },
 created() {
    this.getBannerList();
  },

}
</script>
