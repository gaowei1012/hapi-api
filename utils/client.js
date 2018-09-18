const mysql2 = require('mysql2');

// 创建数据库连接
const connrction = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});

// 查询
connrction.query(
    'SELECT * FROM `test` WHERE `name` = "Page" AND `age` > 45', // myslq查询语句
    function (err, results, fields) {
        console.log(results);
        console.log(fields);
    }
);