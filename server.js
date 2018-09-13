const http = require('http');
const transfer = require('./transfer');

const rootServer = {
    '/transfer': req => {
        const { shareId, accountName, amount, memo } = req.json();
        const { key } = req.query;
        if (key !== '81929a8f-8c28-4d9b-be3a-fff25bb6f21a') {
            req.response.json({
                code: -1,
                errMsg: 'no permission',
            });
        } else {
            try {
                const result = transfer.transferTo(accountName, amount, memo);
                console.log(result);
                if (result && result['transaction_id']) {
                    req.response.json({
                        code: 0,
                        data: {
                            shareId,
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
    }
};
const server = new http.Server(3091, rootServer);

server.run();