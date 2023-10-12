
function server(callback) {
  let req = function makeDiv(){
    'makeDiv'
  };
  let res = function makeLi(){
    'makeLi'
  };
 return callback(req, res);
};

server(function(req,res){
  console.log(typeof(req));
  console.log(typeof(res));
});

