<template>
  <div id="app">
    <router-view></router-view>
    <NavBar :tabs="tabs"></NavBar>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'app',
  data(){
    return{
      tabs:[
        {name:'电影',href:'/films', icon:'icon-dianying1'},
        {name:'影城',href:'/cinemas',icon:'icon-yingyuana'},
        {name:'特惠',href:'/sales',icon:'icon-tehui'},
        {name:'我的',href:'/center',icon:'icon-wode'},
      ]
    }
  },
  components:{
    NavBar
  }
 
}
</script>

<style>
@import './styles/foot.css';
@import './styles/resets.css';
</style>

