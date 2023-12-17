import * as THREE from 'three';

console.log(THREE.Scene, '2233');

// 创建一个三维场景 scene
const scene = new THREE.Scene();

// 给三维场景添加物体

// 定义一个几何体  长方体  床宽高各100
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



