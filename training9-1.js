
function server(callback) {
  let req = 'calling'
  let res = 'answer'
 return callback(req, res);
};

console.log(server(req,res))




server(function(req,res){
  console.log(req);
  console.log(res);
});