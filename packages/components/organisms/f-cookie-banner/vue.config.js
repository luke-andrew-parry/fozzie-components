const path = require('path');

const rootDir = path.join(__dirname, '..', '..');
const sassOptions = require('../../../../config/sassOptions')(rootDir);

// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('scss-importer')
            .test(/\.scss$/)
            .use('importer')
            .loader('sass-loader')
            .options({
                ...sassOptions,
                // eslint-disable-next-line quotes
                additionalData: `@use "../assets/scss/common.scss";`
            });

        config.externals({
            'js-cookie': 'js-cookie'
        });
    },
    pluginOptions: {
        lintStyleOnBuild: true
    }
};
