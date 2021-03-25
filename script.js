var prevThread;
let showComments = true
const laprasImageUrl = "https://i.gyazo.com/e562afacc2024f7919a07b6d7fce2ced.png"
const pacchoImageUrlList = [
  "https://i.gyazo.com/0e96c364c098c1b7d8dcd3adcf104318.png",
  "https://i.gyazo.com/ee6f9c12588276e2516aa08e13a941cd.png",
  "https://i.gyazo.com/dd0f6762f96bd307f54547a11a0feef0.png",
  "https://i.gyazo.com/0286988198f7c0e11603c15110adfed8.png",
  "https://i.gyazo.com/ef008867e94000f817e9ebbda73f6f73.png",
  "https://i.gyazo.com/fca2e1faef68d083f438053766297853.png",
  "https://i.gyazo.com/f2e4b79b0b5360998668aacb2ad26e6e.gif",
]

function showComment(message, userName) {
  if (userName === undefined || userName === null) {
    userName = ''
  }
  var screen = document.body; // よくない
  var screenHeight = screen.offsetHeight;
  var screenWidth = screen.offsetWidth;
  var panelHeight = getPanelHeight();

  // コメントのエレメント作成
  var comment = document.createElement('span');

  // コメントへのメッセージの追加
  comment.textContent = `${userName}: ${message}`;
  // コメントのbodyへの追加
  document.getElementsByTagName('body')[0].appendChild(comment);

  var letterSize = screenHeight*0.05;

  comment.setAttribute('class', 'comment');

  // コメントのスタイル作成
  var commentStyle = {
    left: screenWidth + 'px',
    top: Math.floor((screenHeight - panelHeight - letterSize) * Math.random()) + 'px',
    fontSize: letterSize + 'px',
  }
  // スタイル設定
  for(var prop in commentStyle) {
    comment.style[prop] = commentStyle[prop];
  }


  // アニメーション
  $(comment).animate(
    {
      'left': -comment.offsetWidth + 'px'
    },
    {
      'duration': 6000,
      'easing': 'linear',
      'complete': function() {
        document.getElementsByTagName('body')[0].removeChild(comment);
      }
    }
  );
}

function showBarrageClapping(message) {
  var screen = document.body; // よくない
  var screenHeight = screen.offsetHeight;
  var screenWidth = screen.offsetWidth;

  // 5~10個をランダムで複製する
  var min = 5;
  var max = 10;
  var clappingCount = Math.floor( Math.random() * (max + 1 - min) ) + min;

  for (let i = 0; i < clappingCount; i++) {
    // コメントのエレメント作成
    var comment = document.createElement('span');

    // コメントへのメッセージの追加
    comment.textContent = message;
    // コメントのbodyへの追加
    document.getElementsByTagName('body')[0].appendChild(comment);

    var letterSize = screenHeight*0.05;

    comment.setAttribute('class', 'comment');

    // コメントのスタイル作成
    var commentStyle = {
      left: screenWidth + 'px',
      top: Math.floor((screenHeight - letterSize) * Math.random()) + 'px',
      fontSize: letterSize + 'px',
    }
    // スタイル設定
    for(var prop in commentStyle) {
      comment.style[prop] = commentStyle[prop];
    }

    // ランダムな速度で複製する
    var min = 4000;
    var max = 6000;
    var duration = Math.floor( Math.random() * (max + 1 - min) ) + min;

    // ランダムな開始位置で複製する
    var min = 0;
    var max = 100;
    var randomOffset = Math.floor( Math.random() * (max + 1 - min) ) + min;

    // アニメーション
    $(comment).animate(
      {
        'left': - comment.offsetWidth - randomOffset + 'px'
      },
      {
        'duration': duration,
        'easing': 'linear',
        'complete': function() {
          document.getElementsByTagName('body')[0].removeChild(comment);
        }
      }
    );
  }
}

function showImage(sourceUrl) {
  const imgEl = document.createElement('img');

  const w_height = $(window).height();
  const w_width = $(window).width();
  const position_h = Math.floor(Math.random() * w_height)
  const position_w = Math.floor(Math.random() * w_width);
  const size = Math.floor(Math.random() * 1000);
  const duration = Math.floor(Math.random() * 10000);

  $imgEl = $(imgEl)
  $imgEl.attr('src', sourceUrl)
  $imgEl.addClass('lapras-logo')
  $imgEl.css({'top': position_h, 'left': position_w})

  document.body.appendChild(imgEl);
  $imgEl.animate(
    {
      'width': `${size}px`
    },
    {
      'duration': duration,
      'easing': 'linear',
      'complete': function() {
          document.body.removeChild(imgEl);
      }
    }
  );
}

function showCommentWithCommend(message, userName) {
  if (userName === undefined || userName === null) {
    userName = ''
  }
  var screen = document.body; // よくない
  var screenHeight = screen.offsetHeight;
  var screenWidth = screen.offsetWidth;
  var panelHeight = getPanelHeight();
  var commentPanelWidth = getCommentPanelWidth()

  // コメントのエレメント作成
  var comment = document.createElement('span');

  // コマンドとメッセージを分離
  const pattern = /^([ue|shita|big|small|\s]+):(.*)$/;
  groups = message.match(pattern);
  commands = groups[1].split(' ')
  massageText = groups[2]

  // コメントへのメッセージの追加
  comment.textContent = `${userName}: ${massageText}`;
  // コメントのbodyへの追加
  document.getElementsByTagName('body')[0].appendChild(comment);

  var letterSize = screenHeight*0.05;

  comment.setAttribute('class', 'comment');

  // フォントサイズ変更
  var fontSize = letterSize;
  if (commands.includes('big')) {
    fontSize = letterSize + 30.0
  } else if (commands.includes('small')) {
    fontSize = letterSize - 30.0
  }

  // コメントのスタイル作成
  var top = Math.floor((screenHeight - fontSize) * Math.random());
  if (commands.includes('ue')) {
    top = 10
  } else if (commands.includes('shita')) {
    top = Math.floor(screenHeight - panelHeight - fontSize - 20)
  }

  // 出現場所の調整
  var left = screenWidth - commentPanelWidth;
  if (commands.includes('ue') || commands.includes('shita')) {
    left = (screenWidth - commentPanelWidth - comment.clientWidth) / 2
  }

  var commentStyle = {
    left: left + 'px',
    top: top + 'px',
    fontSize: fontSize + 'px',
  }

  // スタイル設定
  for(var prop in commentStyle) {
    comment.style[prop] = commentStyle[prop];
  }

  // アニメーション
  if (commands.includes('ue') || commands.includes('shita')) {
    $(comment).animate(
      {
        'left': commentStyle.left + 'px'
      },
      {
        'duration': 6000,
        'easing': 'linear',
        'complete': function() {
          document.getElementsByTagName('body')[0].removeChild(comment);
        }
      }
    );
  } else {
    $(comment).animate(
      {
        'left': -comment.offsetWidth + 'px'
      },
      {
        'duration': 6000,
        'easing': 'linear',
        'complete': function() {
          document.getElementsByTagName('body')[0].removeChild(comment);
        }
      }
    );
  }
}

function isLapras(message) {
  return ["lapras", "ラプラス"].some((w) => w === message)
}

function isPaccho(message) {
  return ["paccho", "ぱっちょ", "パッチョ"].some((w) => w === message)
}

function isClapping(message) {
  const pattern = /^[8８]+$/g;
  return message.match(pattern);
}

function havingCommand(message) {
  const pattern = /^([ue|shita|big|small|\s]+):(.*)$/;
  return message.match(pattern);
}

function isCommand(message) {
  const pattern = /^::/g;
  return message.match(pattern);
}

function doCommand(message) {
  switch (message) {
    case "::on":
      showComments = true;
      console.log("command: comments ON");
      break;
    case "::off":
      showComments = false;
      console.log("command: comments OFF");
      break;
    default:
      // do nothing
      console.log("undefined command.")
  }
}

var observer = new MutationObserver(records=>{
try {
  // テキスト欄の取得
  const thread = document.getElementsByClassName('z38b6 CnDs7d hPqowe')[0];
  // テキスト欄以外のDOM変化で発火したら無視
  if (prevThread != undefined && thread.isEqualNode(prevThread)) return;
  // ????
  if (thread.getElementsByClassName('gYckH').length == 1) return;
  // 比較用にグローバルに格納
  prevThread = thread.cloneNode(true);
  // メッセージそれぞれを配列として取得
  const messages = thread.getElementsByClassName('oIy2qc');
  // 最後のメッセージを取得
  const message = messages[messages.length-1].innerText;
  // 発言者取得
  const userNames = thread.getElementsByClassName('YTbUzc');
  // 最後の発言者取得
  const userName = thread.getElementsByClassName('YTbUzc')[userNames.length-1].innerText;

  // コマンドの制御
  if (isCommand(message)) {
    doCommand(message);
    return;
  }

  // コメント非表示ならなにもせずに終了
  if (!showComments) {
    return;
  }

  if (isClapping(message)) {
    showBarrageClapping(message)
    return;
  }

  if (isLapras(message)) {
    showImage(laprasImageUrl)
    return;
  }

  if (isPaccho(message)) {
    showImage(pacchoImageUrlList[Math.floor(Math.random() * pacchoImageUrlList.length)])
    return;
  }

  if (havingCommand(message)) {
    showCommentWithCommend(message, userName)
    return;
  }

  showComment(message, userName)
}
catch(e) {
  console.log(e)
  return;
}
});

const config = {
  attributes: true,
  subtree: true,
  childList: true,
  characterData: true
}
// コントロールパネル(マイクのON/OFFとかのボタンがあるところ)の高さを取得する
function getPanelHeight() {
  let panelHeight = 0;
  const panel = document.querySelector('div[jscontroller="kAPMuc"]');
  if (panel) {
    panelHeight = panel.clientHeight;
  }
  return panelHeight;
}

document.addEventListener('DOMContentLoaded', () => {
  // オブザーバー
  console.log('nico nico pre start')
  startObservationMeetsStarted()
});

let isChatObserved = false
function startObservationMeetsStarted() {
  console.log('start check node')
  const intervalId = setInterval(() => {
    // チャット画面
    const chats = document.getElementsByClassName('vvTMTb')
    if (chats.length === 0) {
      onCloseChat()
      return;
    }

    // チャット画面開いている
    // すでに監視中ならなにもしない
    if (isChatObserved) {
      return;
    }
    onOpenChat()
  }, 2000)
}

function onCloseChat() {
    if (isChatObserved) {
      // すでに監視中でチャット画面がないなら監視を解除
      observer.disconnect()
      isChatObserved = false
      console.log('nico nico end')
    }
}

function onOpenChat() {
    const chats = document.getElementsByClassName('vvTMTb')
    // オブザーバー
    observer.observe(chats[0], config);
    isChatObserved = true
    console.log('nico nico start')
}

// コメントパネル(コメントするところ)の横幅を取得する
function getCommentPanelWidth() {
  let panelWidth = 0;
  const panel = document.querySelector('div[jscontroller="kaNQxf"]');
  if (panel) {
    panelWidth = panel.clientWidth;
  }
  return panelWidth;
}