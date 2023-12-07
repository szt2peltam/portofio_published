import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
const canvas = document.querySelector("#legopic")
const GROUP = new THREE.Group();
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x121212)
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight, false);
if(window.innerWidth)
camera.position.setZ(50);
camera.position.setX(-25);


renderer.render(scene,camera);
const pictureOfMe = new THREE.TextureLoader().load("pictures/rocker.jpeg")




const geometry = new THREE.CylinderGeometry( 15, 15, 1.225,64 ); 
const material = new THREE.MeshStandardMaterial( {map: pictureOfMe} ); 
const cylinder = new THREE.Mesh( geometry, material );

 GROUP.add(cylinder)
// outsideRing
const geometr2 = new THREE.CylinderGeometry( 15, 15, 1.225,64,1,true ); 
const materia2 = new THREE.MeshStandardMaterial( {color:0xFFFFFF} ); 
const cylinde2 = new THREE.Mesh( geometr2, materia2 );
GROUP.add(cylinde2)







//blue ring
const geometry2 = new THREE.RingGeometry( 15, 13,64); 
const material2 = new THREE.MeshStandardMaterial( { color: 0xFFF , side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry2, material2 );
 GROUP.add(mesh)

 mesh.position.y += 0.7
 mesh.rotation.x = THREE.MathUtils.degToRad(90)


 //backside



//blackring1
const geometry3 = new THREE.RingGeometry( 15, 14,64); 
const material3 = new THREE.MeshStandardMaterial( { color: 0x000000 , side: THREE.DoubleSide } );
const mesh2 = new THREE.Mesh( geometry3, material3 );
 GROUP.add(mesh2)

 mesh2.position.y += 0.71
 mesh2.rotation.x = THREE.MathUtils.degToRad(90)

//blackring1
const geometry4 = new THREE.RingGeometry( 0, 15,64); 
const material4 = new THREE.MeshStandardMaterial( { color: 0xFFFFFF , side: THREE.DoubleSide } );
const mesh4 = new THREE.Mesh( geometry4, material4 );
 GROUP.add(mesh4)

 mesh4.position.y += -0.65
 mesh4.rotation.x = THREE.MathUtils.degToRad(90)





const gridhelper = new THREE.GridHelper(200,50);

const light = new THREE.AmbientLight( 0xFFFFFF,1 );
scene.add( light );

scene.add(light) 
// const controls = new OrbitControls(camera, renderer.domElement);
scene.add(GROUP)
function animate(){
    requestAnimationFrame(animate);


    if(window.innerWidth < 824){

        GROUP.position.x = -25
        GROUP.position.y = -15

    } 
    else if(window.innerWidth < 824){

        GROUP.position.x = -23
        GROUP.position.y = -10

    } 
    else if(window.innerWidth < 859) GROUP.position.x = -9
    else if(window.innerWidth < 941) GROUP.position.x = -7
    else if(window.innerWidth < 1101) GROUP.position.x = -5
    GROUP.rotation.x += .01;
    GROUP.rotation.y += .001;
    GROUP.rotation.z += .001;


    // controls.update();

    renderer.render(scene,camera);
}
animate()


function addStar(){
    const geo = new THREE.SphereGeometry(0.25,24,24);
    const mat = new THREE.MeshStandardMaterial({color:0xFFFFFF});
    const star = new THREE.Mesh(geo,mat);

    const x = THREE.MathUtils.randFloatSpread(200);
    const y = THREE.MathUtils.randFloatSpread(200);
    const z = THREE.MathUtils.randFloatSpread(100);
    star.position.set(x,y,z);
    scene.add(star)
}

for (let index = 0; index < 200; index++) {
    addStar()
    
}