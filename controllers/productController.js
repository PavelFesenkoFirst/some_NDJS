const db = require("../models");

class ProductController {

    async getProductList(req,res){
        try {
            const productList = await db.products.findAll();
            res.send(productList)
        }
        catch (e) {
            console.log(e)
        }
    }

    async addProduct(req, res){
        const {name, description, price, category_id} = req.body
        const product = await db.products.create({
            name,
            description,
            price,
            category_id
        })
        res.send({product: product})
    }
//check edit!!!!!!!!!!!!!!!!!!
    async editProduct(req, res){
        const {product_id, update} = req.body
        for(let element of update){
            const {column, value} = element;
            await db.products.update({[column] : value},{ where: { id: product_id} })
        }

        const product = await db.products.findOne({where: {id: product_id} })
        res.send({product: product})
    }

    async deleteProduct(req, res){
        const {product_id} = req.body
        await db.products.destroy({ where: { id: product_id} })
        res.send({status: "delete complete"})
    }
}

module.exports = new ProductController()