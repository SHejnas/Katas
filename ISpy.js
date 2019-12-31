function spyOn(func){
   
    let call = [], rVal = [], count = 0;
    
    
    let spy = function() {




        
     count++
       }
        

       

        


 // – returns true if spy was ever called with val, else returns false.
        .wasCalledWith(val)
  // — returns true if spy ever returned val, else returns false
        spy.returned
 // — returns the number of times spy has been called
        spy.callCount = () => count;
return spy
}