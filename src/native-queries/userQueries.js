const { updateUserInfo } = require("../controller/userController");




//userid wise fetch data
const getBookByIdQuery = (booking_id) => {
    try {
        const query = `Select user_details.user_first_name,user_details.user_last_name,cube_booking.booking_id,cube_booking.purpose,cube_booking.status,cube_booking.applied_date
        from user_details 
        inner join cube_booking on user_details.user_id = cube_booking.user_id where cube_booking.booking_id = ${booking_id}`;
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};
//insert
const insertBookQuery = (userObj) => {
    try {

        const configuration_id = userObj.configuration_id;
        const user_id = userObj.user_id;
        const status = userObj.status;
        const date_of_booking = userObj.date_of_booking;
        const purpose = userObj.purpose;
        const reamarks = userObj.reamarks;
        const reject = userObj.reject;


        const query = `Insert into cube_booking (configuration_id,user_id,status,date_of_booking,purpose,reamarks,reject) Values ('${configuration_id}','${user_id}','${status}','${date_of_booking}','${purpose}','${reamarks}','${reject}')`;
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};

//user Report details
const ReportuserDetails = (userObj) => {
    try {
        const userid = userObj.userid;

        const query = `Select * from cube_booking where email = '${userid}'`;

        //const query = '';
        console.log(query);
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};


//user Report details
const ReportuserfilterDetails = (userObj) => {
    try {
        const userid = userObj.userid;
        const fromdate = userObj.fromdate;
        const todate = userObj.todate;

        const query = `Select * from cube_booking where email = '${userid}'`;

        //const query = '';
        console.log(query);
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};

//Admin Report details
const ReportadminDetails = () => {
    try {
        //const userid = userObj.userid;

        const query = `Select * from cube_booking`;

        //const query = '';
        console.log(query);
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};


//Admin Report filter details
const ReportadminfilterDetails = () => {
    try {
        //const userid = userObj.userid;
        const userid = userObj.userid;
        const fromdate = userObj.fromdate;
        const todate = userObj.todate;
        const status = userObj.status;

        const query = `Select * from cube_booking`;

        //const query = '';
        console.log(query);
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};


//user Dash
const userdashDetails = (userid) => {
    try {
        //const userid = userObj.userid;
        // const userid = userObj.userid;
        // const fromdate = userObj.fromdate;
        // const todate = userObj.todate;
        // const status = userObj.status;

        const query = `Select user_details.user_first_name,user_details.user_last_name,cube_booking.booking_id,cube_booking.purpose,cube_booking.status,cube_booking.applied_date
        from user_details 
        inner join cube_booking on user_details.user_id = cube_booking.user_id
        where user_details.user_id = '1'`;

        //const query = '';
        console.log(query);
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};

//admin Dash
const admindashDetails = () => {
    try {
        //const userid = userObj.userid;
        const userid = userObj.userid;


        const query = `Select * from cube_booking`;

        //const query = '';
        console.log(query);
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};

//admin Dash
const userupdatestatusquery = (booking_id) => {
    try {
        //const userid = userObj.userid;



        const query = `UPDATE cube_booking set status = 0 where booking_id = '${booking_id}'`;

        //const query = '';
        console.log(query);
        return query;
    } catch (e) {
        console.log(`error ${JSON.stringify(e)}`);
    }
};




module.exports = {
    insertBookQuery,
    getBookByIdQuery,
    ReportuserDetails,
    ReportuserfilterDetails,
    ReportadminDetails,
    ReportadminfilterDetails,
    userdashDetails,
    admindashDetails,
    userupdatestatusquery
}