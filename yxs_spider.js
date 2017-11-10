/**
 * Created by yubin on 2017/11/1.
 */

var cheerio=require('cheerio');
var request=require('request');
var iconv =require('iconv-lite');
var url='https://book.douban.com/latest?icn=index-latestbook-all';
var Book=require('./db');
request.get({
    url:url
},function (err,res,body) {
    var $=cheerio.load(body);
    var img=$('.cover-col-4 li img');
    var title=$('.cover-col-4 h2 a');
    var author=$('.cover-col-4 .color-gray');
    var detail=$('.cover-col-4 .detail-frame p:last-child');
    var rating=$('.cover-col-4 .rating .font-small');

    for(var i=0,len=img.length;i<len;i++){
        var book=new Book({
            id:i,
            imgUrl:img.eq(i).attr('src'),
            title:title.eq(i).text(),
            author:author.eq(i).text().trim(),
            detail:detail.eq(i).text().trim(),
            rating:rating.eq(i).text().trim()
        });
        book.save(function (err) {
            if(err){
                console.log('保存失败');
            }
        })

    }
});

