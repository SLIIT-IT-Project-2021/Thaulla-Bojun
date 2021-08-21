const router = require('express').Router();

const { register , login , forgotpassword , resetpassword , loginStaffCustomerM , registerStaffCustomerM,loginStaffSupplierM , registerStaffSupplierM} = require("../controllers/auth");

router.route("/register").post(register); // call the auth in controllers

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

//--------------------------Staff Routes------------------------------------------

router.route("/staff-login-customerM").post(loginStaffCustomerM);
router.route("/staff-register-customerM").post(registerStaffCustomerM);

router.route("/staff-login-supplierM").post(loginStaffSupplierM);
router.route("/staff-register-supplierM").post(registerStaffSupplierM);

module.exports = router;