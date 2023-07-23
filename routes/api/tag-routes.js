const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
      const tagData = await Tag.findAll({
        include: [{ model: Product }]
      });
      
      res.status(200).json(tagData );
  } catch (err){
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    }); 

    if (!tagById ) {
      res.status(200).json({message: 'No tag with that ID found'});
      return; 
    };

    res.status(200).json(tagById);

  }catch (err) {
    res.status(500).json(err); 
}
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create ({
      tag_name: req.body.tag_name
    })

    res.status(200).json(newTag);
    console.log ('A new tag has been added')

  } catch (err) {
    res.status(500).json(err); 
  };
});

router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update ({
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    });

    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!tagById) {
      res.status(200).json({message: 'No tag with that ID found'});
      return; 
    };
    
    res.status(200).json(updateTag); 
    console.log("Category Updated")

  } catch (err) {
    res.status(500).json(err); 
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy (
      {
        where: {
          id: req.params.id
        }
    });

    if (!deleteTag) {
      res.status(200).json( {message: 'No tag with that ID found'} );
      return;
    };
    
    res.status(200).json(deleteTag); 

  } catch (err) {
    res.status(500).json(err); 
  };

});

module.exports = router;
