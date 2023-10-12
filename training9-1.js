
function server(callback) {
  let req = 'calling'
  let res = 'answer'
 return callback(req, res);
};

console.log(server(req,res))




server(function(request,response){
  console.log(request);
  console.log(response);
});