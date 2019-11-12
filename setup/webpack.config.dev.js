const baseConfig = require('./webpack.config.base.js');
const devConfig  = {
    mode: 'development',
    watch: true
};

module.exports = Object.assign(devConfig, baseConfig);
