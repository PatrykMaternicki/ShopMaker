const baseConfig = require('./webpack.config.base.js');
const prodConfig  = {
    mode: 'production',
    watch: false
};

module.exports = Object.assign(baseConfig, prodConfig);
