let scene, camera, renderer, cube;
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75, //Camera frustum vertical field of view.
    window.innerWidth / window.innerHeight, //Camera frustum aspect ratio
    0.1, // Camera frustum near plane
    1000 // Camera frustum far plane
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  //   const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

  const texture = new THREE.TextureLoader().load("textures/metalbox.jpg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();
