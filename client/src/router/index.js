import {createRouter , createWebHistory} from 'vue-router'
import Home from '../veiws/HOme.vue'
import works from '../veiws/worKs.vue'
import about from '../veiws/abOut.vue'
import contact from '../veiws/contactUS.vue'



//  routs for projects 
import project1 from '../veiws/projects/proJect1.vue'
import project2 from '../veiws/projects/proJect2.vue'
import project3 from '../veiws/projects/proJect3.vue'
import project4 from '../veiws/projects/proJect4.vue'
import project5 from '../veiws/projects/proJect5.vue'
import project6 from '../veiws/projects/proJect6.vue'
import project7 from '../veiws/projects/proJect7.vue'

const router = createRouter({
    history : createWebHistory() , 
    routes : [
        {path:'/' , name : 'Home' , component : Home } ,
        {path:'/works' , name : 'works' , component : works},
        {path:'/about' , name : 'about' , component : about}  ,
        {path:'/contact' , name : 'contact' , component : contact}  ,
     
        {path:'/projects/project1' , name : 'project1' , component : project1} ,
        {path:'/projects/project2' , name : 'project2' , component : project2} ,
        {path:'/projects/project3' , name : 'project3' , component : project3} ,
        {path:'/projects/project4' , name : 'project4' , component : project4} ,
        {path:'/projects/project5' , name : 'project5' , component : project5} ,
        {path:'/projects/project6' , name : 'project6' , component : project6} ,
        {path:'/projects/project7' , name : 'project7' , component : project7} ,
    ]
})

export default router
