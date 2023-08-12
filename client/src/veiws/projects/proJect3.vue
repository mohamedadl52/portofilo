<template>
    <p class="text-xl pl-10 py-2 bg-blue-500 text-white uppercase text-center mb-4">desgin 1</p>
  <loginOne></loginOne>
 
 <p class="text-xl pl-10 py-2 bg-blue-500  uppercase text-center text-white mb-2 mt-4">desgin2</p>
  <loginTow />
 <p class="text-xl pl-10 py-2 bg-blue-500  uppercase text-center text-white mb-2 mt-4">desgin3</p>
  <loginThree />
</template> 
 
 <script>
 import loginOne from '../../components/projects/project3/loginOne.vue';
 import loginTow from '../../components/projects/project3/loginTow.vue';
 import loginThree from '../../components/projects/project3/loginThree.vue';
 export default {
    components :{
       loginOne , 
       loginTow ,
       loginThree
    }
 }
 </script>
 
