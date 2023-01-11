<template>
  <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light pull-right" style="padding:5px; margin:0px"  >
        <a style="color:white ; font-size: 22px;" class="navbar-brand" href="#">  قوس  </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarNavDropdown" style="background-color:#a22833">
          <ul class="navbar-nav"  >
            <li class="nav-item active">
              <a style="color:white ; font-size: 17px; margin-left:4px" class="nav-link" href="#">الدورات <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a style="color:white ;font-size: 17px; margin-left:4px" class="nav-link" href="#">القاموس البرمجي</a>
            </li>
            <li class="nav-item">
              <a style="color:white ; font-size: 17px; margin-left:4px" class="nav-link" href="#">المقالات الطويلة</a>
            </li>
            <li class="nav-item">
              <a style="color:white ; font-size: 17px; margin-left:4px" class="nav-link" href="#">المقالات القصيرة</a>
            </li>
            
           
             
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                المزيد
              </a>
              <div class="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink" style="background-color:#a22833"  >
                <a class="dropdown-item" style="color:black; font-size:17px ; margin-bottom: 10px;" href="#">الاختبارات الطويلة</a>
                <a class="dropdown-item" style="color:black; font-size:17px ; margin-bottom: 10px;" href="#">الاختبارات القصيرة  </a>
                <a class="dropdown-item" style="color:black; font-size:17px; margin-bottom: 10px;" href="#">مرجع الشفرات البرمجية</a>
                <a class="dropdown-item" style="color:black; font-size:17px; margin-bottom: 10px;" href="#">مشاريع و واجبات    </a>
              </div>
            </li>
            <li class="nav-item">
              <a style="color:white ; font-size: 15px; margin-right:10px" class="nav-link" href="aaaa">تسجيل الدخول  </a>
            </li>
          </ul>
        </div>
      </nav>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style>

</style>