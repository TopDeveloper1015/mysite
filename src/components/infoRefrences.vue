<template>
     <div class="row info-refrences" style="margin-top: 45px;   direction: rtl;">
           

           <div class="col-12 col-lg-12  "> 
              <p style="border-bottom:#a22833 1px solid"  >  <span  >المراجع</span> <span id="plusSing"  @click="showInfo()" style="color:#a22833 ; font-size: 16px; cursor: pointer;">[+]</span>  <span id="minusSing"   @click="hideInfo()" style="color:#a22833 ; font-size: 16px; cursor: pointer;">[-]</span>  </p></div>
             <div id="infoRef"> 
              <div class="col-12 col-lg-12 ">  <span style="background-color:#f0efed" >  كتاب , Java how to program  </span></div>
           <div class="col-12 col-lg-12 ">  <span style="background-color:#f0efed" >  كتاب , Java how to program  </span></div>
             </div>
         </div>
</template>

<script>
export default {
    name:"InfoRefrences"
    ,
    methods:
    {
      showInfo(){
        document.getElementById("infoRef").style.display = "block";
        document.getElementById("minusSing").style.display = "inline-block";
        document.getElementById("plusSing").style.display = "none";
      }
      ,
      hideInfo()
      {
        document.getElementById("infoRef").style.display = "none";
        document.getElementById("minusSing").style.display = "none";
        document.getElementById("plusSing").style.display = "inline-block";
      }
    }

}
</script>

<style>


 #infoRef , #minusSing{
  display:none;
 }

</style>