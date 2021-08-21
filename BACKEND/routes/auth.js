const router = require('express').Router();

const { register , login , forgotpassword , resetpassword , loginStaffCustomerM , registerStaffCustomerM , loginStaffStockM , registerStaffStockM} = require("../controllers/auth");

router.route("/register").post(register); // call the auth in controllers

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

//--------------------------Staff Routes------------------------------------------

router.route("/staff-login-customerM").post(loginStaffCustomerM);
router.route("/staff-register-customerM").post(registerStaffCustomerM);

router.route("/staff-login-stockM").post(loginStaffStockM);
router.route("/staff-register-stockM").post(registerStaffStockM);

module.exports = router;