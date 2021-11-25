const { check } = require('express-validator');

exports.createUser = [
    
    check('email_id').isEmail(),
    check('email_id').notEmpty(),
    check('name').notEmpty(),
    check('password', 'Password field is required').not().isEmpty(),
    check('password').isLength({ min: 3 }).withMessage('Password must be at least 3 chars long'),
    check('password').matches(/\d/).withMessage('Password must contain a number'),
    check('password2').custom((value, {req}) => { 
      //custom validator
      if(value!==req.body.password) {
        throw new Error('Passwords doesn\'t match');
      }
      return true;
    }),
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