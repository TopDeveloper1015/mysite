import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Buyplan from "../views/buyplan.vue"
import SignupEmail from "../views/SignupEmail.vue"
import PasswordRest from "../views/PasswordRest.vue"
import UseTerms from "../views/UseTerms.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import ContactUs from "../views/contactUs.vue"
import AboutUs from "../views/AboutUs.vue"
import Course from "../views/Course.vue";
import Lesson from "../views/Lesson.vue"
import LessonEdit from "../views/LessonEdit.vue"
import SArticles from "../views/SArticles.vue"
import Courses from "../views/Courses.vue"
import AddCourses from "../views/Addcourse.vue"
import Word from "../views/Word.vue"
import SArticle from "../views/SArticle.vue"
import SArticleEdit from "../views/SArticleEdit.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sign-up:/email",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/sign-up",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/sign-up-email",
    name: "SignupEmail",
    component: SignupEmail,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/password-rest",
    name: "PasswordRest",
    component: PasswordRest,
  },
 
   
 
  {
    path: "/user-profile",
    name: "Profile",
    component: Profile,
  },

   

  
 
  {
    path: "/buy-plan",
    name: "Buyplan",
    component: Buyplan,
  },

  {
    path: "/terms-use",
    name: "UseTerms",
    component: UseTerms,
  },
   
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },

  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },

  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },

  {
    path: "/course/:courseName/:courseLesson",
    name: "Course",
    component: Course,
  },

  {
    path: "/lesson",
    name: "Lesson",
    component: Lesson,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/add-course",
    name: "AddCourses",
    component: AddCourses,
  },
  {
    path: "/sarticles",
    name: "SArticles",
    component: SArticles,
  },
  {
    path: "/lesson-edit",
    name: "LessonEdit",
    component: LessonEdit,
  },
  {
    path: "/sarticle",
    name: "SArticle",
    component: SArticle,
  },

  {
    path: "/sarticle-edit",
    name: "SArticleEdit",
    component: SArticleEdit,
  },
  {
    path: "/word",
    name: "Word",
    component: Word,
  }

 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
