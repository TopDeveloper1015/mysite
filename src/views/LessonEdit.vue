<template  >
    <div lang="ar" dir="rtl"> 
     <div class="container-fluid" style="background-color: #a22833;   position: sticky; top:0px ; z-index: 4000!important; margin-bottom:20px ; height: 60px; ">
      
      <div class="container"   >
       
         <Navbar/>
         
      </div>
   </div>
  
  
    <div class="container">
  
      <div class="row">
        <div class="col-lg-4  ">
          
          <ContentList/>
        </div>
  
  
  
        <div class="col-lg-8">
          <div class="content-view">
            <ul class="list-group list-group-horizontal"  >
              <li class="list-group-item list-choice" id="first-subject-choice"  @click="myFunction()"   > شرح الاول </li>
  
              <li class="list-group-item list-choice" id="second-subject-choice" style="border-left:#f0efed 2px solid" @click="myFunction2()"  > شرح الثاني </li>
            </ul>
            <div class="content" id="first-subject">
                
               <ParaSimContEdit/>
  
            </div>
            <div class="content" id="second-subject">
              <ParaAdvContEdit/>
  
            </div>
          </div>
          <div class="content-view">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item list-choice" id="first-s-cont-choice" @click="content1()"  >شرح الاول</li>
              <li class="list-group-item list-choice" id="second-s-cont-choice" @click="content2()">شرح الثاني </li>
              <li class="list-group-item list-choice" id="third-s-cont-choice" @click="content3()">امثلة الاول </li>
              <li class="list-group-item list-choice" id="forth-s-cont-choice" @click="content4()">امثلة الثاني </li>
              <li class="list-group-item list-choice" id="fifth-s-cont-choice" style="border-left:#f0efed 2px solid"  @click="content5()">فيديو </li>
            </ul>
  
            <div class="content" id="first-subject-content">
              
               
              <ExplainSimpleContentEdit/>
  
            </div>
            <div class="content" id="second-subject-content">
               <ExplainAdvancedContEdit/>
  
  
              
            </div>
            <div class="content" id="third-subject-content"> 
  
              <ExampleSimContEdit/>
  
            </div>
            <div class="content" id="forth-subject-content"> 
  
                <ExampleAdvContentEdit/>
  
            </div>
            <div class="content" id="fifth-subject-content">
                
              <VideoContEdit/>
              
            </div>
            
            
          </div>
        <InfoRefrences/>
        <LessonEval/>
  
        
            <ForYou/>
   
           </div>
  
           
      </div>
    </div>
    </div>
  </template>
  
  <script>
  
    import ForYou from "../components/lists/forYou.vue";
  import InfoRefrences from "../components/infoRefrences.vue";
  import LessonEval from "../components/lessonEval.vue";
  import ContentList from "../components/lists/contentList.vue";
  import Navbar from "../components/header/navbar.vue";
  import ParaSimContEdit from "../components/contentEdit/paraSimContEdit.vue";
  import ParaAdvContEdit from "../components/contentEdit/paraAdvContEdit.vue"
  import ExplainAdvancedContEdit from "../components/contentEdit/explainAdvancedContEdit.vue";
  import ExplainSimpleContentEdit from "../components/contentEdit/explainSimpleContentEdit.vue";
  import ExampleSimContEdit from "../components/contentEdit/exampleSimContEdit.vue";
  import ExampleAdvContentEdit from "../components/contentEdit/exampleAdvContEdit.vue";
  import VideoContEdit from "../components/contentEdit/videoContentEdit.vue";
  
  export default {
      name:"LessonEdit"
      ,
      components:{
      ForYou,
      InfoRefrences,
      LessonEval,
      ContentList,
      Navbar,
      ParaSimContEdit,
      ParaAdvContEdit,
      ExplainSimpleContentEdit,
      ExplainAdvancedContEdit,
      ExampleSimContEdit,
      ExampleAdvContentEdit,
      VideoContEdit
   
  } 
  , 
  methods:{
      myFunction() {
        document.getElementById("first-subject").style.display = "block";
        document.getElementById("second-subject").style.display = "none";
  
        document.getElementById("first-subject-choice").style.borderBottom = "#a22833 4px solid";
        document.getElementById("second-subject-choice").style.borderBottom = "#ddd 1px solid";
      },
         myFunction2() {
        document.getElementById("first-subject").style.display = "none";
        document.getElementById("second-subject").style.display = "block";
  
        document.getElementById("first-subject-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("second-subject-choice").style.borderBottom = "#a22833 4px solid";
      }
        ,
        content1() {
        document.getElementById("first-subject-content").style.display = "block";
        document.getElementById("second-subject-content").style.display = "none";
        document.getElementById("third-subject-content").style.display = "none";
        document.getElementById("forth-subject-content").style.display = "none";
        document.getElementById("fifth-subject-content").style.display = "none";
  
        document.getElementById("first-s-cont-choice").style.borderBottom = "#a22833 4px solid";
        document.getElementById("second-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("third-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("forth-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("fifth-s-cont-choice").style.borderBottom = "#ddd 1px solid";
      }
       ,
        content2() {
        document.getElementById("first-subject-content").style.display = "none";
        document.getElementById("second-subject-content").style.display = "block";
        document.getElementById("third-subject-content").style.display = "none";
        document.getElementById("forth-subject-content").style.display = "none";
        document.getElementById("fifth-subject-content").style.display = "none";
  
        document.getElementById("first-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("second-s-cont-choice").style.borderBottom = "#a22833 4px solid";
        document.getElementById("third-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("forth-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("fifth-s-cont-choice").style.borderBottom = "#ddd 1px solid";
      }
      ,
      
       content3() {
        document.getElementById("first-subject-content").style.display = "none";
        document.getElementById("second-subject-content").style.display = "none";
        document.getElementById("third-subject-content").style.display = "block";
        document.getElementById("forth-subject-content").style.display = "none";
        document.getElementById("fifth-subject-content").style.display = "none";
  
        document.getElementById("first-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("second-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("third-s-cont-choice").style.borderBottom = "#a22833 4px solid";
        document.getElementById("forth-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("fifth-s-cont-choice").style.borderBottom = "#ddd 1px solid";
      }
      ,
       content4() {
        document.getElementById("first-subject-content").style.display = "none";
        document.getElementById("second-subject-content").style.display = "none";
        document.getElementById("third-subject-content").style.display = "none";
        document.getElementById("forth-subject-content").style.display = "block";
        document.getElementById("fifth-subject-content").style.display = "none";
  
        document.getElementById("first-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("second-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("third-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("forth-s-cont-choice").style.borderBottom = "#a22833 4px solid";
        document.getElementById("fifth-s-cont-choice").style.borderBottom = "#ddd 1px solid";
      }
       , content5() {
        document.getElementById("first-subject-content").style.display = "none";
        document.getElementById("second-subject-content").style.display = "none";
        document.getElementById("third-subject-content").style.display = "none";
        document.getElementById("forth-subject-content").style.display = "none";
        document.getElementById("fifth-subject-content").style.display = "block";
  
        document.getElementById("first-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("second-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("third-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("forth-s-cont-choice").style.borderBottom = "#ddd 1px solid";
        document.getElementById("fifth-s-cont-choice").style.borderBottom = "#a22833 4px solid";
      }
  }
  }
  </script>
  
  <style>
   
   
   
  
      h4{
          
              border-right: 10px solid #a22833;    
               padding: 6px 8px; 
               text-align: right;
      }
  
     
   
  
      .content{
        background-color:#f0efed ; 
        padding: 6px 8px;
      }
  
      .content p {
        margin: 15px ;
        font-family: Verdana,sans-serif;
      }
  
  
      .content-view{
        margin-top: 40px;
         
      }
  
      #second-subject , #second-subject-content , #third-subject-content , #forth-subject-content , #fifth-subject-content{
        display: none;
      }
  
      
      .list-choice{
        cursor: pointer;
      }
      .list-choice:hover{
        background-color: rgb(239, 243, 244);
      }
  
     #first-subject-choice , #first-s-cont-choice{
      border-bottom: #a22833 4px solid;
     }
  </style>