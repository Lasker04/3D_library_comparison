// canvas要素
const canvas = document.getElementById("webgl");

// BABYLON エンジン
const engine = new BABYLON.Engine(canvas, true);

// シーン
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

// カメラ
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -5),
  scene
);
camera.setTarget(BABYLON.Vector3.Zero());

// ライト
const light = new BABYLON.DirectionalLight(
  "light",
  new BABYLON.Vector3(-1, 1, 1),
  scene
);
light.intensity = 0.7;

// ボックス
const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);
const material = new BABYLON.StandardMaterial("material", scene);
material.diffuseColor = new BABYLON.Color3(0, 1, 0);
box.material = material;

// アニメーション
engine.runRenderLoop(function () {
  scene.render();
  scene.getMeshByName("box").rotation.y -= 0.01;
});
