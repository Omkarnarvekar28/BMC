const router = require('express').Router();
const users = require('../controller/userController');
//const { checkToken } = require("../auth/token-validation");


//single data fetch using id 
router.get('/bookId', async function(req, res) {
    const result = await users.fetchBookInfo(req, res);
});
//insert the data from database 
router.post('/booking', async function(req, res) {
    const result = await users.insertBookInfo(req, res);
});
//user Dashboard 
router.get('/userdash', async function(req, res) {
    const result = await users.userdash(req, res);
});
//Admin Dashboard 
router.get('/admin-dash', async function(req, res) {
    const result = await users.admindash(req, res);
});
//User report
router.get("/report-user", async function(req, res) {
    const result = await users.reportuser(req, res);
});

//User filter report
router.get("/report-user-filter", async function(req, res) {
    const result = await users.reportuserfilter(req, res);
});

//Admin report
router.get("/report-admin", async function(req, res) {
    const result = await users.reportadmin(req, res);
});

//Admin filter report
router.get("/report-admin-filter", async function(req, res) {
    const result = await users.reportadminfilter(req, res);
});

router.get("/updatestatus", async function(req, res) {
    const result = await users.userupdatestatus(req, res);
});


module.exports = router;