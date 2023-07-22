<template>
  <div>
    <p class="px-20 mt-4">
      <font-awesome-icon
        class="text-seconcolor hover:text-gray-600 transition-all duration-500 text-2xl"
        :icon="['fas', 'home']"
      />
      <font-awesome-icon
        class="text-seconcolor hover:text-gray-600 transition-all duration-500 text-xl mr-1"
        :icon="['fas', 'chevron-right']"
      />
      <span class="text-lg text-seconcolor font-bold">account</span>
    </p>

    <div class="container lg:flex p-4 mx-auto">
      <accountCat />

      <div class="w-full">
        <h1 class="text-xl text-seconcolor font-semibold">white list</h1>

        <div
          class="flex mt-4 flex-wrap  w-full gap-y-4  w-full "
        >
          <div class="flex justify-between w-full px-10 shadow-xl py-2">
            <div class="text-lg text-seconcolor font-semibold">
              <img width="100px" src="src/assets/images/bg.jpg" alt="" />
            </div>
            <div class="text-sm ml-2 font-semibold">
              <p>Italian chair</p>
              <p>
                <span class="text-gray-500">avallabilty </span>
                <span class="text-green-500">in astock</span>
              </p>
            </div>
            <div class="text-lg text-red-500 ml-10 font-semibold">200$</div>
            <div>
              <p
                class="text-sm text-white text-center bg-maincolor p-2 ml-2 uppercase font-semibold"
              >
                add to card
              </p>
            </div>
            <div>
              <font-awesome-icon
                class="text-red-400 text-3xl"
                :icon="['fas', 'trash-alt']"
              />
            </div>
          </div>
          <div class="flex justify-between w-full px-10 shadow-xl py-2">
            <div class="text-lg text-seconcolor font-semibold">
              <img width="100px" src="src/assets/images/bg.jpg" alt="" />
            </div>
            <div class="text-sm ml-2 font-semibold">
              <p>Italian chair</p>
              <p>
                <span class="text-gray-500">avallabilty </span>
                <span class="text-green-500">in astock</span>
              </p>
            </div>
            <div class="text-lg text-red-500 ml-10 font-semibold">200$</div>
            <div>
              <p
                class="text-sm text-white text-center bg-maincolor p-2 ml-2 uppercase font-semibold"
              >
                add to card
              </p>
            </div>
            <div>
              <font-awesome-icon
                class="text-red-400 text-3xl"
                :icon="['fas', 'trash-alt']"
              />
            </div>
          </div>
          <div class="flex justify-between w-full px-10 shadow-xl py-2">
            <div class="text-lg text-seconcolor font-semibold">
              <img width="100px" src="src/assets/images/bg.jpg" alt="" />
            </div>
            <div class="text-sm ml-2 font-semibold">
              <p>Italian chair</p>
              <p>
                <span class="text-gray-500">avallabilty </span>
                <span class="text-green-500">in astock</span>
              </p>
            </div>
            <div class="text-lg text-red-500 ml-10 font-semibold">200$</div>
            <div>
              <p
                class="text-sm text-white text-center bg-maincolor p-2 ml-2 uppercase font-semibold"
              >
                add to card
              </p>
            </div>
            <div>
              <font-awesome-icon
                class="text-red-400 text-3xl"
                :icon="['fas', 'trash-alt']"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import accountCat from "../components/accountCat.vue";
</script>
