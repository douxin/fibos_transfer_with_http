const { fibosClient, config } = require('./fibos_client');

const transferTo = function (toAccountName, amount, memo) {
    return fibosClient.contractSync("eosio.token").transferSync(
        config.accountName,
        toAccountName,
        amount,
        memo
    );
};

module.exports = {
    transferTo,
};