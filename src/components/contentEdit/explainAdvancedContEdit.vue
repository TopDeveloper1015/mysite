<template>
      <div>
     <h4>شرح</h4>
              
                

        <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
            dfd
        </textarea>

    
 </div>
 <div class="p-4 text-center">

<img src="@/assets/python.jpg" style="width:100%" />
</div>

<div>
   
              
                

        <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
            dfd
        </textarea>

    
 </div>

 <div>
     <h4 style="margin-top:10px ; margin-bottom:20px ;">استكمال....</h4>
              
                

        <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
            dfd
        </textarea>

    
 </div>

 <div class="p-4 text-center">

<img src="@/assets/python.jpg" style="width:100%" />
</div>

<div>
   
              
                

        <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
            dfd
        </textarea>

    
 </div>

 <div style="margin-top:60px"> 
        <label  style="margin-left:8px" for="fname">:سبب التعديل </label>
        <input type="text" id="fname" name="editReason" style="width:350px ; height:25px">
 
  <br> 
   <div style="padding:15px;  "> 
    <input @click="print()" type="button" value=" ارسل ">
   </div>
     
 </div>

</template>

<script>
export default {
    name:"ExplainAdvancedContEdit"
    ,
    mounted(){

document.getElementById("textareaID").value=this.content;
}
,
data(){
return{

userName:"",
content:"ahmed is here",
editReason:"",
 

}

}
}
</script>

<style>

</style>