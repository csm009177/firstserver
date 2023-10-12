
function server(callback) {
  let req = 9;
  let res = 2;
 return callback(req, res);
};

server(function(req,res){
  console.log(req);
  console.log(res);
});

