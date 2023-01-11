<template>
   
 <head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
    
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 </head>
  

 
 
 <div class="row">
  <div class="col-8" style="text-aling:center">
    <div > 
      <div class="row">
        <div class="col">
          
          <Search/>
           
        </div>
      </div>
    </div>
  
 
 

  </div>
  <div class="col-4">xxx</div>
</div>

  
 <div  class="container">
    
    <div class="row">
 
    <div class="col">
   <div style="text-align:left ;   ">
     
 
  <div class="dot"><p>ما قبل البرمجة</p></div>
    <div class="dot"><p>lkjdsflkjsl</p></div>
     <div class="dot"><p>lkjdsflkjsl</p></div>
     <div class="dot"><p>ما قبل البرمجة</p></div>
    <div class="dot"><p>lkjdsflkjsl</p></div>
     <div class="dot"><p>lkjdsflkjsl</p></div>
</div>
    </div>
    </div>
  
  <a href="../Program/1">d</a>
 <p id="id"> </p>
  
<button class="openbtn" @click="checkWord()"  > تحقق كلمة</button> 
 </div>

 <div style="width:80% ; text-align:center ;  ">
   <hr size="8" width="70%"  color="#F1EFEF" style="text-align:left">
 </div>
    
      <div style="width:75%; color:red ; margin:50px">
     
     <div  v-if="course.length > 0" class="row">
  
   <div class="col-lg-3 col-6" v-for="(theCourse, i) in course" :key="i"  >
     
       <div style="padding:7px ; ">
         <img src="https://my-app-2-vfjnn.ondigitalocean.app/static/person.jpg" style="width:100%;" class="w3-round">
          <a :href="`../course/${theCourse.course_name}/${theCourse.first_lesson}`">{{theCourse.course_name_ar}}</a><br/>
          {{theCourse.course_desc}}<br/>
          </div>
    </div>

    
 
  
 
     </div>
 <div  v-else>
      لا يوجد
   </div>
   </div>
  
 
	 <Footer1/>
 
              
			 
 

 
   
</template>

<script>

 
 
import axios from "axios";
 import { mapActions } from "vuex";
 
import Search from "../components/lists/search.vue"
import Footer1 from "../components/footer/footer1.vue"
export default {
  name: "Home2",
  data(){
    return{
     userName:"",
     name:"غير مسجل",
     isPlanPaid:0 ,
     artical:"adfdf <h1> dfdf</h1> web pagesez ",
     course:[]
       
    }
  },
  components:{
     
     Search,
     Footer1
    
  },
  
    mounted(){
 
      this.getCourses();
       
      // document.write("lkdjfldkfj<h1>dfdf</h1>");
       document.getElementById('id').innerHTML="lkdjfldkfj<h1 style='color:red'>java</h1>  ";
    let user = localStorage.getItem("user-info");
 

    if (user) {
      this.isPlanPaid = JSON.parse(user).is_plan_paid;
      this.userName = JSON.parse(user).user_name;
      this.name = JSON.parse(user).name;
    }


      this.analyze();

      document.title = " برمجها"; 
    
    console.log('kkk');
    
  },
  methods:{

    ...mapActions(["redirectTo"]),

w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
,

w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
,
     async analyze(){

     var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }

      let result = await axios.post('https://my-app-2-vfjnn.ondigitalocean.app/api/adduserinfo' ,{
                   name:'homePage',
                   userName:OTP,
                   email:'test',
                   password:'test'
               } );
               if(result.status == 200){
                   console.log("scuucessfully");

               }
    }
    

   ,
   toProfile(){
     this.redirectTo({ val: "Profile" });
   }
   ,
   toLogin(){
  this.redirectTo({ val: "Login" });
}
,
checkWord(){

  var str = this.artical;
  console.log(str);
            var check = str.includes("web pages");
            if(check)
            {
              document.getElementById("id").innerHTML="<a href='../program-5/5'>web pages</a>"
            }
             
},

  
 async getCourses() {
      let result = await axios.get(
        "https://my-app-2-vfjnn.ondigitalocean.app/api/courses"
      );
      this.course = result.data;
      console.log("...");
      console.log(this.course);
    },


  }
,

 
  
};
</script>

 <style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}

 

.dot {
  height: 48px;
  width: 120px;
  background-color:#e0dfda;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
  border: 2px;
}
p{
  padding:10px;
}

body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}

form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}

</style>
  