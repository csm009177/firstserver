
function server(callback) {
  let req = {request:"calling"};
  let res = {response:"answer"};
 return callback(req, res);
};


server(function(req,res){
  console.log(req.request);
  console.log(res.response);
});