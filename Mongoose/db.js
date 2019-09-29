const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo_relation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const CategorySchema = new mongoose.Schema({
    name: { type: String }
}, {
    toJSON: { virtuals: true }
});

CategorySchema.virtual('posts', {
    localField: '_id',
    ref: 'Post',
    foreignField: 'categories',
    justOne: false,
});

const Category = mongoose.model('Category', CategorySchema);

const Post = mongoose.model('Post', new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }]
}));

async function main() {
    const cats = await Category.find().populate('posts');
    console.log(cats);
}

main();