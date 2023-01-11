<template>
    <div>
      <h4>الفيديو</h4>
      <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
        
        </textarea>

  
              <div class="p-4 text-center">
  
                  <iframe width="100%" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
  </iframe>
  
              </div>
  
              <textarea v-model="content"  id="textareaID" name="textareaName" rows="7"      
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength = "500"
        >
        
        </textarea>
    </div>
  </template>
  
  <script>
  export default {
      name:"VideoContEdit"
  }
  </script>
  
  <style>
  
  </style>