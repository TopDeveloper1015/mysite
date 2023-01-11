<template>
   
 
  <form @click.prevent>
        
        <h1>تسجيل مستخدم جديد </h1>  
         <br/>
     <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
            <input type="text" class="form-control" placeholder="ادخل اسمك" v-model="name">
            <span class="error-feedback" v-if="v$.name.$error"> الاسم مطلوب</span>
        </div>
    </div>
     <br/>
    <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
            <input type="text" class="form-control" placeholder="ادخل بريدك الالكتروني" v-model="email">
            <span class="error-feedback" v-if="v$.email.$error"> البريد الالكتروني مطلوب</span>
        </div>
    </div>
    <br/>
    <div class="row g-3 aling-items-center">
        
        <div class="col-auto d-block mx-auto">
            <input type="password" class="form-control" placeholder="ادخل كلمة مرور" v-model="pass">
            <span class="error-feedback" v-if="v$.pass.$error"> كلمة المرور مطلوبة</span>
        </div>
    </div>
    <br/>
        <div class="row g-3 aling-items-center">
        
        <div class="col-auto d-block mx-auto">
             
            <button type="submit" @click="signUpF()" class="btn btn-secondary">تسجيل  </button>  
             
        </div>
    </div>
        
    <br/>
  </form>
     
</template>



<script>
import axios from "axios";
import {mapActions} from "vuex";
import useValidate from "@vuelidate/core";
import {required , email , minLength} from "@vuelidate/validators";
 

export default {
    name:"Signup",
    components:{
        
    },
  
    data(){
        return{
        v$:useValidate(),
        name:"",
        pass:"",
        email:""

        }
        
    },
    validations()
    {
        return{
            name:{required , minLength:minLength(3)},
            pass:{required},
            email:{required , email}
        }
    },
    mounted(){
        this.email=this.$route.params.email;

        console.log('we are here 4');
        let user =localStorage.getItem('user-info');
        if(user){
             this.userName = JSON.parse(user).user_name;
      this.name = JSON.parse(user).name;
             
        }

         if(this.name=="غير مسجل")
        {
            this.redirectTo({val:"Home"});
        }
    },
    methods:{
        ...mapActions(['redirectTo']),
      //  LoginPage(){
         //   this.$router.push({name:"Login"});
       // }

       async signUpF(){
           console.log("Sing up now");
           this.v$.$validate();
           if(!this.v$.$error){
               console.log("from validated successfully");
               let result = await axios.post('https://my-app-2-vfjnn.ondigitalocean.app/api/adduserinfo' ,{
                   name:this.name,
                   userName:'ahmed',
                   email:this.email,
                   password:this.pass
               } );
               if(result.status == 200){
                   console.log("add new user scuucessfully");

                   //save user data in local storage in browser
                  // localStorage.setItem("user-info" , JSON.stringify({name:'d' , pass:'dd'}));
                  // localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                  // console.log(JSON.stringify(result.data));

                   this.redirectTo({val:"Home"});
               }
               else{
                   console.log('error on added new user');
               }
           }else{
               console.log("Form Validate Failed");
           }
       }
    }
}
</script>



<style lang="scss" scoped >
    .error-feedback{
        color:red;
        font-size: 0.95em;
    }

</style>