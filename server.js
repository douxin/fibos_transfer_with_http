const http = require('http');
const transfer = require('./transfer');

const rootServer = {
    '/transfer': req => {
        const { accountName, amount, memo } = req.json();

        try {
            const result = transfer.transferTo(accountName, amount, memo);
            console.log(result);
            if (result && result['transaction_id']) {
                req.response.json({
                    code: 0,
                    data: {
                        accountName,
                        amount,
                        memo,
                        transferResult: result
                    }
                });
            } else {
                req.response.json({
                    code: -1,
                    errMsg: 'transfer failed'
                });
            }
        } catch (e) {
            req.response.json({
                code: -1,
                errMsg: e
            });
        }
    }
};
const server = new http.Server(3091, rootServer);

server.run();