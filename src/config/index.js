function getConfig() {
    const env = process.env.NODE_ENV || 'local';

    return require(`./config.${env}`).getConfig();
}

module.exports = {
    getConfig
};