<template>
    <v-app>
      <v-main class="main">
        <h1>4</h1>
        <h1 class="X">
          <span class="caution__tape text"></span>
          <span class="caution__tape text"></span>
        </h1>
        <h1>4</h1>
      </v-main>
      <v-container fluid class="background">
        <a href="/">
          <img src="@/assets/Exit_sign.png" class="Exit_sign" alt="Exit sign">
        </a>
        <div id="caution__tape__left" class="caution__tape left">
          <p class="ERROR">ERROR</p>
        </div>
        <div id="caution__tape__center" class="caution__tape center">
          <p class="PAGE_NOT_FOUND">PAGE NOT FOUND!</p>
        </div>
      </v-container>
    </v-app>
  </template>
  
<script>
export default {
    mounted() {
        this.$nextTick(() => {
            this.createTapes();
        });
        document.body.classList.add('no-scroll');
    },
    beforeDestroy() {
        document.body.classList.remove('no-scroll');
    },
    methods: {
        createTapes() {
            let PAGE_NOT_FOUND = document.querySelector(".caution__tape .PAGE_NOT_FOUND");
            let tape__center = document.getElementById("caution__tape__center");
            let tape__left = document.getElementById("caution__tape__left");
            let ERROR = document.querySelector(".caution__tape .ERROR");
            let body_Width = document.body.clientWidth;
            let warning_len = Math.floor((body_Width / PAGE_NOT_FOUND.clientWidth) / 1.8) - 1;
            let caution_len = Math.floor((body_Width / ERROR.clientWidth) / 1.8) - 1;

            for (let i = 0; i < warning_len; i++) {
                let clone = PAGE_NOT_FOUND.cloneNode(true);
                tape__center.appendChild(clone);
            }

            for (let i = 0; i < caution_len; i++) {
                let clone = ERROR.cloneNode(true);
                tape__left.appendChild(clone);
            }
        }
    }
};
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  .v-app {
  overflow: hidden !important; 
}
  
  .no-scroll {
      overflow: hidden;
  }
  
  body {
  font-family: 'Poppins', sans-serif;
  background-color: #FCFCFC;
  background-image: linear-gradient(147deg, #9BB1D6 25%, #A9C0E4 50%, #9BB1D6 80%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
  
  .main {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
  }
  
  .main h1 {
      font-size: 10em;
  }
  
  .main h1.X {
      width: 110px;
      margin: 0 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .caution__tape.text {
      width: 68%;
      height: 10px;
  }
  
  .caution__tape.text:nth-child(1) {
      transform: rotateZ(45deg);
  }
  
  .caution__tape.text:nth-child(2) {
      transform: rotateZ(-45deg);
  }
  
  .background {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
  }
  
  .Exit_sign {
      width: 150px;
      position: absolute;
      right: -25px;
      bottom: -25px;
      transform: rotateZ(-25deg);
      z-index: 4;
      -webkit-animation: show_sign 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
      -o-animation: show_sign 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
      animation: show_sign 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
  }
  
  @keyframes show_sign {
      0% {
          transform: rotateZ(0);
      }
  }
  
  .caution__tape {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 40px;
  user-select: none;
  background-color: #A9C0E4;
  background-image: linear-gradient(#9BB1D6 0%, #A9C0E4 100%);
  color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bolder;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
  border: 1px rgba(0, 0, 0, 0.9) solid;
}
  
  .caution__tape.center {
      bottom: 20%;
      transform: scale(1.5) rotateZ(5deg);
      -webkit-animation: show_tape_center 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
      -o-animation: show_tape_center 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
      animation: show_tape_center 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
  }
  
  .caution__tape.left {
      top: 10%;
      left: -20%;
      transform: rotateZ(-45deg);
      -webkit-animation: show_tape_left 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
      -o-animation: show_tape_left 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
      animation: show_tape_left 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
  }
  
  @keyframes show_tape_left {
      0% {
          top: 0;
      }
  }
  
  @keyframes show_tape_center {
      0% {
          bottom: 0;
      }
  }
  
  @media (max-height: 320px) {
      .caution__tape.center {
          display: none;
      }
  }
  
  @media (max-width: 768px) {
      main h1 {
          font-size: 7em;
      }
  }
  </style>
  