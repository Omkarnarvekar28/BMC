const {
    insertBookQuery,
    getBookByIdQuery,
    ReportuserDetails,
    ReportuserfilterDetails,
    ReportadminDetails,
    ReportadminfilterDetails,
    userdashDetails,
    admindashDetails,
    userupdatestatusquery
} = require('../native-queries/userQueries');
const {
    executeQuery
} = require('../config/database');
const json2csv = require('json2csv').parse;
const fs = require('fs');

//fetch user detail by userId 
async function getBookById(booking_id) {
    try {
        const records = await executeQuery(getBookByIdQuery(booking_id));
        return records;
    } catch (e) {
        console.log(e);
    }
}
//insert
async function insertBook(userObj) {
    try {
        const records = await executeQuery(insertBookQuery(userObj));
        return records;
    } catch (e) {
        console.log(e);
    }
}
//Report user
async function getReportuser(userObj) {
    try {
        const records = await executeQuery(ReportuserDetails(userObj));
        return records;
    } catch (e) {
        console.log(e);
    }
}

//Report user filter
async function getReportuserfilter(userObj) {
    try {
        const records = await executeQuery(ReportuserfilterDetails(userObj));
        return records;
    } catch (e) {
        console.log(e);
    }
}

//Report admin
async function getReportadmin() {
    try {
        const records = await executeQuery(ReportadminDetails());
        return records;
    } catch (e) {
        console.log(e);
    }
}


//Report admin filter
async function getReportadminfilter() {
    try {
        const records = await executeQuery(ReportadminfilterDetails());
        return records;
    } catch (e) {
        console.log(e);
    }
}

//user Dashboard
async function getuserdash(userid) {
    try {
        const records = await executeQuery(userdashDetails(userid));
        return records;
    } catch (e) {
        console.log(e);
    }
}

//user Dashboard
async function getadmindash() {
    try {
        const records = await executeQuery(admindashDetails());
        return records;
    } catch (e) {
        console.log(e);
    }
}

//user Dashboard
async function getuserupdatestatus(booking_id) {
    try {
        const records = await executeQuery(userupdatestatusquery(booking_id));
        return records;
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    insertBook,
    getBookById,
    getReportuser,
    getReportuserfilter,
    getReportadmin,
    getReportadminfilter,
    getuserdash,
    getadmindash,
    getuserupdatestatus
}