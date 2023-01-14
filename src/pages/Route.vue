<template lang="">
  <v-carousel height="500" hide-delimiters progress="blue">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <div class="d-flex fill-height justify-around align-center">
        <img
          class="w-[30%] h-4/5"
          src="https://gas-kvas.com/uploads/posts/2022-06/1656384422_12-gas-kvas-com-p-krasivie-foto-goroda-izhevsk-12.jpg"
          alt=""
        />
        <div class="w-1/2 h-4/5 text-white overflow-auto ">
          <h1>Храм</h1>
          <p>
            {{ slide }} Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Reprehenderit corporis explicabo molestiae quis voluptates
            nulla quaerat libero fuga pariatur temporibus? Velit quisquam facere
            incidunt ipsa vel, distinctio obcaecati natus repellendus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nihil at
            voluptatibus nemo illum magni dolores totam sunt ut, veniam culpa
            doloremque quo tempora accusantium debitis libero aut quasi amet
            ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            tempore aspernatur aperiam totam quis quisquam, quia sapiente culpa.
            Odit, modi aliquam consectetur enim id voluptate fugiat ab ullam
            omnis debitis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Itaque dolorum dolore sapiente magnam iste quae quasi
            voluptates magni, voluptatum possimus, praesentium odit velit
            laudantium laborum deserunt doloribus reiciendis, atque eos.
          </p>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
  <mapVue ></mapVue>
  <div class="mt-2 flex justify-between">
    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-4"
      :icon="icon"
      variant="plain"
      size="small"
      color="white"
    ></v-btn>
  </div>
</template>
<script>
import mapVue from "@/components/map.vue";

export default {
  components: {
    mapVue,
  },
  data() {
    return {
      dialog: false,
      icons: [
        "mdi-heart",
        "mdi-bookmark",
        "mdi-share-variant",
        "mdi-message-draw",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  beforeCreate() {
    ymaps.ready(init);
    function init() {
      // Creating the map.
      var myMap = new ymaps.Map("map", {
        // The map center coordinates.
        // Default order: “latitude, longitude”.
        // To not manually determine the map center coordinates,
        // use the Coordinate detection tool.
        center: [56.852946, 53.208719],
        // Zoom level. Acceptable values:
        // from 0 (the entire world) to 19.
        zoom: 14,
      });
      var multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          // Точки маршрута. Точки могут быть заданы как координатами, так и адресом.
          referencePoints: [
            [56.87176889746844, 53.24509912866931],
            [56.84133, 53.210987],
            [56.848675, 53.222782],
          ],
        },
        {
          // Автоматически устанавливать границы карты так,
          // чтобы маршрут был виден целиком.
          boundsAutoApply: true,
        }
      );
      myMap.geoObjects.add(multiRoute);
    }
  },
};
</script>
<style lang=""></style>
