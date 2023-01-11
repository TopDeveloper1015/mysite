<template>
         <div>
  <h5>     <label style="margin-left: 30px ;  " for="lname ">      اسم رابط الدورة  </label>
    </h5>
    <input
      type="text"
      id="lname"
      name="refrence"
      style="width: 300px; height: 35px ; margin-bottom: 20px;"
    /> 
 
 
    <h5>     <label style="margin-left: 30px ;  " for="lname ">      اسم الدورة بالعربية </label>
    </h5>
    <input
      type="text"
      id="lname"
      name="refrence"
      style="width: 300px; height: 35px ; margin-bottom: 20px;"
    /> 

    <h5>     <label style="margin-left: 30px ;  " for="lname ">     اسم الدورة بالانجليزية </label>
    </h5>
    <input
      type="text"
      id="lname"
      name="refrence"
      style="width: 300px; height: 35px ; margin-bottom: 20px;"
    /> 

    <h5 style="margin-top:35px">     <label style="margin-left: 30px ;  " for="lname">        وصف الدورة </label>
     
       </h5>
       <textarea v-model="content"  id="textareaID" name="textareaName" rows="4"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
        
        </textarea>

       <h5 style="margin-top:35px">     <label style="margin-left: 30px" for="lname">       متطلبات الدورة </label>
  
       </h5>
       <textarea v-model="content"  id="textareaID" name="textareaName" rows="4"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
        
        </textarea>

        <h5 style="margin-top:35px">     <label style="margin-left: 30px" for="lname">     الوظائف من نفس مسار الدورة </label>
  
</h5>
<textarea v-model="content"  id="textareaID" name="textareaName" rows="4"      
 oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
 maxlength = "500"
 >
 
 </textarea>

     
 <h5 style="margin-top:35px">     <label style="margin-left: 30px" for="lname">       صورة الدورة </label>
  
</h5>
 
          <div class="p-4 text-center">

            <img src="@/assets/python.jpg" style="width:85% ; height: 260px; border-radius: 8px;"  />

              <div style="margin:29px"> 
                <input type="file" @change="onFileSelected">
              
             <button @click="onUpload">ارفق صورة </button>
              </div>

          </div>

    
          
          <br> 
        <div style="margin-top:35px"> 
        <label  style="margin-left:8px" for="fname">:سبب الاضافة </label>
        <input type="text" id="fname" name="editReason" style="width:350px ; height:25px">
 
        
  <br> 
   <div style="padding:15px;  "> 
    <input @click="print()" type="button" value=" ارسل ">
   </div>
  
 </div>

 

</div>
</template>

<script>
export default {
    name:"AddCourseInfo"
}
</script>

<style>

</style>