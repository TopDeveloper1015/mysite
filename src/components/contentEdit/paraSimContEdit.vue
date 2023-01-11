<template>
    <div>
     <h4>المتغيرات</h4>
              
                

        <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
           
        </textarea>

        



        
 </div>
  
     <div> 
        <label  style="margin-left:8px" for="fname">:سبب التعديل </label>
        <input type="text" id="fname" name="editReason" style="width:350px ; height:25px">
   
 <br> 
 <label style="margin-left:30px" for="lname"> :الـمرجع</label>
  <input   type="text" id="lname" name="refrence" style="width:350px ; height:25px">
   
  <br> 
   <div style="padding:15px;  "> 
    <input @click="print()" type="button" value=" ارسل ">
   </div>
     
 </div>

 
  </template>
  
  <script>
 
  export default {
     name:"ParaSimContEdit"
     ,
     

    mounted(){

          document.getElementById("textareaID").value=this.content;
    }
    ,
     data(){
        return{
       
        userName:"",
        content:"ahmed is here ahmed is here ahmed is here ahmed is here ahmed is hereahmed is here ahmed is hereahmed is here ahmed is here ahmed is here ahmed is here ahmed is here ahmed is here ahmed is here ahmed is here",
        editReason:"",
        refrence:"",

        }
        
    } 
  
    ,
     methods:{
        print(){
            var a = document.getElementById("cont").innerHTML;
            document.write(a);
        }
     }
  }
  </script>
  
  <style>
  
  #contentInput {
        margin: 15px ;
        font-family: Verdana,sans-serif;
        height:200px;
        width:400px;
      }

#textareaID{
     
    resize: none;
    width:96%
}
 

  </style>