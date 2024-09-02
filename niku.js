'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// // 各画像のパス 
// const images = {
//   rawMomo: 'img_deta/momo_nama.jpeg', // ももにくの画像のパス
//   rawMune: 'img_deta/mune_nama.jpeg', // むねの画像のパス
//   rawSeseri: 'img_deta/seseri_nama.jpeg', // くびの画像のパス
//   rawTeba: 'img_deta/teba_nama.jpeg', // てばさきの画像のパス
//   rawReba: 'img_deta/reba_nama.jpeg', // ればーの画像のパス
//   momo:'img_deta/momo.jpeg', // 調理したももにくの画像のパス
//   mune:'img_deta/momo.jpeg', // 調理したむねの画像のパス
//   seseri:'img_deta/momo.jpeg', // 調理したくびの画像のパス
//   teba:'img_deta/momo.jpeg', // 調理したてばさきの画像のパス
//   reba:'img_deta/momo.jpeg', // 調理したればーの画像のパス
// };

// ももにくに画像パスを入れ替え
function momoPartSelect() {
  const rawMeatImage = document.getElementById("rawMeatImage"); 
  const cookedMeatImage = document.getElementById("cookedMeatImage");
  //console.log(newImg);
  rawMeatImage.src = 'momo_nama.jpeg';
  cookedMeatImage.src = 'momo.jpg';
}

// ももにくボタン押したら
let momoBotton = document.getElementById("momoBotton");
momoBotton.addEventListener("click", momoPartSelect);


// むねにくに画像パスを入れ替え
function munePartSelect() {
  const rawMeatImage = document.getElementById("rawMeatImage"); 
  const cookedMeatImage = document.getElementById("cookedMeatImage");
  rawMeatImage.src = 'mune_nama.jpeg';
  cookedMeatImage.src = 'mune.jpg';
}

// むねにくボタン押したら
let muneBotton = document.getElementById("muneBotton");
muneBotton.addEventListener("click", munePartSelect);

// てばさきに画像パスを入れ替え
function tebaPartSelect() {
  const rawMeatImage = document.getElementById("rawMeatImage"); 
  const cookedMeatImage = document.getElementById("cookedMeatImage");
  rawMeatImage.src = 'teba_nama.jpg';
  cookedMeatImage.src = 'teba.jpg';
}

// てばさきボタン押したら
let tebaBotton = document.getElementById("tebaBotton");
tebaBotton.addEventListener("click", tebaPartSelect);

// せせりに画像パスを入れ替え
function seseriPartSelect() {
  const rawMeatImage = document.getElementById("rawMeatImage"); 
  const cookedMeatImage = document.getElementById("cookedMeatImage");
  rawMeatImage.src = 'seseri_nama.jpg';
  cookedMeatImage.src = 'seseri.jpg';
}

// せせりボタン押したら
let seseriBotton = document.getElementById("seseriBotton");
seseriBotton.addEventListener("click", seseriPartSelect);

// ればーに画像パスを入れ替え
function rebaPartSelect() {
  const rawMeatImage = document.getElementById("rawMeatImage"); 
  const cookedMeatImage = document.getElementById("cookedMeatImage");
  rawMeatImage.src = 'reba_nama.jpg';
  cookedMeatImage.src = 'reba.jpg';
}

// ればーボタン押したら
let rebaBotton = document.getElementById("rebaBotton");
rebaBotton.addEventListener("click", rebaPartSelect);
