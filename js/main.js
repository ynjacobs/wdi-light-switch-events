

    // Let's add our first event handlers to this simple document
        const lightOn = document.querySelector('.switch ');
        const ChangeText = document.querySelector('.status ');

        lightOn.addEventListener('click', function(e) {
            if(e.target.classList.contains('on')) {
                e.target.classList.remove('on');
                e.target.classList.add('off');
                document.body.className = 'dark';
                ChangeText.innerHTML = "Hey, who turned off the lights?";
              }
            else if (e.target.classList.contains('off')) {
                e.target.classList.remove('off'); 
                e.target.classList.add('on');
                document.body.className = 'light';
                ChangeText.innerHTML = "It's so bright in here!";
              }
            });

        
       
            
    
    


