<template>
 
  <form @click.prevent>
     <h1>تسجيل الدخول</h1>
     <br/>
    <div class="row g-3 aling-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="ادخل البريد الالكتروني"
          v-model="state.email"
        />
        <span class="error-feedback" v-if="v$.email.$error"> البريد الالكتروني مطلوب</span>
      </div>
    </div>
    <br />

    <div class="row g-3 aling-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="password"
          class="form-control"
          placeholder="ادخل كلمة المرور"
          v-model="state.pass"
        />
        <span class="error-feedback" v-if="v$.pass.$error"> كلمة المرور مطلوبة</span>
      </div>
    </div>
    <br />
    <div class="row g-3 aling-items-center">
      <div class="col-auto d-block mx-auto">
           
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <button type="submit" @click="userLogin()" class="btn btn-info">
          سجل الدخول
        </button>
        <br/>
        <br/>

        <button
          type="button"
          @click="redirectTo({ val: 'PasswordRest' })"
            class="btn btn-link"
        >
          اعادة تعيين كلمة المرور
        </button>
        
        <button
          type="button"
          @click="redirectTo({ val: 'SignupEmail' })"
          class="btn btn-link"
        >
          تسجيل مستخدم جديد 
        </button>
         
        
         
         <br/>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        {{userNotFoundErr}}
      </div>
     
    </div>
  </form>
</template>



<script>
import axios from "axios";
import { mapActions } from "vuex";
import useValidate  from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";
 
 

export default {
  components: { 
    
    },
  name: "Login",
  //compistion API
  setup() {
    //data
    const state = reactive({
      pass: "",
      email: "",
    });
    //validations
    const rules = computed(() => {
      return {
        email: { required, email },
        pass: { required },
      };
    });

    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  data() {
    return {
      userNotFoundErr:"",
      name:"غير مسجل"
    };
  },

  mounted() {
    console.log('we are here 2');
    let user = localStorage.getItem("user-info");
     if(user){
             this.userName = JSON.parse(user).user_name;
      this.name = JSON.parse(user).name;
             
        }

        if(this.name!="غير مسجل")
        {
            this.redirectTo({val:"Home"});
        }
  },
  methods: {
    //signUpPage(){
    //  this.$router.push({name:"Signup"});
    // }

    ...mapActions(["redirectTo"]),

    async userLogin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Form Validated Successfully");

        console.log("dddd");
        let result = await axios.get(
          `http://localhost:3000/api/user/${this.state.email}/${this.state.pass}`
        );
        //let result = await axios.get('http://localhost:3000/api/user/');

         
        console.log("dddd");
        console.log(result.data);
        console.log(result.status);
        if (result.status == 200 && result.data.length > 0) {
          //console.log("logged in ");
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.redirectTo({val:"Home"});
        } else {
         // console.log("No User Found");
         this.userNotFoundErr = "البريد الالكتروني أو كلمة المرور غير صحيح";
        }

      } else {
        console.log("Form vlidation Failed");
      }
    },
  },
};
</script>


<style lang="scss" scoped >
    .error-feedback{
        color:red;
        font-size: 0.95em;
    }

</style>