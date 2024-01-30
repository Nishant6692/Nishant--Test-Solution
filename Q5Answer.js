// ++++++++++++ let in JavaScript ++++++++++++++

    /* 
        => let is keyword in javascript is use declare variable  ,
        => it is mutable means value can be change  , 
        => let was introduced ES6 
        =>let provides blockedscope and functional scope if varible is declared in local ;

    */

       // for example
              let a = 45;  
                  a = 56; // it change the value of a
               console.log(a);// value of a is now 56
          // let in block scope

                    {
                      let b = 45;
                       }
                     console.log(b); // value of b is not accessible because b is in block scope , 
                                     //show error the b is not defined





//  +++++++++++ var in javaScript ++++++++++

         /* 
           => var is also used to declare variable ,
           => it is  similar to let keyword ,the only difference between let and var, let provide blockscoping  
           => var is  always declared as global
           => var provide functional scope if variable is declare in local
           */

               //for example
                  {
                     var b = 45;
                      }
                     console.log(b)// b is Accessible outside the blockscope  



//+++++++++ const in JavaScript ++++++++++++

        /*
          => const is keyword in javascript which use to declare the variable 
          => const is immutable means we can not re-assigned  or change the value the  const variable   
          => const also provide the blocked Scope and functional scope if  variable declared local
          => const was introduced ES6 
       */
         // for example
            const c =  45;
              c=56; // it show error 

          //block scope
          {
            const c = 60;
          }

          console.log(c); //c can't be accessible outside scope 
                          //show error the c is not defined

