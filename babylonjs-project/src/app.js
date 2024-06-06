// キャンバス要素を取得
const canvas = document.getElementById("renderCanvas");

// BABYLON 3Dエンジンを生成
const engine = new BABYLON.Engine(canvas, true);

// シーンを作成
const createScene = function () {
  // 基本的なBJSシーンオブジェクトを作成
  const scene = new BABYLON.Scene(engine);

  // FreeCameraを作成し、その位置を設定
  const camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 0, -5),
    scene
  );

  // カメラをシーンの原点に向ける
  camera.setTarget(BABYLON.Vector3.Zero());

  // カメラコントロールを無効にする
  camera.inputs.clear();

  // 基本的なライトを作成
  const light = new BABYLON.DirectionalLight(
    "light1",
    new BABYLON.Vector3(-1, 1, 1), // 光源の方向を右から左へ変更
    scene
  );
  light.intensity = 0.7;

  // 組み込みの"box"形状を作成
  const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);

  // 基本的なマテリアルを作成し、その色を設定
  const material = new BABYLON.StandardMaterial("material", scene);
  material.diffuseColor = new BABYLON.Color3(0, 1, 0); // 緑色
  box.material = material;

  // 背景色を白に設定
  scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);

  return scene;
};

const scene = createScene();

// アニメーション
function animate() {
  engine.runRenderLoop(function () {
    scene.render();
    scene.meshes[0].rotation.y -= 0.01;
  });
}

// アニメーションを開始
animate();
