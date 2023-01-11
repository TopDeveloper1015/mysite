<template>
    <div lang="ar" dir="rtl">
      <div
        class="container-fluid"
        style="
          background-color: #a22833;
          position: sticky;
          top: 0px;
          z-index: 4000 !important;
          margin-bottom: 20px;
          height: 60px;
        "
      >
        <div class="container">
          <Navbar2 />
        </div>
      </div>
  
      <div class="container">
        <div class="row">
           
         <div class="col-lg-4"  >
         
   
           
          <FilterList/>
         </div>
  
          <div class="col-lg-8  "  >
          
              
  
               <h4 style="margin-top:25px" >  المقالات القصيرة    </h4>
               <div class="row py-3 ">
                  
                    <ShortArtiList/>
                  
                   
                  
               </div>
  
                
  
   
  
          </div>
  
          
  
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar2 from "../components/header/navbar2.vue";
 
  import FilterList from "../components/lists/filterList.vue";
  import ShortArtiList from "../components/lists/shortArticleList.vue";
   
  export default {
    name: "SArticles",
    components: {
      Navbar2,
  
      FilterList,
      ShortArtiList,
       
      
  },
  };
  </script>
  
  <style>
  .list-choice {
    cursor: pointer;
    margin-left: 2px;
  }
  .list-choice:hover {
    background-color: rgb(239, 243, 244);
  }
  
  .filters {
    padding: 10px 10px;
    color:#333;
     width:100%;
    background-color: red;
  }
  
  
  .filters span {
      width:auto
  }
  
  
  
  
  .skills-hub-unit--with-banner-wrapper--1r9bj .udlite-tabs-nav-buttons {
      box-shadow: none;
  }
  
  
  .tabs--tabs-nav-buttons--1F1Dw {
      box-shadow: inset 0 -1px 0 0 #d1d7dc;
      position: relative;
  }
  
  
  .carousel--container--WjDNA {
      position: relative;
  }
  
  .carousel--grid--21hQz {
      display: grid;
      grid-auto-columns: max-content;
      grid-auto-flow: column;
      grid-gap: 1.6rem;
  }
  
  .carousel--scroll-lock--31wDL {
      overflow-x: hidden;
  }
  
  </style>