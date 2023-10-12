
function server(callback) {
  let req = function makeDiv(){
    'makeDiv'
  };
  let res = function makeLi(){
    'makeLi'
  };
 callback(req, res);
};

server(function(req,res){
  console.log(req);
  console.log(res);
});

