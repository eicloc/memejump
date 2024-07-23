import { randomArrayElm, rangeNumberInclusive } from "./utils";

let cid = 0;
const colors = [0x67c23a, 0xe6a23c, 0xf56c6c, 0x909399, 0x409eff, 0xffffff];

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

    ++cid;

    // 随机颜色
    const color = randomArrayElm(colors);
    // 随机大小，头2个盒子固定一下大小
    const size = cid < 3 ? max : rangeNumberInclusive(min, max);

    const geometry = baseBoxBufferGeometry.clone();
    geometry.scale(size, propHeight, size);

    const material = baseMeshLambertMaterial.clone();
    material.setValues({ color });

    return new THREE.Mesh(geometry, material);
  },
];
