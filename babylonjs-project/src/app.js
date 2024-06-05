window.addEventListener("DOMContentLoaded", () => {
  // Get the canvas element
  const canvas = document.getElementById("renderCanvas");

  // Generate the BABYLON 3D engine
  const engine = new BABYLON.Engine(canvas, true);

  // Create the scene
  const createScene = function () {
    // Create a basic BJS Scene object
    const scene = new BABYLON.Scene(engine);

    // Create a FreeCamera, and set its position
    const camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 0, -5),
      scene
    );

    // Target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // Disable camera control
    camera.inputs.clear();

    // Create a basic light
    const light = new BABYLON.DirectionalLight(
      "light1",
      new BABYLON.Vector3(-1, 1, 1), // 光源の方向を右から左へ変更
      scene
    );
    light.intensity = 0.7;

    // Create a built-in "box" shape
    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);

    // Create a basic material and set its color
    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseColor = new BABYLON.Color3(0, 1, 0); // Green color
    box.material = material;

    scene.clearColor = new BABYLON.Color4(1, 1, 1, 1); // 背景色を白に設定

    return scene;
  };

  const scene = createScene();

  // Animation
  const animate = function () {
    engine.runRenderLoop(function () {
      scene.render();
      scene.meshes[0].rotation.y -= 0.01;
    });
  };

  // Start the animation
  animate();
});
