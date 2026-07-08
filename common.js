
(function ($) {
  'use strict';

  //合計問題数
  let $questionTotalNum = 5;

  const prefecturalCapital = [
    //配列の中身は先ほど紹介したものと同じなので省略
  ];

  //現在の質問数
  let $currentNum = 0

  //得点
  let $pointPerCorrect = 10;

  let questionObject = (function () {
    let Obj = function ($target) {

      //質問の番号
      this.$questionNumber = $target.find('.quiz-question-number');

      //質問文
      this.$questionName = $target.find('.quiz-question');

      //選択肢ボタン
      this.$questionButton = $target.find('.quiz-button');
      this.$button01 = $target.find('.button01');
      this.$button02 = $target.find('.button02');
      this.$button03 = $target.find('.button03');
      this.$button04 = $target.find('.button04');

      //選択肢のテキスト
      this.$answer01 = $target.find('.quiz-text01');
      this.$answer02 = $target.find('.quiz-text02');
      this.$answer03 = $target.find('.quiz-text03');
      this.$answer04 = $target.find('.quiz-text04');

      this.init();
    };
    Obj.prototype = {
      //初回設定
      init: function () {
        //イベント登録
        this.event();
      },
      event: function () {
          //ここにやりたいことを書く
          return false;
        });
      },
    };
    return Obj;
  })();

  let quiz = $('.quiz');
  if (quiz[0]) {
    let queInstance = new questionObject(quiz);
  }
})(jQuery);
