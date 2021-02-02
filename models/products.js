module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define("products",{
        id: {type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false},
        name: {type:DataTypes.STRING, allowNull: false},
        price: {type: DataTypes.INTEGER.UNSIGNED  , allowNull: false},
        category_id: {type: DataTypes.INTEGER , allowNull: false},
        description: {type: DataTypes.STRING , allowNull: false},
    });
    return products;
};