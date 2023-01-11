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
          
          <ArticleContentList/>
        </div>
  
  
  
        <div class="col-lg-8">
      
          <div class="content-view">
         
            <h2 style="  padding-right:5px ;    "> الانترنت و ساعي البريد  </h2>

         <div style="  margin-top:10px ">
          <span style="    font: normal normal 16px/1.4 'DroidArabicKufi-Regular',sans-serif,Arial;
} ; margin:10px ; font-size:13px ;    ">  تم الكتابة بواسطة : احمد العنزي</span> <br> 
     
         </div>
         <div style="margin-bottom:23px ;  ">
          <span style=" padding-right:10px ;   font: normal normal 16px/1.4 'DroidArabicKufi-Regular',sans-serif,Arial;
} ;   font-size:13px ;    ">   اخر تحديث : 2022-10-05</span> <br> 
     
         </div>
            <div class="content" id="first-subject-content">
              
              <SArticleContEdit/>
  
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
  import ArticleContentList from "../components/lists/articleContentList.vue";
  import Navbar from "../components/header/navbar.vue";
  import SArticleContEdit from "../components/contentSAtri/sArticleContEdit.vue"
 
  
  export default {
      name:"SArticleEdit"
      ,
      components:{
      ForYou,
      InfoRefrences,
      LessonEval,
      ArticleContentList,
      Navbar,
      SArticleContEdit
      
   
  } 
  , 
  methods:{
    
    
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