<template>
  <!-- <div class="menu-view"> -->
  <!-- <div @click="open = false" v-show="open" class="menu-view-mask"></div>

    <transition name="menu-view-slide">
      <div v-show="open" class="menu-view-list">
        <MenuList />
      </div>
    </transition> -->

  <!-- <transition name="menu-view-trigger-slide"> -->
  <div style="display: flex; justify-content: center">
    <!-- <router-link to="/wx-jump-stage2"
      ><button class="game-button">Start Jumping</button></router-link
    > -->
  </div>
  <!-- </transition> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "menu-view",
  data() {
    return {
      open: false,
    };
  },
  watch: {
    "$route.path"() {
      this.open = false;
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "Carter One";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/carterone/v17/q5uCsoe5IOB2-pXv9UcNExN8hA.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@media (max-width: 768px) {
  .game-button {
    z-index: 999;
    position: fixed;
    bottom: 3.5rem;
    cursor: pointer;
    text-decoration: none !important;
    outline: none !important;
    font-family: "Carter One", sans-serif;
    font-size: 1.25rem;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 1px #0066a2, -2px 2px 1px #0066a2, 2px -2px 1px #0066a2,
      -2px -2px 1px #0066a2, 0px 2px 1px #0066a2, 0px -2px 1px #0066a2,
      0px 4px 1px #004a87, 2px 4px 1px #004a87, -2px 4px 1px #004a87;
    border: none;
    margin: 15px 15px 30px;
    background: repeating-linear-gradient(
      45deg,
      #3ebbf7,
      #3ebbf7 5px,
      #45b1f4 5px,
      #45b1f4 10px
    );
    border-bottom: 3px solid rgba(16, 91, 146, 0.5);
    border-top: 3px solid rgba(255, 255, 255, 0.3);
    color: #fff !important;
    border-radius: 8px;
    // padding: 8px 15px 10px;
    padding: 8px 15px 10px;
    box-shadow: 0 6px 0 #266b91, 0 8px 1px 1px rgba(0, 0, 0, 0.3),
      0 10px 0 5px #12517d, 0 12px 0 5px #1a6b9a, 0 15px 0 5px #0c405e,
      0 15px 1px 6px rgba(0, 0, 0, 0.3);
  }

  .game-button:hover {
    transform: scale(1.3);
    // top: 2px;
    box-shadow: 0 4px 0 #266b91, 0 6px 1px 1px rgba(0, 0, 0, 0.3),
      0 8px 0 5px #12517d, 0 10px 0 5px #1a6b9a, 0 13px 0 5px #0c405e,
      0 13px 1px 6px rgba(0, 0, 0, 0.3);
  }
  .game-button::before {
    content: "";
    height: 10%;
    position: absolute;
    width: 40%;
    background: #fff;
    right: 13%;
    top: -3%;
    border-radius: 99px;
  }
  .game-button::after {
    content: "";
    height: 10%;
    position: absolute;
    width: 5%;
    background: #fff;
    right: 5%;
    top: -3%;
    border-radius: 99px;
  }
}

// @menu-view-z-index: 5000;

// .menu-view {
//   &-list {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 220px;
//     box-shadow: 0 0 15px #808b96;
//     overflow-x: hidden;
//     overflow-y: auto;
//     overscroll-behavior: contain;
//     transform: translate3d(0, 0, 0);
//     background: #ffffff;
//     z-index: @menu-view-z-index;
//   }
//   &-mask {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: @menu-view-z-index - 1;
//   }

//   &-trigger {
//     position: fixed;
//     top: 20px;
//     left: 20px;
//     z-index: @menu-view-z-index + 1;
//     button {
//       width: 44px;
//       height: 44px;
//       border-radius: 50%;
//       box-shadow: 0 0 15px #808b96;
//       border: none;
//       background: fade(#2c3e50, 50%);
//     }
//   }
// }

// @media (max-width: 768px) {
//   .menu-view-list {
//     width: 70vw;
//   }
// }

// .menu-view-trigger-slide-enter-active {
//   animation: slide-bottom 0.3s;
// }
// .menu-view-trigger-slide-leave-active {
//   animation: slide-top 0.3s 0.3s;
// }

// .menu-view-slide-enter-active {
//   animation: slide-right 0.3s;
// }
// .menu-view-slide-leave-active {
//   animation: slide-left 0.3s;
// }

// @keyframes slide-right {
//   from {
//     transform: translate3d(-100%, 0, 0);
//   }
// }
// @keyframes slide-left {
//   to {
//     transform: translate3d(-100%, 0, 0);
//   }
// }
// @keyframes slide-bottom {
//   from {
//     transform: translate3d(0, -200%, 0);
//   }
// }
// @keyframes slide-top {
//   to {
//     transform: translate3d(0, -200%, 0);
//   }
// }
</style>
