


function square(n){
    return n * n
  }

function cacheFunction(cb) {
  let objeto = {}
    return function retorno(arg){
       
       if(objeto.hasOwnProperty(arg)){
         return objeto[arg];
       }else{
        
        return objeto[arg]=cb(arg);
       }
  
    }
  }

  const squareCache = cacheFunction(square)

  console.log(squareCache(5)) 