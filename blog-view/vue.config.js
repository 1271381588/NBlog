module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views',
                'plugins': '@/plugins'
            }
        }
    },
    publicPath: process.env.NODE_ENV === "production" ?
        `https://cdn.jsdelivr.net/gh/1271381588/NBlog@1.0.6/blog-view/dist/` : "/"

}