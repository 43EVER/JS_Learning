module.exports = app => {
    const express = require('express');
    const jwt = require('jsonwebtoken');
    const AdminUser = require('../../models/AdminUser');
    const assert = require('http-assert');
    const router = express.Router({
        mergeParams: true
    });
    
    const authMiddleware = require('../../middleware/auth');
    const resourceMiddleware = require('../../middleware/resource');

    // 创建
    router.post('/', authMiddleware(), async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });

    // 根据id修改
    router.put('/:id', authMiddleware(), async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    });

    // 获取
    router.get('/', authMiddleware(), async (req, res) => {
        const queryOptions = {};
        if (req.Model.modelName) {
            if (req.Model.modelName == 'Category')
                queryOptions.populate = 'parent';
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10);
        res.send(items);
    });

    // 根据id获取
    router.get('/:id', authMiddleware(), async (req, res) => {
        const model = await req.Model.findById(req.params.id);
        res.send(model);
    });

    // 根据id删除
    router.delete('/:id', authMiddleware(), async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id);
        res.send({
            success: true
        });
    });
    
    // 根据URL拿到Model，并挂载到req上
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router);

    const multer = require('multer');
    const upload = multer({dest: __dirname + '/../../uploads'});
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async(req, res) => {
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    });

    app.post('/admin/api/login', async(req, res) => {
        const { username, password } = req.body;

        // 1.查找用户
        const user = await AdminUser.findOne({username}).select('+password');
        assert(user, 422, '用户不存在');

        // 2.校验密码
        const isValid = require('bcrypt').compareSync(password, user.password);
        assert(isValid, 422, '密码不正确');

        // 3.返回token
        const token = jwt.sign({ id: user._id }, app.get('secret'));
        res.send({token});
    });
    // 错误处理
    app.use(async(err, req, res, nxt) => {
        return res.status(err.statusCode || 500).send({
            message: err.message
        });
    });
}