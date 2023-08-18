<template>
  <div>
    <h1 class="bg-gray-600 my-10 text-xl text-center uppercase font-black text-white p-2">cards</h1>
    <p class="text-xl pl-10 py-2  font-bold uppercase text-center mt-10 text-center mb-4"> desgin 1</p>
   <div class="flex justify-center items-center flex-col lg:flex-row gap-4">
    <cardOne :name="'product 1'" :price="50"> </cardOne>
    <cardOne  :name="'product 2'" :price="10"> </cardOne>
    <cardOne  :name="'product 3'" :price="40"> </cardOne>
  </div>
  <hr class="w-full mt-10">
  <p class="text-xl pl-10  font-bold uppercase text-center mt-10 "> desgin 2</p>
   <div class="flex justify-center items-center flex-col lg:flex-row gap-4">
    <cardTow> </cardTow>

  </div>
  <!-- <p class="text-xl pl-10 py-2 bg-blue-500 text-white  uppercase text-center mt-4 "> desgin 3</p>
   <div class="flex justify-center items-center flex-col lg:flex-row gap-4">
    <card-three> </card-three>

  </div> -->
  </div>
</template>

<script>
import cardOne from "@/components/projects/project2/cardOne.vue";
import cardTow from "@/components/projects/project2/cardTow.vue";
// import CardThree from '../../components/projects/project2/cardThree.vue';
export default {
  components: {
    cardOne, 
    cardTow ,
    // CardThree
  },
  setup() {},
};
</script>
