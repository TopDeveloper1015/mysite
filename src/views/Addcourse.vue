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
          
          <AddingCourseSideList/>
        </div>
  
  
  
        <div class="col-lg-8">
      
          <div class="content-view">
         
            <h2 style="  padding-right:5px ;    "> -- اضافة دورة جديدة </h2>

 
            <div class="content" id="first-subject-content">
              
              <AddCourseInfo/>
  
            </div>
  
          </div>
        
   
           </div>
  
           
      </div>
    </div>
    </div>
  </template>
  
  <script>
  
   
  import AddingCourseSideList from "../components/lists/addingcoursesideliset.vue";
  import Navbar from "../components/header/navbar.vue";
 import AddCourseInfo from "../components/addCourseInf.vue"
 
  
  export default {
      name:"AddCourse"
      ,
      components:{
      
        AddingCourseSideList,
      Navbar,
      AddCourseInfo
      
   
  } 
  , 
  methods:{
    
    
  }

  
  }
  </script>
  
  <style>
   
   
  
    
  
  
      h5{
          
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