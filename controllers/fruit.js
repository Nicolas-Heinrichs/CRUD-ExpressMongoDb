const fruit = require('../models/fruit');
const Fruit = require('../models/fruit');

exports.createFruit = (req, res, next) => {
    const fruit = new Fruit({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        fruitId: req.body.fruitId
    });
    fruit.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneFruit = (req, res, next) => {
    Fruit.findOne({
        fruitId: req.params.id
    }).then(
        (fruit) => {
            res.status(200).json(fruit);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
exports.getByName = (req, res, next) => {
    Fruit.findOne(
        { name: req.params.name.toString() }
    ).then(
        (fruit) => {
            res.status(200).json(fruit);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyFruit = (req, res, next) => {
    Fruit.updateOne({ fruitId: req.params.id }, { ...req.body, fruitId: req.params.id }).then(
        () => {
            res.status(201).json({
                message: 'The fruit is updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteFruit = (req, res, next) => {
    Fruit.findOne({ _id: req.params.id }).then(
        (fruit) => {
            if (!fruit) {
                res.status(404).json({
                    error: new Error('No such fruit!')
                });
            }
            if (fruit.userID !== req.auth.userID) {
                res.status(400).json({
                    error: new Error('Unauthorized request!')
                });
            }
            Fruit.deleteOne({ fruitId: req.params.id }).then(
                () => {
                    res.status(200).json({
                        message: 'Deleted!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
        }
    );

};

exports.getAllFruit = (req, res, next) => {
    Fruit.find().then(
        (fruits) => {
            res.status(200).json(fruits);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
