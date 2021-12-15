const {
    insertBook,
    getBookById,
    getReportuser,
    getReportadmin,
    getReportuserfilter,
    getReportadminfilter,
    getuserdash,
    getadmindash,
    getuserupdatestatus
} = require('../middlewares/users');

const {
    sendSuccessResponse,
    sendFailedResponse
} = require('../helpers/common');

const { uservalidation } = require('../validation/uservalidation');
const { sign } = require("jsonwebtoken");

//fetch user details by userid
async function fetchBookInfo(req, res) {
    try {
        const { booking_id } = req.query;
        console.log(booking_id);
        const result = await getBookById(booking_id);
        res.send(
            result
        )
    } catch (e) {
        return sendFailedResponse(e);
    }
}


//insert user details
async function insertBookInfo(req, res) {
    const { error } = uservalidation(req.body);
    const userObj = {
        configuration_id: req.body.configuration_id,
        user_id: req.body.user_id,
        status: req.body.status,
        date_of_booking: req.body.date_of_booking,
        purpose: req.body.purpose,
        reamarks: req.body.reamarks,
        reject: req.body.reject
    };
    if (error) {
        res.json({
            success: false,
            statusCode: 500,
            error_msg: error.details[0].message
        })
    } else {
        const result = await insertBook(userObj);
        res.json({
            success: true,
            statusCode: 200,
            error_msg: "Data Inserted Successfully"
        })
    }
}

//Report user
async function Reportuser(req, res) {
    try {
        const { userid } = req.query;
        const result = await getReportuser(userid);
        res.json({
            success: true,
            statusCode: 200,
            error_msg: result
        })
    } catch (e) {
        return sendFailedResponse(e);
    }
}

//Report user filter
async function reportuserfilter(req, res) {
    try {

        const userfilter = {
            userid: req.query.userid,
            fromdate: req.query.fromdate,
            todate: req.uery.todate
        }
        const result = await getReportuserfilter(userfilter);
        res.json({
            success: true,
            statusCode: 200,
            error_msg: result
        })
    } catch (e) {
        return sendFailedResponse(e);
    }
}



//Report Admin
async function Reportadmin(req, res) {
    try {
        //const { userid } = req.query;
        const result = await getReportadmin();
        res.json({
            success: true,
            statusCode: 200,
            error_msg: result
        })
    } catch (e) {
        return sendFailedResponse(e);
    }
}


//Report Admin
async function reportadminfilter(req, res) {
    try {
        //const { userid } = req.query;
        const userfilter = {
            userid: req.query.userid,
            fromdate: req.query.fromdate,
            todate: req.query.todate,
            status: req.query.status
        }
        const result = await getReportadminfilter();
        res.json({
            success: true,
            statusCode: 200,
            error_msg: result
        })
    } catch (e) {
        return sendFailedResponse(e);
    }
}

//user dashboard
async function userdash(req, res) {
    try {
        const { userid } = req.query;
        const result = await getuserdash(userid);
        res.send(
            result
        )
    } catch (e) {
        return sendFailedResponse(e);
    }
}

//admin dashboard
async function admindash(req, res) {
    try {
        //const { userid } = req.query;
        const result = await getadmindash();
        res.json({
            success: true,
            statusCode: 200,
            error_msg: result
        })
    } catch (e) {
        return sendFailedResponse(e);
    }
}

//user update status
async function userupdatestatus(req, res) {
    try {
        const { booking_id } = req.query;
        const result = await getuserupdatestatus(booking_id);
        res.send({ result })
    } catch (e) {
        return sendFailedResponse(e);
    }
}


module.exports = {
    fetchBookInfo,
    insertBookInfo,
    Reportuser,
    Reportadmin,
    reportuserfilter,
    reportadminfilter,
    userdash,
    admindash,
    userupdatestatus
};