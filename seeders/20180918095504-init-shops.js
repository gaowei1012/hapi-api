'use strict';

// 时间戳
const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'shops',
    [
      {id: 1, name: '店铺1', thumb_url: '1.png', ...timestamps},
      {id: 2, name: '店铺2', thumb_url: '2.png', ...timestamps},
      {id: 3, name: '店铺3', thumb_url: '3.png', ...timestamps},
      {id: 4, name: '店铺4', thumb_url: '4.png', ...timestamps},
      {id: 5, name: '店铺5', thumb_url: '5.png', ...timestamps},
    ]
  ),
  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    // 删除shop表为1,2,3,4
    return queryInterface.bulkDelete('shops', {id: { [Op.in]: [1,2,3,4,5]}}, {});// 删除数据
  }
};
