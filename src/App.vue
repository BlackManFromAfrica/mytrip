<template>
  <nav
    class="cursor-pointer shadow-md -mb-px flex justify-between items-center bg-[#263238] px-6 py-2"
  >
    <div class="sign-wrap-4">
      <div class="sign_word animate__headShake animate__animated">
        M<span>Y</span>T<span>R</span>i<span>P</span>
      </div>
    </div>
    <div class="w-1/2 flex justify-around">
      <router-link
        class="flex items-center w-20 uppercase hover:text-blue-400 duration-150 font-medium hover:font-bold text-blue-50 text-[15px]"
        to="/"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.07006 4.6C2.87006 1.14 8.08006 1.14 8.87006 4.6C9.34006 6.63 8.05006 8.35 6.93006 9.42C6.11006 10.2 4.82006 10.19 4.00006 9.42C2.89006 8.35 1.60006 6.63 2.07006 4.6Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M15.07 16.6C15.87 13.14 21.11 13.14 21.91 16.6C22.38 18.63 21.09 20.35 19.96 21.42C19.14 22.2 17.84 22.19 17.02 21.42C15.89 20.35 14.6 18.63 15.07 16.6Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M11.9999 5H14.6799C16.5299 5 17.3899 7.29 15.9999 8.51L8.00995 15.5C6.61995 16.71 7.47994 19 9.31994 19H11.9999"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.48622 5.5H5.49777"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.4862 17.5H18.4978"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="ml-2">Маршруты</span>
      </router-link>
      <router-link
        class="flex items-center w-20 uppercase hover:text-blue-400 duration-150 font-medium hover:font-bold text-blue-50 text-[15px]"
        to="/Rating"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6992 18.98H7.29922C6.87922 18.98 6.40922 18.65 6.26922 18.25L2.12922 6.66999C1.53922 5.00999 2.22922 4.49999 3.64922 5.51999L7.54922 8.30999C8.19922 8.75999 8.93922 8.52999 9.21922 7.79999L10.9792 3.10999C11.5392 1.60999 12.4692 1.60999 13.0292 3.10999L14.7892 7.79999C15.0692 8.52999 15.8092 8.75999 16.4492 8.30999L20.1092 5.69999C21.6692 4.57999 22.4192 5.14999 21.7792 6.95999L17.7392 18.27C17.5892 18.65 17.1192 18.98 16.6992 18.98Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.5 22H17.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 14H14.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="ml-2">Рейтинг</span>
      </router-link>
      <router-link
        class="flex items-center w-20 uppercase hover:text-blue-400 duration-150 font-medium hover:font-bold text-blue-50 text-[15px]"
        to="/Reviews"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9998 11.36V11.15C11.9998 10.47 12.4198 10.11 12.8398 9.82001C13.2498 9.54001 13.6598 9.18002 13.6598 8.52002C13.6598 7.60002 12.9198 6.85999 11.9998 6.85999C11.0798 6.85999 10.3398 7.60002 10.3398 8.52002"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9955 13.75H12.0045"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="ml-2">Отзывы</span>
      </router-link>
      <router-link
        class="flex items-center w-20 uppercase hover:text-blue-400 duration-150 font-medium hover:font-bold text-blue-50 text-[15px]"
        to="/Create"
        v-if="ok"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 6.5H16"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6.5H2"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 17.5H18"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 17.5H2"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="ml-2">Создать</span>
      </router-link>
      <router-link
        v-if="ok"
        to="/Favorites"
        class="flex items-center w-20 uppercase hover:text-blue-400 duration-150 font-medium hover:font-bold text-blue-50 text-[15px]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.89 5.88H5.10999C3.39999 5.88 2 7.27999 2 8.98999V20.35C2 21.8 3.04 22.42 4.31 21.71L8.23999 19.52C8.65999 19.29 9.34 19.29 9.75 19.52L13.68 21.71C14.95 22.42 15.99 21.8 15.99 20.35V8.98999C16 7.27999 14.6 5.88 12.89 5.88Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 8.98999V20.35C16 21.8 14.96 22.41 13.69 21.71L9.76001 19.52C9.34001 19.29 8.65999 19.29 8.23999 19.52L4.31 21.71C3.04 22.41 2 21.8 2 20.35V8.98999C2 7.27999 3.39999 5.88 5.10999 5.88H12.89C14.6 5.88 16 7.27999 16 8.98999Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="ml-2">Избарнное</span>
      </router-link>
    </div>

    <router-link to="/Login" v-if="ok">
      <v-btn variant="text" prepend-icon="mdi-account" color="secondary">
        <span class="normal-case tracking-normal text-blue-50">Выход</span>
      </v-btn>
    </router-link>

    <router-link to="/Login" v-else="ok">
      <v-btn variant="text" prepend-icon="mdi-account">
        <span class="normal-case tracking-normal text-blue-50">Вход</span>
      </v-btn>
    </router-link>
  </nav>

  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      ok: true,
    };
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Nunito:200,300,regular,500,600,700,800,900,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
@tailwind components;
@tailwind utilities;
html {
  background-color: #3a454b;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Nunito";
  font-weight: 500;
}

a {
  text-decoration: none;
}
*::-webkit-scrollbar-track {
  border-radius: 10px;

  background-color: rgb(191, 226, 255);
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: white;
}

.router-link-active {
  color: lightblue;
}
.sign-wrap-4 {
  text-align: center;
}
.sign-wrap-4 .sign_word {
  font-size: 40px;
  font-weight: bold;
  line-height: 50px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #bfe2ff, 0 0 0.5em #bfe2ff,
    0 0 0.1em #bfe2ff;
}
.sign-wrap-4 .sign_word span {
  animation: neon-4 linear infinite 2s;
}
@keyframes neon-4 {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79% {
    color: #0b3960;
  }
  80% {
    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #0b3960;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #0b3960;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}
</style>
