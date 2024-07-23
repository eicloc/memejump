<template>
  <div class="jump-world">
    <span class="score-text">Score: 99</span>
    <canvas id="jump-world-canvas"></canvas>
    <button class="game-button">Start Jumping</button>
  </div>
</template>

<script>
import JumpGameWorld from "./index";

export default {
  mounted() {
    const game = new JumpGameWorld({
      container: document.querySelector(".jump-world"),
      canvas: document.querySelector("#jump-world-canvas"),
      axesHelper: false,
    });
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

  .score-text {
    position: fixed;
    color: #fff !important;
    text-shadow: 2px 2px 1px #0066a2, -2px 2px 1px #0066a2, 2px -2px 1px #0066a2,
      -2px -2px 1px #0066a2, 0px 2px 1px #0066a2, 0px -2px 1px #0066a2,
      0px 4px 1px #004a87, 2px 4px 1px #004a87, -2px 4px 1px #004a87;
    font-family: "Carter One", sans-serif;
    font-size: 1.3rem;
    font-weight: bolder;
    top: 2rem;
    left: 2rem;
  }

  .jump-world {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    canvas {
      width: 100%;
      height: 100%;
    }
  }
}
@media (min-width: 768px) {
  .game-button {
    position: fixed;
    bottom: 4rem;
    cursor: pointer;
    text-decoration: none !important;
    outline: none !important;
    font-family: "Carter One", sans-serif;
    font-size: 20px;
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
    padding: 8px 15px 10px;
    box-shadow: 0 6px 0 #266b91, 0 8px 1px 1px rgba(0, 0, 0, 0.3),
      0 10px 0 5px #12517d, 0 12px 0 5px #1a6b9a, 0 15px 0 5px #0c405e,
      0 15px 1px 6px rgba(0, 0, 0, 0.3);
  }

  .game-button:hover {
    top: 2px;
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

  .score-text {
    position: fixed;
    color: dimgrey;
    font-size: 1.3rem;
    font-weight: bolder;
    top: 2rem;
    left: 2rem;
  }

  .jump-world {
    display: flex;
    justify-content: center;
    width: 375px;
    height: 667px;
    margin: auto;
    canvas {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
