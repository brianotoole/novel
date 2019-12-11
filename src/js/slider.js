var VueTyper = window.VueTyper.VueTyper;

new Vue({
  el: "#slider-app",
  components: {
    "vue-typer": VueTyper
  },
  data: {
    works: [
      {
        id: 1,
        name: "The Arlington St.Pete",
        img: "https://i.imgur.com/ml2icVo.jpg"
      },
      { id: 2, name: "A hotel idk", img: "https://i.imgur.com/GqkbrOZ.jpg" },
      { id: 3, name: "Something else", img: "https://i.imgur.com/VinUFwQ.jpg" }
    ],
    currentSlide: 1
  },
  methods: {
    goForward() {
      console.log("+");
      if (this.currentSlide < this.works.length) {
        this.currentSlide++;
      } else {
        this.currentSlide = 1;
      }
    },
    goBackward() {
      console.log("-");
      if (this.currentSlide > 1) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.works.length;
      }
    }
  },
  template: `
    <div class="slider-container container">
    <div class="controls">
        <p class="work-label mb-12">Work</p>
        <div class="flex flex-col items-center w-12">
        <div @click="goForward()">
            <svg
            class="my-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="18.385"
            height="18.385"
            viewBox="0 0 18.385 18.385"
            >
            <g
                id="Group_168"
                data-name="Group 168"
                transform="translate(0 9.192) rotate(-45)"
            >
                <path
                id="Path_85"
                data-name="Path 85"
                d="M12,0V12H0"
                fill="none"
                stroke="#e05831"
                stroke-width="2"
                />
            </g>
            </svg>
        </div>

        <svg
            class="my-4"
            id="Group_167"
            data-name="Group 167"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="1"
            viewBox="0 0 26 1"
        >
            <path
            id="Path_84"
            data-name="Path 84"
            d="M25.5.5H.5"
            fill="none"
            stroke="#abaaa7"
            stroke-linecap="square"
            stroke-width="1"
            />
        </svg>
        <div @click="goBackward()">
            <svg
            class="my-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="18.385"
            height="18.385"
            viewBox="0 0 18.385 18.385"
            >
            <g
                id="Group_169"
                data-name="Group 169"
                transform="translate(18.385 9.192) rotate(135)"
            >
                <path
                id="Path_86"
                data-name="Path 86"
                d="M12,0V12H0"
                fill="none"
                stroke="#e05831"
                stroke-width="2"
                />
            </g>
            </svg>
        </div>
        </div>

        <p :text="works[currentSlide - 1].name" :repeat="0" class="work-title">{{works[currentSlide - 1].name}}</p>

    </div>
    <div v-for="work in works" :key="work.id">
    <transition name="slide-in">
        <div
        v-if="work.id === currentSlide"
        :style="{backgroundImage: 'url(' + work.img + ')', 'z-index': work.id + 5}"
        class="slider-img"
        ></div>
        </transition>
    </div>
    </div>

  `
});
