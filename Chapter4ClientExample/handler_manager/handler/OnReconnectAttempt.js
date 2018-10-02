/**
 * Created by kishe56@gmail.com on 2018. 9. 13.
 * Blog : https://kishe89.github.io
 * Github : https://github.com/kishe89
 */
module.exports = (socket,win,TokenManager)=>{
  const token = TokenManager.getToken();
  const id = TokenManager.getId();
  socket.io.opts.query = {id:id,token:token};
  socket.io.opts.transports = ['websocket'];
};