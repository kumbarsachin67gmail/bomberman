let chance = 1;
const container1 = document.querySelectorAll('.container');

//adding even listner:

var arr = [];

for(var i=0;i<10;i++)
{
   
   // arr.length = 10;
    var u = Math.floor((Math.random() * 81) + 1);
    arr.push(u);
    

}



run_script = () => {
    let container = document.getElementsByClassName("container")[0];
    var k=0;
    for(let i=0;i<9;i++) {
        for(let j=0;j<9;j++) {
            k+=1;

            

            let elm = document.createElement('div');
            elm.classList.add("box");
            elm.classList.add(k);
            console.log(elm.getAttribute('class')[6]);
            
           
            for(var l=0;l<10;l++)
            {
                
                if(arr[l]==k)
                {
                    
                    
                    elm.addEventListener('click',() => 
                    {
                        elm.classList.add('b');
                        alert("hey you presses on bomb");
                        
                 
                    });
                    break;

 
                    
                   
                }
               
            
            }
         

            elm.setAttribute("id",  k);
            var a = elm.getAttribute("id");

            elm.innerText = "";
            container.appendChild(elm);
            reister_click_event(elm); 
            
        }
    }       

              
     

       

    // for(var i=0;i<90;i++)
    // {

    


    // const n =  container.getElementsByClassName("box")[i];
    // var n1 = n.getAttribute('id');
    
    
    // for(var j=0;j<arr.length;j++)
    // {
    //     if(arr[j]==n1)
    //     {
            
    //         container1.getElementsByClassName('box').setAttribute("class","s1");
    //     }
    // }
       
    
    // }
  
}






// for(var i=0;i<arr.length;i++)
// {
//         k = arr[i];
//         var el = getElementById("box"+k);
//         console.log(k);
// }



reister_click_event = (elm) => {
    elm.addEventListener("click", () => 
    {
        if(elm.innerText == "") {
           elm.classList.add("x");
           
        }
    });
}

reset_game = () => 
{
    chance = 1;
    clear_existing_data();
}

clear_existing_data = () => 
{
        
   
        for(let k=1;k<90;k++) 
        {
              let elm = document.getElementById(k);
             
            elm.classList.remove("x");
            elm.classList.remove("b");
            location.reload();
           
        }
    
}