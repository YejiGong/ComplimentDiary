
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api',{
            target: 'http://15.164.166.89',
            changeOrigin:true,
        })
    )
}
