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
* slot
    * 匿名插槽 <slot> </slot>
    * 具名插槽 <slot name="fuck"> </slot>
    * 作用域插槽
        * 父组件有数据不知道怎么渲染，传递给子组件
        * 子组件渲染完了，不知道这数据有什么用，通过 在子组件里 加上 <slot :todo="todo"> </slot>
        * 父组件通过下述方式，就能从子组件拿到数据了，关于这里的template，被一个不可见的元素包裹，方便渲染用，在dom中并没有这个
        * 换成div也能跑，但dom中就有这个标签了
        ``` js
        <child-component :todos="todos">
            <template slot-scope="scope">
                {{scope.todo}}
            </template>
        </child-component>
        ```

## inflection
    * classify
## multer

## vue2-editor
    * 富文本编辑器

## jsonwebtoken