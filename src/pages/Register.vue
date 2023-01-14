<template>
  <!-- <div class="py-4">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Имя</div>

      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        :counter="10"
        required
        filled
        color="blue"
        density="compact"
        placeholder="Введите имя"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Пароль
      </div>

      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-lock-outline"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="Введите пароль"
        hint="Не менее 8 символов"
        class="input-group--focused"
        @click:append="show2 = !show2"
        color="blue"
        variant="outlined"
      ></v-text-field>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
        Войти
      </v-btn>

      <router-link to="/Register">
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Зарегестрироваться<v-icon icon="mdi-chevron-right"></v-icon>
          </a> </v-card-text
      ></router-link>
    </v-card>
  </div> -->
  <div class="flex h-screen text-white">
    <div
      class="bg-[rgba(38,50,56,0.8)] bg-blend-multiply w-3/5 text-center flex flex-col justify-center bg-[url(https://traveltimes.ru/wp-content/uploads/2021/07/problemy-turistov.jpg)] bg-cover"
      style="border-right: 1px solid #ffff"
    >
      <h1
        contenteditable
        spellcheck="false"
        class="animate__animated animate__bounce"
      >
        ДОБРО ПОЖАЛОВАТЬ !
      </h1>
      <div class="typing-demo animate__animated animate__fadeIn">
        Надеюсь, вам уже нравится у нас, а зарегистрировавшись вы сможете
        создавать маршруты для волшебного времяпровождения
      </div>
    </div>
    <div
      class="bg-[url(https://i.gifer.com/KmJj.gif)] bg-cover bg-[rgba(38,50,56,0.8)] bg-blend-multiply flex flex-col justify-center w-2/5"
    >
      <nav class="flex w-[40%] justify-between mx-auto my-0 text-xl">
        <router-link to="/Login" class="font-bold text-white">Вход</router-link>
        <router-link to="/Register" class="font-bold">Регестрация</router-link>
      </nav>
      <div class="py-4">
        <v-card
          class="mx-auto pa-12 pb-8"
          max-width="448"
          rounded="lg"
          variant="text"
        >
          <b-form
            action="
          "
          >
            <v-text-field
              v-model="username"
              :rules="nameRules"
              :counter="10"
              required
              filled
              color="blue"
              density="default"
              placeholder="Логин"
              prepend-inner-icon="mdi-account-outline"
              variant="outlined"
            ></v-text-field>

            <v-text-field
              v-model="password"
              density="default"
              prepend-inner-icon="mdi-lock-outline"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              placeholder="Пароль"
              hint="Не менее 8 символов"
              class="input-group--focused"
              @click:append="show2 = !show2"
              color="blue"
              variant="outlined"
            ></v-text-field>

            <v-btn
              type="submit"
              @click="register"
              block
              class="mb-8"
              color="blue"
              size="small"
              variant="tonal"
            >
              Зарегестрироваться
            </v-btn>
          </b-form>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    valid: false,
    username: "",

    nameRules: [
      (v) => !!v || "Имя обязательно",
      (v) => v.length <= 10 || "Имя должно быть меньше 10 символов",
    ],
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "",
    rules: {
      required: (value) => !!value || "Пароль обязателен.",
      min: (v) => v.length >= 8 || "Пароль должно быть меньше 8 символов",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    register() {
      axios
        .post(`http://localhost:8080/register`, {
          username: this.username,
          password: this.password,
        })
        .catch((err) => {
          console.error(err);
        });
      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
      // логика регистрации
    },
  },
};
</script>
<style></style>
