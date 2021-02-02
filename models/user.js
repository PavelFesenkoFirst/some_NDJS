module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users",{
        id: {type: DataTypes.INTEGER.UNSIGNED, primaryKey: true,autoIncrement: true,allowNull: false},
        first_name: {type: DataTypes.TEXT('tiny') , allowNull: false},
        last_name: {type: DataTypes.TEXT('tiny') , allowNull: false},
        email: {type:DataTypes.STRING,allowNull: false},
        password: {type: DataTypes.STRING , allowNull: false},
        user_group_id: {type: DataTypes.INTEGER.UNSIGNED , allowNull: false},
        admin: { type: DataTypes.BOOLEAN, allowNull: true }
    });
    return users;
};