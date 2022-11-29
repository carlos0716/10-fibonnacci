const fibonacci = n => {
   
    
   let a = 0, b = 1, c = parseInt(n);
   if(c < 0) {
    return 'OOPS';
   }
    
    
    else {for(let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
      
    }
    
    return c;
  };
};
// Do not edit below this line
module.exports = fibonacci;
