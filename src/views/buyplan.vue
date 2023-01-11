<template>

<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
</head>
<div class="w3-light-grey w3-content" style="max-width:1600px">

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container">
    <a href="#"   @click="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
      <i class="fa fa-remove"></i>
    </a>
     
    <h4><b> اهلا بك</b></h4>
    <p class="w3-text-grey">  {{name}}</p>
  </div>
  <div class="w3-bar-block">
     
    <a     @click="toProfile()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-user fa-fw w3-margin-right"></i>الملف الشخصي</a> 
    
  </div>
  <div class="w3-panel w3-large">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" @click="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px">

  <!-- Header -->
  <header id="portfolio">
    <a href="#"><img src="/https://my-app-2-vfjnn.ondigitalocean.app/static/progate3.gif" style="width:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
    <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" @click="w3_open()"  ><i class="fa fa-bars"></i></span>
    <div class="w3-container">
      <br/>
       <span style="font-size:39px; font-wight:bold">بـرمجها</span> &nbsp;   <img src="https://my-app-2-vfjnn.ondigitalocean.app/static/barmijhalogo.jpg" width="77" />  
    <div class="w3-section w3-bottombar w3-padding-16">
         
       
       <button class="w3-button w3-black">  الصفحة الرئيسية</button>
       
      
    </div>
    </div>
  </header>
  
  
  
   

 <br/>
  <div class="w3-container w3-padding-large" style="margin-bottom:32px">
   
     
    
    <h4>خطة الاشتراك في منصة برمجها </h4>
    <!-- Pricing Tables -->
    <div class="w3-row-padding" style="margin:0 -16px" >
       
      
      <div  >
        <ul class="w3-ul w3-border w3-white w3-center ">
          <li class="w3-teal w3-xlarge w3-padding-32">المتقدم  </li>
          <li class="w3-padding-16">مدخل إلى عالم البرمجة</li>
          <li class="w3-padding-16">تعلم اساسيات البرمجة بلغة جافا بطريقة تشبه الألعاب ( المرحلة الاولى و الثانية) </li>
           
          <li class="w3-padding-16">
            <del><h3>29.00 ريال</h3></del>
            <h2>19.00 ريال</h2>
            <span class="w3-opacity">لمدة شهر ( لايوجد تجديد تلقائي)</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
    
             
          </li>
        </ul>
                 <div>
    <div class="d-flex align-items-center justify-content-center ;">
      <div style="width: 350px; justify-content: center">
        <br />
        <div ref="paypal"></div>
      </div>
    </div>
  </div>
      </div>
      
      
    </div>
  </div>
  
  <!-- Contact Section -->
  <div class="w3-container w3-padding-large w3-grey">
    <h4 id="contact"><b>تواصل معنا</b></h4>
    <div class="w3-row-padding w3-center w3-padding-24" style="margin:0 -16px">
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
        <p>barmijha@hotmail.com</p>
      </div>
      <div class="w3-third w3-teal">
        <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
        <p>Riyadh, KSA</p>
      </div>
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
        <p> barmijha@hotmail.com</p>
      </div>
    </div>
     
  </div>

  <!-- Footer -->
  <footer class="w3-container w3-padding-32 w3-dark-grey">
  <div class="w3-row-padding">
    <div class="w3-third">
      <h3>برمجها</h3>
      <p>لإقتراحاتكم و آرائكم التواصل معنا عبر وسائل التواصل , نسعد بإقتراحاتكم وآرائكم</p>
       
    </div>
  
   

    

  </div>
  </footer>
  
  <div class="w3-black w3-center w3-padding-24">Developed by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">برمجها</a></div>

<!-- End page content -->
</div>

 

</div>
 

	 
 
              
			 
 

 
 

   

  
</template>
 
<script>
import axios from "axios";
 
import { mapActions } from "vuex";

export default {
  name: "Buyplan",
  components: {
  
  },
  data() {
    return {
      loaded: false,
      paidFor: false,
      orderCreated: false,
      product: {
        price: 4.85,
        description: "خدمة برمجها لتعليم البرمجة",
        //img: "./assets/lamp.jpg"
      },
      isPlanPaid: 0,
      userName: "",
      name:" "
    };
  },
  mounted() {

    window.scrollTo(0,0);

    let user = localStorage.getItem("user-info");

    console.log(this.isPlanPaid);
    console.log(process.env.VUE_APP_paylid);

    if (user) {
      this.isPlanPaid = JSON.parse(user).is_plan_paid;
      this.userName = JSON.parse(user).user_name;
      this.name = JSON.parse(user).name;

      if (this.isPlanPaid == 1) {
        this.redirectTo({ val: "Profile" });

        console.log(this.isPlanPaid);
      }
      else if (this.name=="غير مسجل" || this.name==' ')  
       {
          this.redirectTo({ val: "Login" });

      } else {
        const script = document.createElement("script");
        script.src =
          "https://www.paypal.com/sdk/js?client-id="+process.env.VUE_APP_paylid;
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
      }
    } else this.redirectTo({ val: "Login" });
  },
  methods: {
    ...mapActions(["redirectTo"]),

     toProfile(){
     this.redirectTo({ val: "Profile" });
   }
   ,
    async updatePlaneStatus() {
      console.log("updated");
      let result = await axios.put(
        `https://my-app-2-vfjnn.ondigitalocean.app/api/updatplanstatus/${this.userName}`,
        {
          isPlanPaid: this.isPlanPaid,
        }
      );
      if (result.status == 200) {
        console.log("updated");

        const newUserInfo = {
          ...JSON.parse(localStorage.getItem("user-info")),
          is_plan_paid: this.isPlanPaid,
        };

        localStorage.setItem("user-info", JSON.stringify(newUserInfo));
      } else {
        console.log("error on updated");
      }
    },

    setLoaded() {
      this.loaded = true;
      try {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              this.orderCreated = true;
              return actions.order.create({
                purchase_units: [
                  {
                    description: this.product.description,
                    amount: {
                      currency_code: "USD",
                      value: this.product.price,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              this.paidFor = true;
              console.log(order);
               
              this.isPlanPaid = 1;
              this.updatePlaneStatus();
              console.log("تم الدفع");
              this.redirectTo({ val: "Message3" });
            },
            onError: (err) => {
              this.isError = true;
              console.log(err);
              console.log("هناك مشكلة ما");
              document.write("هناك مشكلة ما , لا يوجد رصيد كافي  ");
            },
          })
          .render(this.$refs.paypal);
      } catch (err) {
        console.log("يوجد مشكلة ");
      }

      // if(this.loaded==true && this.isError==false && this.paidFor==false);
      console.log("انه هنا ");
    },
  },
};
</script>

 <style  >
   
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
 
 
</style>
