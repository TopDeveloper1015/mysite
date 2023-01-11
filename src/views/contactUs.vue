<template>
  <div class="container">
      

      <form @click.prevent>
        
        <p style="font-size:22px">تواصل معنا  </p> 
         
     <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
            <p style="font-size:18px"> تواصل معنا عبر قنوات التواصل </p>

          <button type="button" @click="gotoUrl()" class="btn btn-info">
           حسابنا في تويتر
          </button>

          <p style="font-size:18px"> barmijha@hotmail.com  البريد الالكتروني   </p>

           

        </div>
     </div>
    
    
  </form>
      </div>
</template>

<script>
 
import {mapActions} from "vuex";
export default {
name:"ContactUs",
components:{
     
},



mounted(){
    
}
,

methods:{
    ...mapActions(['redirectTo']),

     gotoUrl(){
         this.redirectTo({val:"TwiRedirect"});
     }

       
}


}
</script>
    
<style>

</style>