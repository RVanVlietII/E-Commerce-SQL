const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      include: [Product]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findOne({
      where: { id: req.params.id },
      include: [Product]
    });
    if (!tagsData) {
      res.status(404).json({ message: "Tag not found" });
    } else {
      res.status(200).json(tagsData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const { product_id, tag_name } = req.body;
    // const product = await Product.finkByPk(product_id);
    // if (!product) {
    //   return res.status(404).json({ message: 'Product Not Found'});
    // }
    // let tag = await Tag.findOne({
    //   where: { tag_name },
    // })
    
    // if (!tag) {
    //   tag = await Tag.create({ tag_name });
    // }

    // await ProductTag.create({
    //   product_id: product.id,
    //   tag_id: tag.id,
    // })
    const newTag = await Tag.create({ tag_name });

    if (product_id) {
      await ProductTag.create({ product_id, tag_id: newTag.id });
    }
    
    // const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const [updatedRows] = await Tag.update(req.body, {
      where: { id: req.params.id }
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: "Tag not found" });
    } else {
      res.status(200).json({ message: "Tag update Successful"});
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);

    if(!tag) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }

    await tag.destroy();
    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
