module.exports = (sequelize, DataTypes) => {
    const orders = sequelize.define("orders",{
        id: {type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false},
        user_id: {type:DataTypes.INTEGER, allowNull: false},
        created_at: {type: DataTypes.DATE , allowNull: false},
    });
    return orders;
};