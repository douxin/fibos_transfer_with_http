const fibos = require('fibos.js');

const config = {
    chainId: '6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a',
    publicKey: 'YOUR_PUB_KEY',
    privateKey: 'YOUR_PRI_KEY',
    accountName: 'YOUR_ACCOUNT_NAME',
    httpEndpoint: 'http://se-rpc.fibos.io:8870',
};

const fibosClient = fibos({
    chainId: config.chainId,
    keyProvider: config.privateKey,
    httpEndpoint: config.httpEndpoint,
    logger: {
        log: console.log,
        err: console.error,
    }
});

module.exports = { fibosClient, config };