//引入 nodeJS 内置模块 path
const path = require('path');

module.exports = {
    // 模式
    mode: 'development', // 也可以使用 production
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 打包文件夹
        path: path.resolve(__dirname, 'dist'),
        // 打包文件
        filename: 'hd-utils.js',
        // 向外暴露的对象的名称
        library: 'utils',
        // 打包生成库可以通过esm/commonjs/requirejs的语法引入
        libraryTarget: 'umd',
    },
}