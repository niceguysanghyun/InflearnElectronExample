/**
 * Created by kishe56@gmail.com on 2018. 9. 18.
 * Blog : https://kishe89.github.io
 * Github : https://github.com/kishe89
 */
'use strict';

module.exports = function (result, message, ack) {
  message.result = result;
  message.isSuccess = true;
  message.Error = undefined;
  ack(message);
  return Promise.resolve();
};
//# sourceMappingURL=sendSuccessAck.js.map