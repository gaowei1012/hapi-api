
/**
 * 商品数据模型
 * @param {*} sequlize 
 * @param {*} DataTypes 
 */

module.exports = (sequlize, DataTypes) => sequlize.define(

    'goods',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        shop_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        thumb_url: DataTypes.STRING
    },
    {
        tableName: 'goods'
    }
);