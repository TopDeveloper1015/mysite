<template>
         
         <div>
  <h4>     <label style="margin-left: 30px" for="lname">        عنوان الفقرة   </label>
    <input
      type="text"
      id="lname"
      name="refrence"
      style="width: 300px; height: 35px"
    />  </h4>

    <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
        
        </textarea>
          <div class="p-4 text-center">

            <img src="@/assets/python.jpg" style="width:85% ; height: 260px; border-radius: 8px;"  />

              <div style="margin:29px"> 
                <input type="file" @change="onFileSelected">
              
             <button @click="onUpload">ارفق صورة </button>
              </div>

          </div>

          <h4>     <label style="margin-left: 30px" for="lname">   عنوان الفقرة</label>
    <input
      type="text"
      id="lname"
      name="refrence"
      style="width: 300px; height: 35px"
    />  </h4>
    <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
        
        </textarea>

        <div style="margin-top:35px"> 
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

 

</div>
</template>

<script>
export default {
    name:"SArticleContEdit"
    ,
    data() {
        return{
             selectedFile:null
        }
    }
    ,
    methods:{
        onFileSelected(event){
            this.selectedFile=event.target.files[0];
        }
        ,
        onUpload(){

        }

        
    }
}
</script>

<style>

</style>