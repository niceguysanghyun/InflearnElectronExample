/**
 * Created by kishe56@gmail.com on 2018. 9. 19.
 * Blog : https://kishe89.github.io
 * Github : https://github.com/kishe89
 */
'use strict';

module.exports = (result,message,ack)=>{
  message.result = result.taskResults;
  message.isSuccess = true;
  message.Error = undefined;
  ack(message);
  return Promise.resolve();

};