<template>
  <div class="container">
     

      <form @click.prevent>
        
        <p style="font-size:22px">منصة برمجها </p> 
         <br/>
         
     <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
            <p style="font-size:15px; "> بعد الاطلاع على المشروحات التي تخص برمجة الحاسب <br/> 
            تبين ان هناك فجوات في تفهيم اساس برمجة الحاسب و تبين  
            ان هناك حشو و تكرار<br/> و عدم تدرج في تفيهم المفاهيم الاول فالتالي 
             و من هنا تبينت فكرة منصة برمجها 
             <br/> و من منطلق تعليم الآخرين ونشر المعرفة و الفائدة والانتفاع
            قمنا بهذا التطبيق <br/>الذي لديه فكرة خاصة و مشوقة ومفيدة في نفس الوقت </p>

            <br/>
            <p style="font-size:15px; ">
                من دافع حب لهذا التخصص الذي لم يمارسه شخص الا واعجب به <br/>
                 و من باب نشر العلم و المعرفة بين المجتمع ايضا <br/>
                 البرمجة عمود علم الحاسب الآلي هذه الآلة التي غيرت امور كثيرة <br/>
                 البرمجة موجودة بشكل عام لكن برمجة الحاسب الآلي هي ما نتحدث عنه
            </p>
          

           

        </div>
     </div>
    
    
  </form>
      </div>
</template>

<script>
 
import {mapActions} from "vuex";
export default {
name:"AboutUs",
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