const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwaggers = require('./plugins/hapi-swagger');

/**
 * 使用evn会创建一个host
 * http://DESKTOP-TVRJ7C4:50568
 * 来启动服务器
 */

// server
const server = new Hapi.Server();

// 配置服务参数
server.connection({
    port: config.port,
    host: config.host,
});

const init = async () => {

    await server.register([
        // 为系统使用hapi-swagger
        ...pluginHapiSwaggers
    ])

    server.route([
        // 创建一个路由 hello hapi
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders
    ]);

    // start server
    await server.start();
    console.log(`Server running at:${server.info.uri}`);
}

init();
