const { check } = require('express-validator');

exports.createUser = [
    
    check('email_id').isEmail(),
    check('email_id').notEmpty(),
    check('name').notEmpty(),
    check('password').notEmpty(),
    check('mobile_no').notEmpty(),
    check('mobile_no').isNumeric(),

];
exports.login = [
 
    check('name').notEmpty(),
    check('password').notEmpty(),

];

exports.updateUser = [
    
    check('email_id').isEmail(),
    check('email_id').notEmpty(),
    check('name').notEmpty(),
    check('mobile_no').notEmpty(),
    check('mobile_no').isNumeric(),

];