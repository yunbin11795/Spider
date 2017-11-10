/**
 * Created by yubin on 2017/11/2.
 */

var page=require('webpage').create();
phantom.outputEncoding='gbk';
page.open('https://www.bilibili.com/index.html',function (status) {
    if(status==="success"){
        page.evaluate(function() {
            // 此函数在目标页面执行的，上下文环境非本phantomjs，所以不能用到此js文件中其他变量

            // 此部分是为了在页面懒加载中模拟用户滑动页面至底
            var sH = document.body.scrollHeight;
            var speed = 300;
            var iNum = 0;
            var timer;
            var allTime = 6000;
            var count = allTime/speed;
            var result;
            timer = window.setInterval(function() {
                iNum++;
                window.document.body.scrollTop = sH/count*iNum;
                if (iNum === count) {
                    clearInterval(timer);
                    result=test();
                    console.log(result);
                }
            }, 30);
            function test() {
                var c=document.querySelectorAll(' .storey-box .spread-module .t ');
                var a='';
                for(var i=0;i<c.length;i++){
                    a+=c[i].innerHTML+'\n';
                }
            }

        });

    }else {
        console.log('加载失败');
    }
    phantom.exit(0);
});

