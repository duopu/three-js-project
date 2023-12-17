import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// console.log(THREE.Scene, '2233');

// 创建一个三维场景 scene
const scene = new THREE.Scene();

// 给三维场景添加物体

// 定义一个几何体  长方体  床宽高各100w
const geometry = new THREE.BoxGeometry(100, 100, 100);


// 创建一个材质对象Material
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000, // 0xff0000设置材质颜色为红色
});


// 两个参数分别为几何体geometry、材质material
// 创建一个网格模型：表示物体
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

// 设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 10, 0);

// 把mesh添加到场景中
scene.add(mesh);


console.log('mesh', mesh)


// 定义相机输出画布的尺寸(单位:像素px)
const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度


// 实例化一个透视投影相机对象
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000);

//相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(200, 200, 200);

camera.lookAt(0, 0, 0);


// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();

renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)      canvas画布 宽高度

renderer.render(scene, camera); // //执行渲染操作   类比相机的拍照动作 嚓

document.body.appendChild(renderer.domElement); // 把渲染结果 canvas 画布，也就是所谓的照片  添加到网页页面上


// document.getElementById('webgl').appendChild(renderer.domElement);

// 设置相机控件轨道控制器 OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);


// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
controls.addEventListener('change', () => {
    renderer.render(scene, camera); // 重新执行渲染
    // 浏览器控制台查看相机位置变化
    console.log('camera.position', camera.position);
});// 监听鼠标、键盘事件
