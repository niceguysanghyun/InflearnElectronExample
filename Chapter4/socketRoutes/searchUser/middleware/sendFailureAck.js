/**
 * Created by kishe56@gmail.com on 2018. 9. 18.
 * Blog : https://kishe89.github.io
 * Github : https://github.com/kishe89
 */
'use strict';

module.exports = (error,message,ack)=>{
  console.log(error);
  message.result = undefined;
  message.isSuccess = false;
  message.Error = error;
  ack(message);
  return Promise.resolve();
};