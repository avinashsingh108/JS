const throttleFunction=(func, delay)=>{
              let prev = 0; 
      return (...args) => {
        let now = new Date().getTime(); 
        if(now - prev> delay){ 
          prev = now;
          return func(...args);  
        }
      }
    }
    document.querySelector("#rect").addEventListener("mousemove", throttleFunction((e)=>{
        let div = document.createElement("div")
        div.classList.add("imgdiv")
        div.style.left = e.clientX + "px"
        div.style.top = e.clientY + "px"
        document.body.appendChild(div)
        setTimeout(function(){
                    
            div.remove();
                }, 2000)
    }, 500));