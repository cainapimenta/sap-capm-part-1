const mysrv = function (srv) {
    srv.on('myFunc', (req, res) => {
        return `Hello world! ${req.data.msg}`;
    });
}

module.exports = mysrv;