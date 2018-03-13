class Counter {
    test() {
      this.count  = 100;
      
       let add = (a, b) => {
           console.log(" add ");
         function start() {
          setInterval( () => {
                 console.log("Timer ");
                 this.count++;  
                 console.log("Counter", this.count);
 
          }, 2000);

          start();
       };

       add(10, 20);
    }
    
 }
 }

 c = new Counter();
 console.log("test");
 c.test();