const Joi = require('joi');
const modles = require('./../models');

const GROUP_NAME = 'shops';

module.exports = [
  {
    method: 'GET',// methods
    path: '/shop', // paths
    handler: async (request, reply) => { // handler
      // 查找数据, 并且通过attributes过滤掉铭感数据,例如用户的密码
      const result = await modles.shops.findAll({attributes: { exclude: ['password'] }});
      reply(result);
    },
    config: { // config
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        query: {
          limit: Joi.number().integer().min(1).default(10)
            .description('每页的条目数'),
          page: Joi.number().integer().min(1).default(1)
            .description('页码数'),
        },
      },
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
    },
  },
];