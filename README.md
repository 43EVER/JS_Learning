# JS_Learning
    
## 学习计划
    * css               ⚪
    * js                ⚪
    * html              ⚪
    * node.js           ⚪
    * vue.js            ⚪
    * express           ⚪
    * mongodb           ⚪
    * vuex              ⚪
    * vue-router        ⚪

## 小技巧
* 利用短路与执行代码
``` js
this.id && this.fetch();
```

## axios
* ajax框架
1. npm 安装
2. 直接导入到 Vue.prototype里
3. 在组件中写 this.$http.post()

## cors
* 跨域请求

## express
* web框架

## mongoose
``` js
const mongoose = require('mongoose');

// 1. 连接
mongoose.connect('mongodb://localhost:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

// 2. 建立模型
const schema = new mongoose.Schema({
    name: {type: String}
});

module.exports = mongoose.model('Category', schema);

// 3. 使用

// 基本使用
const Category = require('../../models/Category');
router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model);
});

// 带外键形式，默认查询的是ObjectId, 带populate查的是 Object
const schema = new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
});
const model = await Category.find().populate();
```

## Vue
* 需要重新学习的内容
    1. props
    2. slot