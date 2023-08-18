<template>
  <div class="mb-20">
    <nav-bar></nav-bar>
    <div>
      <div class="mt-20 flex justify-center flex-wrap lg:mt-0">
        <button
          v-for="item in works"
          :key="item.name"
          style="
            background: linear-gradient(
              60deg,
              rgb(147 84 185),
              rgb(38 146 153 / 60%)
            );
          "
          class="inline-block bg-blue-900 rounded-sm p-2 lg:px-4 text-white mx-1 font-bold text-sm my-1 lg:mt-0 uppercase lg:mx-2"
          @click="fliterToDp(item)"
        >
          {{ item.name }}
        </button>
      </div>

      <div
        class="flex mx-auto gap-4 container flex-wrap justify-center items-center flex-col lg:flex-row"
      >
        <proJect
          v-for="project in projects2"
          :key="project.name"
          class="shadow-xl shadow-stone-400 p-2 border shadow border-gray-500"
          :name="project.name"
          :link="project.link"
          :href="project.href"
          :img="project.img"
        ></proJect>
        <!-- <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'card Desgins' link="project2" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'login pages Desgin' link="project3" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'yoga degin template' link="project4" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'hair style temlate (just for pc)' link="project5" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'background Animations' link="project6" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'template MotiveZone Desgin' link="project7" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'portfilo desgin' link="project2" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'blog website' link="project2" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'online store website' link="project2" img="../src/assets/images/2.png"></proJect>    
         <proJect class="shadow-xl shadow-stone-400 p-2 border border-gray-500"  name = 'chat application ebsite' link="project2" img="../src/assets/images/2.png"></proJect>    
         -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import proJect from "../components/proJect.vue";
import NavBar from "../components/NavBar.vue";
import chatApp from "/src/assets/images/works/chatApp.png";
// import carousel from "/src/assets/images/works/carousel.png";
import clanasowa from "/src/assets/images/works/clanasowa.JPG";
import cards from "/src/assets/images/works/cards.jpg";
import yogaa from "/src/assets/images/works/yogaa.JPG";
import login from "/src/assets/images/works/login.png";
import mbizone from "/src/assets/images/works/mbizone.png";
import animations from "/src/assets/images/works/animations.JPG";
// import stylehair from "/src/assets/images/works/stylehair.jpg";

const works = ref([
  { name: "all", valueFeleter: "all" },
  { name: "full desgin pages", valueFeleter: "fdp" },
  { name: "components desgin pages", valueFeleter: "cd" },
  { name: "full stack projects", valueFeleter: "fsp" },
  { name: "projects in progress", valueFeleter: "pp" },
]);
let projects2 = ref([
  { name: "online store website", link: "project2", img: chatApp, type: "fsp" },
  {
    name: "chat application website",
    href: "https://chatapp-1hom.onrender.com/",
    img: chatApp,
    type: "fsp",
  },
  {
    name: "blog website",
    href: "https://chatapp-1hom.onrender.com/",
    img: clanasowa,
    type: "fsp",
  },
  { name: "portfilo desgin", link: "project2", img: clanasowa, type: "fdp" },
  // { name: "Carsoul Desgins", link: "project1", img: carousel, type: "cd" },
  { name: "card Desgins", link: "project2", img: cards, type: "cd" },
  { name: "yoga degin template", link: "project4", img: yogaa, type: "fdp" },
  // {
  //   name: "hair style temlate (just for pc)",
  //   link: "project5",
  //   img: stylehair,
  //   type: "fdp",
  // },
  {
    name: "background Animations",
    link: "project6",
    img: animations,
    type: "cd",
  },
  {
    name: "template MotiveZone Desgin",
    link: "project7",
    img: mbizone,
    type: "fdp",
  },
  { name: "login pages Desgin", link: "project3", img: login, type: "cd" },
]);
let projects = ref([
  { name: "online store website", link: "project2", img: chatApp, type: "fsp" },
  {
    name: "chat application website",
    href: "https://chatapp-1hom.onrender.com/",
    img: chatApp,
    type: "fsp",
  },
  {
    name: "blog website",
    href: "https://chatapp-1hom.onrender.com/",
    img: clanasowa,
    type: "fsp",
  },
  { name: "portfilo desgin", link: "project2", img: clanasowa, type: "fdp" },
  // { name: "Carsoul Desgins", link: "project1", img: carousel, type: "cd" },
  { name: "card Desgins", link: "project2", img: cards, type: "cd" },
  { name: "yoga degin template", link: "project4", img: yogaa, type: "fdp" },
  // {
  //   name: "hair style temlate (just for pc)",
  //   link: "project5",
  //   img: stylehair,
  //   type: "fdp",
  // },
  {
    name: "background Animations",
    link: "project6",
    img: animations,
    type: "cd",
  },
  {
    name: "template MotiveZone Desgin",
    link: "project7",
    img: mbizone,
    type: "fdp",
  },
  { name: "login pages Desgin", link: "project3", img: login, type: "cd" },
]);
const fliterToDp = function (value) {
  projects2.value = [];
  projects.value.filter((project) => {
    if (value.valueFeleter == "all") {
      console.log("all");
      projects2.value = projects.value;
    } else if (project.type == value.valueFeleter) {
      projects2.value.push(project);
      console.log("good fdp");
    }
  });
};
</script>
