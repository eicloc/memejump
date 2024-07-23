<template>
  <div class="jump-world">
    <span v-show="!isOver" class="score-text">Score: {{ score }}</span>
    <!-- 游戏 -->
    <canvas id="jump-world-canvas"></canvas>

    <!-- 游戏失败画面 -->
    <div v-show="isOver === true" class="gameover-curtain">
      <span class="over-score-text">Game Over</span>
      <span class="over-score-text" style="font-size: 6rem">{{ score }}</span>
      <div
        style="
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
          padding-left: 5rem;
          padding-right: 5rem;
        "
      >
        <router-link class="game-button" to="/"
          ><img width="17px" height="17px" src="../../assets/house.png"
        /></router-link>
        <button class="game-button" @click="restartGame">Restart</button>
      </div>
      <span class="over-score-text" style="font-size: 1.5rem"
        >History High: {{ hisHigh }}</span
      >
    </div>
    <!-- <button class="game-button">Start Jumping</button> -->
  </div>
</template>

<script>
import JumpGameWorld from "./index";

export default {
  name: "jump",
  data() {
    return {
      score: 0,
      isOver: false,
      game: null,
      hisHigh: 0,
    };
  },
  mounted() {
    const addPoints = this.addScore;
    const setOver = this.setGameOver;
    const game = new JumpGameWorld({
      container: document.querySelector(".jump-world"),
      canvas: document.querySelector("#jump-world-canvas"),
      axesHelper: false,
      addScore: addPoints,
      setGameOver: setOver,
    });
    console.log("game实例：", game.destroy);
    this.game = game;
  },
  methods: {
    addScore: function () {
      this.score++;
    },
    setGameOver: function () {
      this.isOver = !this.isOver;
    },
    restartGame: function () {
      console.log("this.game", this.game);
      //获取当前得分
      let curScore = this.score;
      //获取历史最高分
      let hisScore = this.hisHigh;
      if (curScore > hisScore || !hisScore) {
        this.hisHigh = curScore;
      }
      this.game.destroy();
      this.score = 0;
      this.isOver = !this.isOver;
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
  .gameover-curtain {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 5rem;
    padding-bottom: 5rem;
    box-sizing: border-box;
  }

  .over-score-text {
    color: #fff !important;
    text-shadow: 2px 2px 1px #0066a2, -2px 2px 1px #0066a2, 2px -2px 1px #0066a2,
      -2px -2px 1px #0066a2, 0px 2px 1px #0066a2, 0px -2px 1px #0066a2,
      0px 4px 1px #004a87, 2px 4px 1px #004a87, -2px 4px 1px #004a87;
    font-family: "Carter One", sans-serif;
    font-size: 2.3rem;
    font-weight: bolder;
  }

  .game-button {
    z-index: 999;
    cursor: pointer;
    text-decoration: none !important;
    outline: none !important;
    font-family: "Carter One", sans-serif;
    font-size: 1rem;
    line-height: 1.25em;
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
    padding: 4px 8px 5px;
    box-shadow: 0 6px 0 #266b91, 0 8px 1px 1px rgba(0, 0, 0, 0.3),
      0 10px 0 5px #12517d, 0 12px 0 5px #1a6b9a, 0 15px 0 5px #0c405e,
      0 15px 1px 6px rgba(0, 0, 0, 0.3);
  }

  // .game-button:hover {
  //   transform: scale(1.3);
  //   // top: 2px;
  //   box-shadow: 0 4px 0 #266b91, 0 6px 1px 1px rgba(0, 0, 0, 0.3),
  //     0 8px 0 5px #12517d, 0 10px 0 5px #1a6b9a, 0 13px 0 5px #0c405e,
  //     0 13px 1px 6px rgba(0, 0, 0, 0.3);
  // }
  // .game-button::before {
  //   content: "";
  //   height: 10%;
  //   position: absolute;
  //   width: 40%;
  //   background: #fff;
  //   right: 13%;
  //   top: -3%;
  //   border-radius: 99px;
  // }
  // .game-button::after {
  //   content: "";
  //   height: 10%;
  //   position: absolute;
  //   width: 5%;
  //   background: #fff;
  //   right: 5%;
  //   top: -3%;
  //   border-radius: 99px;
  // }

  .score-text {
    position: fixed;
    color: #fff !important;
    text-shadow: 2px 2px 1px #0066a2, -2px 2px 1px #0066a2, 2px -2px 1px #0066a2,
      -2px -2px 1px #0066a2, 0px 2px 1px #0066a2, 0px -2px 1px #0066a2,
      0px 4px 1px #004a87, 2px 4px 1px #004a87, -2px 4px 1px #004a87;
    font-family: "Carter One", sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    top: 1.7rem;
    left: 1.7rem;
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
