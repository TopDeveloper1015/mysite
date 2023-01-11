<template>
  <div class="container">
      
       

      <form @click.prevent>
        
        <h1>الملف الشخصي </h1>  
         
     <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
            <p style=" font-size:19px ; ">الاسم</p>
           <p style=" font-size:16px ; color:blue" >{{name}}</p>
             
        </div>
    </div>
     <br/>
    <div   class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
            <p style=" font-size:19px">الايميل</p>
            <p style=" font-size:16px ; color:blue" >{{email}}</p>
             
        </div>
    </div>
    <br/>
    <div class="row g-3 aling-items-center">
        
        <div class="col-auto d-block mx-auto">
            <p  style=" font-size:19px">رقم المرحلة , في اساسيات البرمجة</p>
           <p style="color:blue ; font-size:16px">{{levelGroup}}</p>
        </div>
    </div>
    <br/>
    <div class="row g-3 aling-items-center">
        
        <div class="col-auto d-block mx-auto">
            <p style=" font-size:19px" >الاشتراك</p>
            <p style="color:blue; font-size:16px" v-if="isPlanPaid==0"> 
                غير مشترك في اي خطة في موقع برمجها 
                </p>

              
            <p style="color:blue; font-size:16px" v-if="isPlanPaid==1">مشترك في  خطة الاشتراك المتقدم  </p>
             
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    
    <div class="row g-3 aling-items-center">
        
        <div class="col-auto d-block mx-auto">
          <a v-if="name!='غير مسجل'  " ><button class="btn btn-info" type="button" @click="logOut()"  >تسجيل الخروج </button> </a>
             
        </div>
    </div>
    <br/>
        <div class="row g-3 aling-items-center">
        
              
               
               
        
          
    </div>
        
    <br/>
  </form>
      </div>
</template>

<script>
 
import {mapActions} from "vuex";
export default {
name:"Profile",
components:{
    
},
data(){
    return{
      name:"غير مسجل",
      email:"",
      pass:"",
      userLevel:0,
       
      isPlanPaid:0,
      levelGroup:0
    }
},
mounted(){
    let user=localStorage.getItem("user-info");

    if(user){
        console.log('..');
         
         this.name=JSON.parse(user).name;
         console.log(this.name);
         console.log('..');
         this.email=JSON.parse(user).email;
         this.pass=JSON.parse(user).password;
         this.userLevel=JSON.parse(user).level_no;
         this.isPlanPaid=JSON.parse(user).is_plan_paid;
         this.levelGroup=JSON.parse(user).level_group;
    }
    else{
         
             console.log('dfd');
             this.redirectTo({val:"Signup"});
    }
}
,
methods:{
    ...mapActions(['redirectTo']),

     

        logOut(){
            localStorage.clear();
            this.redirectTo({val:"Home"});
            
        }
}
}
</script>
    
<style>

</style>