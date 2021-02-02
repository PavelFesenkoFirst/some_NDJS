module.exports = (sequelize, DataTypes) => {
    const products_categories = sequelize.define("products_categories",{
        id: {type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false},
        name: {type:DataTypes.STRING, allowNull: false},
    });
    return products_categories;
};