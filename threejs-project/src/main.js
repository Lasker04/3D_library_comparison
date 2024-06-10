import * as THREE from "three";

// サイズ
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// キャンバス要素
const canvas = document.getElementById("webgl");

// レンダラー
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0xffffff);

// シーン
const scene = new THREE.Scene();

// カメラ
const camera = new THREE.PerspectiveCamera(
  75, // 視野角
  sizes.width / sizes.height // アスペクト比
);
camera.position.z = 3;

// ライト
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1); //
scene.add(directionalLight);

// ボックス
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
box.position.set(0, 0, 0);
scene.add(box);

// アニメーション関数を定義
function animate() {
  requestAnimationFrame(animate);
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// アニメーションを開始
animate();
