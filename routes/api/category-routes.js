const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {      
      const categoryData = await Category.findAll({
        include: [{ model: Product}],
      });

      res.status(200).json(categoryData);
  } catch (err){
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    }); 

    if (!categoryById) {
      res.status(200).json({message: 'No category with that ID found'});
      return; 
    };

    res.status(200).json(categoryById);

  }catch (err) {
    res.status(500).json(err); 
}
});


router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create ({
      category_name: req.body.category_name
    })

    res.status(200).json(newCategory);
    console.log ('A new tag has been added')

  } catch (err) {
    res.status(500).json(err); 
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update ({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    });

    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryById) {
      res.status(200).json({message: 'No categories found'});
      return; 
    };
    
    res.status(200).json(updateCategory); 
    console.log("Category Updated")

  } catch (err) {
    res.status(500).json(err); 
  };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy (
      {
        where: {
          id: req.params.id
        }
    });

    if (!deleteCategory) {
      res.status(200).json( {message: 'No categories found'} );
      return;
    };
    
    res.status(200).json(deleteCategory); 

  } catch (err) {
    res.status(500).json(err); 
  };

});

module.exports = router;
