// 'drum'classを保有している要素をすべて取得
var drumBtn = document.querySelectorAll('.drum');

// drumBtn: array
// 配列の各要素に対してclickイベントを定義
// 指定されたボタンをクリック後、以下の動きを実施する。
// 1.指定された音楽を再生
// 2.クリックされた要素のアニメーション
for (var i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener('click', function () {

        var btnHTML = this.innerHTML;

        switchMusic(btnHTML);

        btnAnimation(btnHTML);
    });
}

// 指定されたキーボードのボタンを押下後、以下の動きを実施する。
// 1.指定された音楽を再生
// 2.押下された要素のアニメーション
document.addEventListener('keydown', function (event) {

    var pushedKey = event.key;

    switchMusic(pushedKey);

    btnAnimation(pushedKey);
});

// 引数で受け取ったparamに応じて、音楽を再生
// ex. param: 'w'
function switchMusic(param) {
    switch (param) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log('Error something went wrong');
    }
}

// 引数で受け取ったparamに応じて、要素を取得
// 'pressed'classを加える
// 0.1秒後に'pressed'classを除去する
function btnAnimation(currentKey) {
    var activeBtn = document.querySelector('.' + currentKey);
    activeBtn.classList.add('pressed');

    setTimeout(() => {
        activeBtn.classList.remove('pressed');
    }, 100);
}