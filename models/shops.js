
/**
 * 店铺数据模型
 */

module.exports = (sequlize, DataTypes) => sequlize.define(
    'shops',
    {
        id: {
            type: DataTypes.INTEGER, // interge
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING, // staring
            allowNull: false
        },
        thum_url: DataTypes.STRING, // staring
    },
    {
        tableName: 'shops'
    }
)