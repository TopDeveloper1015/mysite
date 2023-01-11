<template>
  <div class="side-menu" style="position: sticky; top: 80px; z-index: 10">
    <h6 style="padding-right: 37px">خيارات اخرى</h6>
    <ul>
      
      
      <span> مستوى الدورة </span>
      <li v-for="index in 1" :key="index">
        <div
          style="display: block"
          class="first-list"
           
        >
          <input type="radio" id="html" name="fav_language2" value="HTML" /> 
          <label for="html">HTML</label><br />
           <input type="radio" id="css" name="fav_language2" value="CSS" /> 
          <label for="css">CSS</label><br />
          
          <input
            type="radio"
            id="javascript"
            name="fav_language2"
            value="JavaScript"
          />
           <label for="javascript">JavaScript</label>
      </div>
      </li>


      <span> مجال الدورة </span>
      <li v-for="index in 1" :key="index">
        <div
          style="display: block"
          class="first-list"
           
        >
          <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">HTML</label><br />
           <input type="radio" id="css" name="fav_language" value="CSS" /> 
          <label for="css">CSS</label><br />
          
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
           <label for="javascript">JavaScript</label>
           <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">HTML</label><br />
           <input type="radio" id="css" name="fav_language" value="CSS" /> 
          <label for="css">CSS</label><br />
          
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
           <label for="javascript">JavaScript</label>
           <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">HTML</label><br />
           <input type="radio" id="css" name="fav_language" value="CSS" /> 
          <label for="css">CSS</label><br />
          
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
           <label for="javascript">JavaScript</label>
           <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">HTML</label><br />
           <input type="radio" id="css" name="fav_language" value="CSS" /> 
          <label for="css">CSS</label><br />
          
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
           <label for="javascript">JavaScript</label>
           <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">HTML</label><br />
           <input type="radio" id="css" name="fav_language" value="CSS" /> 
          <label for="css">CSS</label><br />
          
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
           <label for="javascript">JavaScript</label>
           <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">HTML</label><br />
           <input type="radio" id="css" name="fav_language" value="CSS" /> 
          <label for="css">CSS</label><br />
          
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
           <label for="javascript">JavaScript</label>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AddingCourseSideList",
};
</script>

<style>
</style>