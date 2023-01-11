<template>
 
 <div v-if="!isMobile()" style="width:76%; background-color:#d3d8e0  ; margin:10px ; margin-top: 20px; padding:13px" >
 
 <div class="row">

     <div class="col-lg-3 col-6">
       df
   </div>
   <div class="col-lg-3 col-6">
       df
   </div>
   <div class="col-lg-3 col-6">
       df
   </div>
   <div class="col-lg-3 col-6">
       df
   </div>
 </div>

 </div>
 <div v-if="isMobile()" style="  background-color:#d3d8e0  ; margin:10px ; margin-top: 20px; padding:13px" >
 
 <div class="row">

     <div class="col-lg-3 col-6">
       df
   </div>
   <div class="col-lg-3 col-6">
       df
   </div>
   <div class="col-lg-3 col-6">
       df
   </div>
   <div class="col-lg-3 col-6">
       df
   </div>
 </div>

 </div>

</template>

<script>
export default {
    name:"Footer1"
    ,

    methods:
    {
             isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
    }

}
</script>

<style>

</style>