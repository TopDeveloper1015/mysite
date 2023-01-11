<template>
     <div class="side-menu" style="position: sticky; top: 80px; z-index: 10">
    <h5 style="padding-right: 37px">تصفية البحث</h5>
    <ul>
      <li v-for="index in 2" :key="index">
        <a
          style="display: block"
          class="first-list"
          data-toggle="collapse"
          :href="'#link' + index"
          role="button"
          aria-expanded="false"
          :aria-controls="'link' + index"
        >
          <span>  المستوى  </span>
        </a>
       
      </li>
       
    </ul>
    
  </div>
</template>

<script>
export default {
    name:"ArticleConList"
}
</script>

<style>
ul {
  list-style: none;
  padding-right: 0px;
}

.first-list {
  background-color: #f0efed;
  margin: 0.2rem;
  padding: 10px;
  padding-right: 35px;
  cursor: pointer;
}

li span {
  color: black;
  font-size: 18px;
}

.second-list {
  background-color: white;
  border: #f0efed 1px solid;
  margin-right: 20px;
  margin-left: 10px;
  padding: 4px;
  padding-right: 35px;
  cursor: pointer;
}

.third-list {
  background-color: white;
  border: #f0efed 1px solid;
  
  border-bottom:#a22833 3px solid;
  margin-right: 21px;
  margin-left: 10px;
  padding: 4px;
  padding-right: 75px;
  cursor: pointer;
}
</style>