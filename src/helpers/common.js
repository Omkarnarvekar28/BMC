//success msg
function sendSuccessResponse(req, res, result) {
    res.status(200);
    res.type('json');
    res.write(JSON.stringify(result));
    res.end();
}
//failed msg
function sendFailedResponse(err) {
    console.log(err);
}

module.exports = {
    sendSuccessResponse,
    sendFailedResponse
}