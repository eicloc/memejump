import {
  randomArrayElm,
  rangeNumberInclusive,
  propCounter,
  incrementPropCounter,
  colors,
} from "./utils";

// 静态
export const statics = [
  // ...
];

// 非静态
export const actives = [
  // 默认纯色立方体创造器
  function defaultCreator(THREE, helpers) {
    const {
      propSizeRange: [min, max],
      propHeight,
      baseMeshLambertMaterial,
      baseBoxBufferGeometry,
    } = helpers;

    incrementPropCounter();

    // 随机颜色
    const colorObj = randomArrayElm(colors);
    // 随机大小，头2个盒子固定一下大小
    const size = propCounter < 3 ? max : rangeNumberInclusive(min, max);

    const geometry = baseBoxBufferGeometry.clone();
    geometry.scale(size, propHeight, size);

    //crypto logos
    var texture = new THREE.TextureLoader().load(require(`${colorObj.path}`));

    const material = baseMeshLambertMaterial.clone();
    material.setValues({ color: colorObj.color });
    const pngMaterial = baseMeshLambertMaterial.clone();
    pngMaterial.setValues({ map: texture });

    // return new THREE.Mesh(geometry, material);
    return new THREE.Mesh(geometry, pngMaterial);
  },
  function defaultCreator(THREE, helpers) {
    const {
      propSizeRange: [min, max],
      propHeight,
      baseMeshLambertMaterial,
      baseCylinderBufferGeometry,
    } = helpers;

    incrementPropCounter();

    // 随机颜色
    const colorObj = randomArrayElm(colors);
    // 随机大小，头2个盒子固定一下大小
    const size = propCounter < 3 ? max : rangeNumberInclusive(min, max);

    const geometry = baseCylinderBufferGeometry.clone();
    geometry.scale(Math.ceil(size / 2), propHeight, Math.ceil(size / 2));

    //crypto logos
    // var texture = new THREE.TextureLoader().load(
    //   require("./textures/bitcoin.png")
    // );

    const material = baseMeshLambertMaterial.clone();
    material.setValues({ color: colorObj.color });

    return new THREE.Mesh(geometry, material);
  },
];
