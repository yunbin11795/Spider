/**
 * Created by yubin on 2017/11/10.
 */
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test',{useMongoClient:true});
var Schema=mongoose.Schema;
var bookSchema=new Schema({
    id:Number,
    imgUrl:String,
    title:String,
    author:String,
    detail:String,
    rating:String
});
var Book=mongoose.model('book',bookSchema);
module.exports=Book;
