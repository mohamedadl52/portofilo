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
                                    <div>
                                         <select id="" class="w-64 ml-12 px-5 py-2 mt-4" name="">
                                            <option value="">all</option>
                                            <option value="">user</option>
                                            <option value="">mods</option>
                                            <option value="">admin</option>
                                         </select>
                                    </div>
                                        <table border="1" class="text-white text-center  border-2 w-1/2 mx-auto font-semibold  mt-10  ml-10">
                                           <tr class="border-2 bg-gray-500">
                                            <td class="border-2">id</td>
                                            <td class="border-2">name</td>
                                            <td class="border-2">post</td>
                                            <td class="border-2">role</td>
                                            <td class="border-2"></td>
                                           </tr>
                                           <tbody>
                                            <tr>
                                                <td class="border-2">1</td>
                                                <td class="border-2">phone</td>
                                                <td class="border-2">5</td>
                                                <td class="border-2">user</td>
                                                <td class="border-2"><span class="text-red-500">delete </span>/ <span class="text-green-500">edit</span> / <span class="text-orange-400">veiw
                                                </span></td>
                                            </tr>
                                            <tr>
                                                <td class="border-2">1</td>
                                                <td class="border-2">pc</td>
                                                <td class="border-2">5</td>
                                                <td class="border-2">mod</td>
                                                <td class="border-2"><span class="text-red-500">delete </span>/ <span class="text-green-500">edit</span> / <span class="text-orange-400">veiw
                                                </span></td>
                                            </tr>
                                            <tr>
                                                <td class="border-2">1</td>
                                                <td class="border-2">tvs</td>
                                                <td class="border-2">5</td>
                                                <td class="border-2">admin
                                                </td>
                                                <td class="border-2"><span class="text-red-500">delete </span>/ <span class="text-green-500">edit</span> / <span class="text-orange-400">veiw
                                                </span></td>
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
table td:last-child {
    padding-left: 20px;
}
</style>
  