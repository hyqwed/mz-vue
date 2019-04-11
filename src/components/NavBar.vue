<template>
   <div id="footer">
	 <ul>
	 	<li v-for="(tab,index) in tabs" :key="index">
             <router-link :to="tab.href" active-class="active"><i :class="['iconfont',tab.icon] "></i>{{tab.name}}</router-link></li>
	 	<!-- <li><a href="#"><i class="iconfont icon-yingyuana "></i>影院</a></li>
	 	<li><a href="#"><i class="iconfont icon-tehui "></i>特惠</a></li>
	 	<li><a href="#"><i class="iconfont icon-wode "></i>我的</a></li> -->
	 </ul>
   </div>
</template>
<script>
export default {
    props:{
        tabs:{
            type:Array
        }
}
}
</script>

<style>
#footer ul{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 50px;
	width: 100%;
	font-size: 14px;
	display: flex;
	justify-content:space-around;
	align-items: center;
	
	background: #ffff;
}
#footer .iconfont{
	font-size: 20px;
}
#footer a {
	
	display: flex;
	flex-direction: column;
	align-items: center;
}
#footer .active{
	color: #9D0000;
}
</style>
