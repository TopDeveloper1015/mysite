<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  
  <div id="body" style="  padding-left:200px; margin-right:50px ">
     <div class="row">
    <div class="col-8" style="text-aling: center">
      
      <div>
        <div class="row">
          <div class="col">
            <Search />
          </div>
        </div>
      </div>
    </div>
    <div class="col-4"> 
    
    </div>
  </div>
 
<div style="width:80% ; text-align:center ;  ">
   <hr size="8" width="70%"  color="#F1EFEF" style="text-align:left">
 </div>
 
 <div style="width:80% ; text-align:right ;   ">
  <div style="display: flex; justify-content: flex-end">
    <div class="col-lg-3 col-6"  >
       <a :href="`../${this.$route.params.courseName}/${nextLesson}`">web pages</a>
    </div>
     

    <div class="col-lg-3 col-6" >
       الدرس السابق
    </div>
     
  </div>
</div>


   

  <div id="explain" style="width: 76%; margin: 20px">
    <div style="display: flex; justify-content: flex-end">
      <!--Grid column-->
      <div id="list">
        <p style="font-size: 25px">{{lessonNameAr}}</p>
        <ul class="list-group list-group-horizontal">
          <li
            class="list-group-item"
            style="background-color: #cad0e0"
            @click="show('advanced')"
            id="advanced"
          >
            &nbsp; &nbsp;
            <span style="color: white; font-wight: bold">متقدم</span> &nbsp;
            &nbsp;
          </li>

          <li
            class="list-group-item"
            style="background-color: #91b3fa"
            @click="show('simple')"
            id="simple"
          >
            &nbsp; &nbsp;
            <span style="color: white; font-wight: bold">مبسط</span> &nbsp;
            &nbsp;
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>

    <div style="background-color: #f1efef">
      <div
        style="
          display: flex;
          justify-content: flex-end;
          margin: 20px;
          padding: 10px;
        "
      >
        <div id="allContent"></div>
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end">
      <!--Grid column-->
      <div>
        <ul class="list-group list-group-horizontal">
          <li
            class="list-group-item"
            style="background-color: #cad0e0"
            @click="show2('advancedPic')"
            id="advancedPic"
          >
            &nbsp; &nbsp;
            <span style="color: white; font-wight: bold">صور متقدمة</span>
            &nbsp; &nbsp;
          </li>
          <li
            class="list-group-item"
            style="background-color: #cad0e0"
            @click="show2('advancedExample')"
            id="advancedExample"
          >
            &nbsp; &nbsp;
            <span style="color: white; font-wight: bold">امثلة متقدمة </span>
            &nbsp; &nbsp;
          </li>
          <li
            class="list-group-item"
            style="background-color: #cad0e0"
            @click="show2('simplePic')"
            id="simplePic"
          >
            &nbsp; &nbsp;
            <span style="color: white; font-wight: bold">صور مبسطة </span>
            &nbsp; &nbsp;
          </li>
          <li
            class="list-group-item"
            style="background-color: #91b3fa"
            @click="show2('simpleExample')"
            id="simpleExample"
          >
            &nbsp; &nbsp;
            <span style="color: white; font-wight: bold">امثلة مبسطة </span>
            &nbsp; &nbsp;
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>
  </div>
  <div style="background-color: #f1efef; width: 76%; margin: 10px" id="more">
    <div style="display: flex;
          justify-content: flex-end; margin:5px ; padding:20px" id="allContent2"></div>
  </div>

<div style="width:80% ; text-align:right ; margin:20px  ">
  <div style="display: flex; justify-content: flex-end">
    <div class="col-lg-3 col-6"  >
       <a :href="`../${this.$route.params.courseName}/${nextLesson}`">web pages</a>
    </div>
     

    <div class="col-lg-3 col-6" >
       الدرس السابق
    </div>
     
  </div>
</div>
 <div style="width:80% ; text-align:right ; margin-top:30px  ">
   
  <div style="display: flex; justify-content: flex-end">
   
    <div class="col-lg-3 col-6" style="margin:60px"  >
      <span style="font-size:19px ; background-color:#e4e8f0 ;   ">هل كان الدرس مفيدا؟ </span> <br/><br/>
      <span style="font-size:19px ; color:green; border:2px solid green;border-radius:50%; padding:1px ; margin:2px">نعم </span>
       <span style="font-size:19px ; color:gray; border:2px solid gray;border-radius:50%; padding:2px ; margin:2px">لا </span>
    </div>

  </div>
   </div>

   <Foryou/>
  
  <Footer1 />
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
 
import Search from "../components/lists/search.vue";
import Footer1 from "../components/footer/footer1.vue";
import Foryou from "../components/lists/forYou.vue";

export default {
  name: "Course",
  data() {
    return {
      userName: "",
      name: "غير مسجل",
      isPlanPaid: 0,
      artical: "adfdf <h1> dfdf</h1> web pagesez ",
      simple: true,
      mid: false,
      advanced: false,
      simpleExample: true,
      simplePic: false,
      advancedExample: false,
      advancedPic: false,
      simplePicContent: " ",
      lesson: [],
      lessonName: "",
      previousLesson: "",
      nextLesson: "",
      simpleCont: "",
      advancedCont: "",
      simpleExampleCont: "",
      advancedExampleCont: "",
      simplePicCont: "",
      advancedPicCont: "",
       lessonNameAr: "",
       courseContent:[]
    };
  },
  components: {
    
    Search,
    Footer1,
    Foryou
  },

  mounted() {
    console.log(this.$route.params.courseName);
    console.log(this.$route.params.courseLesson);
    this.getLesson();
    this.getCourseContent();
    console.log('dfddfdfd');
    console.log(this.lessonName);

    if (this.isMobile()) {
      document.getElementById("explain").style.width = "90%";
      document.getElementById("more").style.width = "90%";
      document.getElementById("body").style.paddingLeft = "1px"
      document.getElementById("body").style.marginRight = "1px";
    }

    
      

    // document.write("lkdjfldkfj<h1>dfdf</h1>");
    // document.getElementById('id').innerHTML="lkdjfldkfj<h1 style='color:red'>java</h1>  ";
    let user = localStorage.getItem("user-info");

    if (user) {
      this.isPlanPaid = JSON.parse(user).is_plan_paid;
      this.userName = JSON.parse(user).user_name;
      this.name = JSON.parse(user).name;
    }

    this.analyze();

    document.title = " برمجها";

    console.log("kkk");
  },
  beforeUpdate(){
     document.getElementById("allContent").innerHTML =this.simpleCont;
     document.getElementById("allContent2").innerHTML =this.simpleExampleCont;
  }
  ,
  methods: {
    ...mapActions(["redirectTo"]),

    w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
    },
    w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
    },
    async analyze() {
      var digits = "0123456789";
      let OTP = "";
      for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }

      let result = await axios.post(
        "https://my-app-2-vfjnn.ondigitalocean.app/api/adduserinfo",
        {
          name: "homePage",
          userName: OTP,
          email: "test",
          password: "test",
        }
      );
      if (result.status == 200) {
        console.log("scuucessfully");
      }
    },

    toProfile() {
      this.redirectTo({ val: "Profile" });
    },
    toLogin() {
      this.redirectTo({ val: "Login" });
    },
    checkWord() {
      var str = this.artical;
      console.log(str);
      var check = str.includes("web pages");
      if (check) {
        document.getElementById("id").innerHTML =
          "<a href='../program-5/5'>web pages</a>";
      }
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    show(type) {
      if (type == "simple") {
        document.getElementById("simple").style.backgroundColor = "#91b3fa";
        document.getElementById("advanced").style.backgroundColor = "#cad0e0";

        document.getElementById("allContent").innerHTML =this.simpleCont;
           
      } else if (type == "advanced") {
        document.getElementById("simple").style.backgroundColor = "#cad0e0";
        document.getElementById("advanced").style.backgroundColor = "#91b3fa";

        document.getElementById("allContent").innerHTML = this.advancedCont;
        
      }
    },
    show2(type) {
      if (type == "simpleExample") {
        document.getElementById("simpleExample").style.backgroundColor =
          "#91b3fa";
        document.getElementById("simplePic").style.backgroundColor = "#cad0e0";
        document.getElementById("advancedExample").style.backgroundColor =
          "#cad0e0";
        document.getElementById("advancedPic").style.backgroundColor =
          "#cad0e0";

        document.getElementById("allContent2").innerHTML =this.simpleExampleCont;
      
      } else if (type == "simplePic") {
        document.getElementById("simpleExample").style.backgroundColor =
          "#cad0e0";
        document.getElementById("simplePic").style.backgroundColor = "#91b3fa";
        document.getElementById("advancedExample").style.backgroundColor =
          "#cad0e0";
        document.getElementById("advancedPic").style.backgroundColor =
          "#cad0e0";

         document.getElementById("allContent2").innerHTML =this.simplePicCont;
         
      } else if (type == "advancedExample") {
        document.getElementById("simpleExample").style.backgroundColor =
          "#cad0e0";
        document.getElementById("simplePic").style.backgroundColor = "#cad0e0";
        document.getElementById("advancedExample").style.backgroundColor =
          "#91b3fa";
        document.getElementById("advancedPic").style.backgroundColor =
          "#cad0e0";

        document.getElementById("allContent2").innerHTML =this.advancedExampleCont;
           
      } else if (type == "advancedPic") {
        document.getElementById("simpleExample").style.backgroundColor =
          "#cad0e0";
        document.getElementById("simplePic").style.backgroundColor = "#cad0e0";
        document.getElementById("advancedExample").style.backgroundColor =
          "#cad0e0";
        document.getElementById("advancedPic").style.backgroundColor =
          "#91b3fa";

         
            document.getElementById("allContent2").innerHTML =this.advancedPicCont;
      }
    },
    async getLesson() {
      console.log(".");
      let result = await axios.get(
        `http://localhost:3000/api/lesson/${this.$route.params.courseName}/${this.$route.params.courseLesson}`
      );
      this.lesson = result.data;
      console.log("...");
       


      this.lessonName = this.lesson[0].lesson_name;
      this.previousLesson = this.lesson[0].previous_lesson;
      this.nextLesson = this.lesson[0].next_lesson;
      this.simpleCont = this.lesson[0].simpleCont;
      this.advancedCont = this.lesson[0].advancedCont;
      this.simpleExampleCont = this.lesson[0].simpleExample;
      this.advancedExampleCont = this.lesson[0].advancedExample;
      this.simplePicCont = this.lesson[0].simplePic;
      this.advancedPicCont = this.lesson[0].advancedPic;
      this.lessonNameAr=this.lesson[0].lesson_name_ar;
      
    },

      async getCourseContent() {
      console.log(".");
      let result = await axios.get(
        `http://localhost:3000/api/coursecontent/${this.$route.params.courseName}`
      );
      this.courseContent = result.data;
      console.log(this.courseContent);
       
 
      
    },
  },
};
</script>

 <style>
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

.dot {
  height: 48px;
  width: 120px;
  background-color: #e0dfda;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
  border: 2px;
}
p {
  padding: 10px;
}

body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}

form.example input[type="text"] {
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
  background: #2196f3;
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

li {
  cursor: pointer;
}
</style>
  