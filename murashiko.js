var startBtn = document.getElementById('start');
var isStart = false;
var slot = document.getElementById('slot');
var beautie = '';
var intervalID = -1;
var beauties = [];

beauties = [
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=1042219/">架乃ゆら</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=1033841/">麻里梨夏</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=1031805/">桃乃木かな</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=1006229/">葵つかさ</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=1030262/">三上悠亜</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=1025419/">天使もえ</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=28135/">成瀬心美</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=1019076/">鈴村あいり</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=1036237/">鳳かなめ</a></div>',
  '<div><a href="https://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=16380/">Rio</a></div>',
  '<div><a href="https://www.dmm.co.jp/mono/dvd/-/list/=/article=actress/id=1051683/">筧ジュン</a></div>',
  '<div><a href="https://www.dmm.co.jp/mono/dvd/-/list/=/article=actress/id=1044046/">河合あすな</a></div>',
  '<div><a href="https://www.dmm.co.jp/mono/dvd/-/list/=/article=actress/id=1032130/">佐々木あき</a></div>',
];

function clickedStart() {
  'use strict';
  isStart = true;
  startBtn.disabled = true;
  intervalID = setInterval(function () {
    if (isStart === true) {
      beautie = beauties[Math.floor(Math.random() * beauties.length)];
      slot.className = 'name';
      document.getElementById("actress").innerHTML = beautie;
    }
  }, 100);
}

function clickedStop() {
  'use strict';
  clearTimeout(intervalID);
  startBtn.disabled = "";
  isStart = false;

  slot.className = 'name';
  document.getElementById("actress").innerHTML = beautie;
}