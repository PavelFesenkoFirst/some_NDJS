const db = require("../models");

class CategoryController {

    async getCategoryList(req,res){
        try {
            const categoryList = await db.products_categories.findAll();
            res.send(categoryList);
        }
        catch (e) {
            console.log(e)
        }
    }

    async addProductCategories(req,res){
        try {
            const {name} = req.body
            console.log({name})
            const productsCategories = await db.products_categories.create({name});
            res.send({message: 'Categories added', productsCategories: productsCategories})
        }
        catch (e) {
            console.log(e)
        }
    }

    async editProductCategories(req,res){
        try {
            const {productsCategories_id, update} = req.body

            for(let element of update){
                const {column, value} = element;
                await db.products_categories.update({[column] : value},{ where: { id: productsCategories_id} })
            }

            const productsCategories = await db.products_categories.findOne({where: {id: productsCategories_id} })
            res.send({message: 'Categories edit', productsCategories: productsCategories})
        }
        catch (e) {
            console.log(e)
        }
    }

    async deleteProductCategories(req,res){
        try {
            const {productsCategories_id} = req.body
            await db.products_categories.destroy({ where: { id: productsCategories_id} })
            res.send({status: "delete complete"})
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = new CategoryController();