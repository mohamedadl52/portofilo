<template>
    <div>
   
      <div  class="flex min-h-screen  w-full flex-row">
          <!-- start aside left part  -->   
          
       <navbar :cat="cat" :news="news" /> 
          <!-- end aside left part  -->
        
             <!-- start right aside  -->
                      <div  class="w-full" style="background-color : #22222F">
                          <div class="bars ml-4 mt-2" @click="news =! news">
                              <div class="w-10 h-1 bg-white  my-1"></div>
                              <div class="w-10 h-1 bg-white  my-1"></div>
                              <div class="w-10 h-1 bg-white  my-1"></div>
                          </div>
                                 <div>
                                       <p class="ml-4 uppercase text-white font-bold mt-10 cursor-pointer" @click="modelV = false">add new catogress  <span
class="border ml-4 bg-maincolor p-2 text-white
                                        " >+</span></p>
                                        <table border="1" class="text-white text-center  border-2 lg:w-1/2 w-auto mx-auto font-semibold  mt-10  ml-10">
                                           <tr class="border-2 bg-gray-500 ">
                                            <td class="border-2  ">id</td>
                                            <td class="border-2">name</td>
                                            <td class="border-2">post</td>
                                            <td class="border-2">delete / edit</td>
                                           </tr>
                                           <tbody>
                                            <tr>
                                                <td class="border-2">1</td>
                                                <td class="border-2">phone</td>
                                                <td class="border-2">5</td>
                                                <td class="border-2"><span class="text-red-500">delete </span>/ <span class="text-green-500">edit</span></td>
                                            </tr>
                                            <tr>
                                                <td class="border-2">1</td>
                                                <td class="border-2">pc</td>
                                                <td class="border-2">5</td>
                                                <td class="border-2"><span class="text-red-500">delete </span>/ <span class="text-green-500">edit</span></td>
                                            </tr>
                                            <tr>
                                                <td class="border-2">1</td>
                                                <td class="border-2">tvs</td>
                                                <td class="border-2">5</td>
                                                <td class="border-2"><span class="text-red-500">delete </span>/ <span class="text-green-500">edit</span></td>
                                            </tr>
                                           </tbody>
                                        </table>

                                 </div>
                      </div>

                      <div
id="model" :class="modelV ? 'hidden' :'flex' " class="absolute w-1/2 h-1/2 flex justify-center items-center top-1/4 left-1/4 shadow-xl  bg-white
                      ">
                        <span class="absolute cursor-pointer right-3 top-1 text-2xl" @click="modelV = true">X</span>
                            <div class="w-full flex justify-center items-center flex-col p-2">
                                <input id="" type="text" class="p-2 border border-black w-full" name="" placeholder="add catogress"> <br>
                                <input
type="submit" value="add" class="bg-maincolor text-white font-semibold
                                 p-1 mt-4  px-4">
                            </div>
                      </div>
             <!-- end right aside   -->
  
              </div>
      </div>
  
  </template>
  
  <script>
  import navbar from "/src/components/admin/navBar.vue";
 
export default {
components : {
    navbar
},
    data(){
        return{
            news : true ,
            cat : true ,
            modelV : true
    }
} 
}
  </script>
  <style scoped>
table td {
    padding: 10px;
}
</style>