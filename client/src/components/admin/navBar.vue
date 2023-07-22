<template>
            <div  :class=" news ? 'lg:w-1/6 w-1/2 ' : 'w-24'" class=" transition-all duration-700 bg-gray-600">
  
  
  <!-- header of site -->

  <!-- end of header site -->

<!-- start list  -->
  <div>
    <ul class="">
        <router-link to="/admin">
        <li  style="background-color : #22222F" class="p-2 ml-2 rounded-l-xl" >
       <div style="background-color: #DE5634" class="p-2 mx-2  rounded-xl text-white  text-center">
        <span>
          <font-awesome-icon class="text-2xl" :icon="['fas', 'home']"></font-awesome-icon>
        </span>

        <span :class=" news ? 'opacity-100' : 'opacity-0'" class="ml-1 font-bold  transtion-all  duration-1000 delay-300">Home</span>
       </div>
      </li>
      </router-link>

      <router-link to="/admin">

          <li class="p-2 ml-2 rounded-l-xl">
              <div style="background-color: #DE5634" class="p-2 mx-2  rounded-xl transtion-all duration-1000 text-white text-center">
                <span>
                    <font-awesome-icon class="text-2xl" :icon="['fas', 'home']"></font-awesome-icon>
                </span>
                
                <span :class=" news ? 'opacity-100' : 'opacity-0'" class="ml-1  font-bold transtion-all duration-1000 delay-300">Reports</span>
            </div>
        </li>
    </router-link>
      <li class="p-2 ml-2 rounded-l-xl">
           <div style="background-color: #DE5634" class="p-2 mx-2   rounded-xl text-white text-center">
            <span>
          <font-awesome-icon class="text-2xl" :icon="['fas', 'home']"></font-awesome-icon>
        </span>

        <span :class=" news ? 'opacity-100' : 'opacity-0'" class="ml-1 font-bold transtion-all duration-1000 delay-300">setting</span>
       </div>
      </li>
      <router-link to="/admin/customer">
      <li class="p-2 ml-2 rounded-l-xl">
           <div style="background-color: #DE5634" class="p-2 mx-2  rounded-xl text-white text-center">
            <span>
          <font-awesome-icon class="text-2xl pointer" :icon="['fas', 'user']"></font-awesome-icon>
        </span>

        <span :class=" news ? 'opacity-100' : 'opacity-0'" class="ml-1 font-bold transtion-all duration-1000 delay-300 ">customers</span>
       </div>
      </li>
      </router-link>
      <router-link to="/admin/catogress">
      <li class="p-2 ml-2 rounded-l-xl">
           <div style="background-color: #DE5634" class="p-2 mx-2 opacity-100 rounded-xl text-white text-center">
            <span>
          <font-awesome-icon class="text-2xl pointer" :icon="['fas', 'user']"></font-awesome-icon>
        </span>

        <span :class=" news ? 'opacity-100' : 'opacity-0'" class="ml-1 font-bold transtion-all duration-1000 delay-300 ">catogress</span>
       </div>
      </li>
      </router-link>
    </ul>
  </div>
<!-- end list  -->
</div> 
</template>

  <script>
  export default {
 props : {
    news : Boolean , 
    cat :Boolean
 } 
  };
  </script>