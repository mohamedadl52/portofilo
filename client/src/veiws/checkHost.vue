<template>
    <div>
        <div class="container">
            <h1 class="text-xl text-center mt-10">فحص الهوستات</h1>
            <p class="text-red-400 text-right">يجب الفحص من غير انترنت  قم بالتحويل للشريح الخاليه من البيانات * </p>
            <p class="text-red-400 text-right">الصق اي كلام سنقوم باستخراج الهوستات وفحصهم *</p>
        </div>
         <div>
             <textarea id="" class="w-1/2 block mx-auto border-2 border-gray-700 mt-10 h-64" name="" cols="30" rows="10">jkhsdjkbds</textarea>
         </div>
           <div class="text-center mt-2">
               <input type="submit" value="فحص" class="bg-red-500 p-3 rounded-lg  text-white text-xl" @click="getRequest()">
           </div>
        </div>
</template>
<script>
 import axios from 'axios'
 export default {
    data(){
   return {

   }
    } ,
    methods : {
        async getRequest(){
            await axios.post('http://localhost:8081/host' , {name : "mohamed.com ggogle.com"}).then((data)=>{
               console.log(data.data)
            })
        }
    } 
 }
</script>