const db = require("../models");
const moment = require("moment");

class OrderController {
    async getOrderList(req,res){
        const id = req.user.id;
        try {
            let result=[];
            const orders = await db.orders.findAll({where: {id}})

            for (const order of orders) {
                const orderProducts = await db.order_products.findAll({
                    attributes: ['product.id', 'product.name','order_products.count','order_products.total_price'],
                    where: {order_id: order.id},
                    include: {model: db.products, raw: true}
                });
                result.push({order_id: order.id, order_products: orderProducts})
            }
            res.send({orders: result})
        }
        catch (e) {
            console.log(e)
        }
    }

    async addOrder(req, res){
        const id = req.user.id;
        try {
            const {products} = req.body;
            const order = await db.orders.create({
                id,
                created_at: moment().format('YYYY-MM-DD HH:mm:ss')
            })
            for (const userProduct of products) {
                const product= await db.products.findOne({where: {id: userProduct.product_id}})
                await db.order_products.create({
                    order_id: order.id,
                    product_id: userProduct.product_id,
                    count: userProduct.count,
                    total_price: product.price * userProduct.count
                })
            }
            res.send({order:"created", order_id: order.id})
        }catch (e) {
            console.log(e);
        }
    }
}

module.exports = new OrderController()
