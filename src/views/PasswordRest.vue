<template>
 
  <form @click.prevent>
      <h1>اعادة تعيين كلمة المرور</h1>
      <br/>
    <p style="font-size:20px">التحقق من البريد الالكتروني</p>
    <br />

    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
          <p v-if="emailNotFound==false" style="color:red"> البريد الالكتروني غير موجود  </p>
         
      </div>
     
    </div>

    <br />

    <div v-if="sent == false">
      <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
          <input
            type="email"
            class="form-control"
            placeholder="ادخل بريدك الالكتروني"
            v-model="email"
          />
          <span class="error-feedback" v-if="v$.email.$error">
            البريد الالكتروني مطلوب</span
          >
        </div>
      </div>
      <br />

      <br />
      <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
          <button type="button" @click="sendEmailCode()" class="btn btn-info">
            ارسل رمز للايميل
          </button>
          &nbsp; &nbsp; &nbsp;
        </div>
      </div>
    </div>

    

    <div v-if="sent == true">
         <p style="font-size:15px">تم ارسال بريد الكتروني لكم يحتوي الرمز , اذا لم تجده انظر صنوق الرسائل الغير هامة</p>
            <br/>
            <br/>
      <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
             
            
          <input
            type="text"
            class="form-control"
            placeholder="ادحل الرمز المرسل للايميل"
            v-model="theEmailCode"
          />
        </div>
      </div>

      <br />
      <br />

      <div class="row g-3 aling-items-center">
        <div class="col-auto d-block mx-auto">
          <button type="button" @click="checkEmailCode()" class="btn btn-info">
            تحقق من الرمز
          </button>
          &nbsp; &nbsp; &nbsp;
        </div>
      </div>
    </div>
     
    <br />
     
        <p v-if="codeNotCorrect==true" >رمز التحقق غير صحيح</p>
        
    <div v-if="verfied == true">
        <br />
        <p>تم التحقق من الرمز بنجاح , ادخل كلمة المرور الجديدة </p>
        <br/>
      
    </div>
    <br/>
    <br/>
     <div v-if="verfied==true" class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
           <input
            type="password"
            class="form-control"
            placeholder="ادخل كلمة المرور الجديدة "
            v-model="password"
          />
            &nbsp;&nbsp;&nbsp;
          <p style="color:red" v-if="passwordReq==true">كلمة المرور مطلوبة</p>
          <br/>
          <br/>
          <button type="button" @click="resetPassword()" class="btn btn-info">
            اعادة تعيين
          </button>

          <br/>
          <br/>
          <br/>
           
      </div>
     </div>
     

  </form>
</template>

<script>
import {mapActions} from "vuex"; 
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
 

export default {
  name: "PasswordRest",
  components: {
    
  },
  data() {
    return {
      v$: useValidate(),

      email: "",
      emailCode: "",
      theEmailCode: "",
      sent: false,
      verfied: false,
      emailNotFound:true,
      codeNotCorrect:false,
      password:"",
      passwordReq:false
    };
  },
  validations() {
    return {
      email: { required, email },
    };
  },

  methods: {

    ...mapActions(['redirectTo']),

   async  sendEmailCode() {
      console.log("dfd");

      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("v");

         console.log("Form Validated Successfully");

        console.log("dddd");
        let result = await axios.get(
          `https://my-app-2-vfjnn.ondigitalocean.app/api/checkEmail/${this.email}`
        );
        //let result = await axios.get('http://localhost:3000/api/user/');

         
        console.log("dddd");
        console.log(result.data);
        console.log(result.status);
        if (result.status == 200 && result.data.length > 0) {
          
           this.emailNotFound = true;
          

          let result = await axios.get(`https://my-app-2-vfjnn.ondigitalocean.app/api/sendemailcode/${this.email}`);
        if (result.status == 200 && result.data.length > 0) {
             
            
          console.log(result.data);
          console.log(result.data[0].otpCode);
          this.emailCode=result.data[0].otpCode;
           console.log(this.emailCode);

           this.sent = true;
        }

           
          

        } else {

            // console.log("No User Found");
         this.emailNotFound = false;


        }
        ///

         
      }
    },

    checkEmailCode() {
      console.log("aa");

      console.log("v");

       

      if(this.theEmailCode==this.emailCode)
      {
          console.log("استكمل التسجيل");
           
           this.codeNotCorrect = false;
          this.verfied=true;
      }
      else
      {
          console.log("كود التحقق غير صحيح");
          this.codeNotCorrect = true;
      }
    },

   async resetPassword(){
        console.log("dfd");

      this.v$.$validate();
      if (this.password!="") {
        console.log("v");

         console.log("Form Validated Successfully");

        console.log("dddd");
        let result = await axios.put(`https://my-app-2-vfjnn.ondigitalocean.app/api/resetpassword/${this.email}` ,{
                   
                   password:this.password
               } );
         
        console.log("dddd");
        console.log(result.data);
        console.log(result.status);
         
        if (result.status == 200 ) {
          
          
            this.redirectTo({val:"Message4"});
           
          

        } else {

            console.log('error on reset password');

        }
        ///

         
      }
      else
      {
        this.passwordReq=true;
      }
    }
  },
};
</script>

<style>
</style>