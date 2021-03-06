/**
 * Created by kishe56@gmail.com on 2018. 9. 20.
 * Blog : https://kishe89.github.io
 * Github : https://github.com/kishe89
 */
'use strict';

module.exports = (decodedUser)=>{
  const User = require('../../../model/User');
  return new Promise((resolve,reject)=>{
    User.findOne({_id:decodedUser._id}).populate('friendReceiveRequests')
      .then((user)=>{
        if(!user)return reject(new Error('User Not Found'));
        return resolve(user);
      })
      .catch((error)=>{
        return reject(error);
      })
  });
};