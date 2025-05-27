const Shop = require("../models/shop.model");

module.exports.createShop = (req, res, next) => {
  const shop = new Shop({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId,
  });
  shop.save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

module.exports.getOneShop = (req, res, next) => {
  Shop.findOne({
    _id: req.params.id,
  })
    .then((shop) => {
      res.status(200).json(shop);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

module.exports.modifyShop = (req, res, next) => {
  const shop = new Shop({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId,
  });
  Shop.updateOne({ _id: req.params.id }, shop)
    .then(() => {
      res.status(201).json({
        message: "Shop updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

module.exports.deleteShop = (req, res, next) => {
  Shop.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

module.exports.getAllShop = (req, res, next) => {
  const page = req.query.page || 1;
  const limit = 3;
  const skip = (page - 1) * limit;

  try {
    Shop.find()
      .skip(skip)
      .limit(limit)
      .then((docs) => {
        res.send(docs);
      });
  } catch (error) {
    res.status(400).json({
      error: error
    });
  }
};
