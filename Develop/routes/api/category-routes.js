const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const dbCategoriesData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(dbCategoriesData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const dbCategoriesData = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }]
    })
    res.status(200).json(dbCategoriesData);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const dbCategoriesData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(201).json(dbCategoriesData);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const existingCategory = await Category.findOne(
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (!existingCategory) {
      return res.status(404).json({ error: "No matching category with id" });
    }
      existingCategory.category_name = req.body.category_name;
      
      await existingCategory.save();

      res.status(200).json({ message: "Category update Successful!"});
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    // Find the category by its `id` value and delete it
    const existingCategory = await Category.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!existingCategory) {
      res.status(404).json({ error: "No matching category and ID found" });
    } else {
      await existingCategory.destroy();
      res.status(204).end(); // Respond with a 204 No Content status upon successful deletion
    }

  } catch(err) {
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;
