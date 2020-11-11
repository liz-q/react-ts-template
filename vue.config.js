const fs = require('fs');
const { name } = require('./package')

function getSubDirNameList(path) {
    return fs.readdirSync(path, {withFileTypes: true})
        .filter(file => file.isDirectory())
        .map(file => file.name)
}

const pageList = getSubDirNameList('src/pages');

const pagesMap = pageList
    .reduce((prev, page) => {
        prev[page] = {
            title: page,
            entry: `src/pages/${page}/main.js`,
            tempalte: 'public/index.html',
            filename: `${page}/index.html`
            // chunks: ['chunk-vendors', 'chunk-common', 'sale-manage-lang-en', 'bc-lang-en', page]
        }
        return prev
    }, {})
console.log(pagesMap)


module.exports = {
    publicPath: '/new-page-01/',
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    pages: pagesMap,
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}
