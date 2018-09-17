// config
const {env} = process; // 开发模式, 生产模式相互切换

const config = {
    host: env.HOST,
    port: env.PORT
}

module.exports = config;