<template lang="">
  <div class="container m-auto grid grid-cols-3 gap-4 w-3/5">
    <router-link
      to="Route"
      class="group relative block bg-black w-full mt-6 rounded-2xl h-[600px]"
      v-for="({ title, description, id }, i) in routes"
    >
      <img
        alt="Developer"
        src="https://aeroizhevsk.ru/wp-content/uploads/2016/03/DJI_0023r-Aero.jpg"
        class="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div class="relative p-8 flex flex-col justify-between h-full">
        <div class="flex items-center">
          <img
            src="https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-1.jpg"
            alt=""
            class="bg-no-repeat bg-cover w-10 h-10 rounded-full"
            style="box-shadow: 0px 0px 0px 3px white"
          />
          <p
            class="text-sm font-medium uppercase tracking-widest ml-2 text-pink-500 w-fit"
          >
            Черный Властелин
          </p>

        
        </div>
        <p class="text-2xl font-bold text-white">{{ title }}</p>
        <div class="mt-24">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-sm text-white">
              {{ description }}
            </p>
            <hr />
            <div class="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              666
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      routes: [],
    };
  },
  async mounted() {
    try {
      await axios.get("http://localhost:8080/").then((response) => {
        this.routes = response.data;
        console.log(this.routes);
      });
    } catch (error) {
      alert("Ошибка при получении маршрутов");
    }
  },
};
</script>
<style lang=""></style>
