(function(opts){
    var backgrounds, icons, canvas, bgMax, iconsMax, iconActive;
    var init=function(){
        canvas = document.querySelector(opts.DOMCanvas);
        backgrounds = document.querySelectorAll(opts.DOMBackgrounds);
        icons = document.querySelectorAll(opts.DOMIcons);   
        //Events
        bgMax=backgrounds.length;
        for(var i= 0; i<bgMax;i++){
            backgrounds[i].addEventListener('click', setBackground);            
        }
        iconsMax=icons.length;
        for(var i=0; i<iconsMax; i++){
            icons[i].addEventListener('click', setIconActive);            
        }
        //Canvas click drawIcon
        canvas.addEventListener('click', drawIcon);
        
    };
    //iconActive an Canvas anhängen
    
    //css-Formatierung auslesen ....
    var css=function(elem, prop){
        //liest die definierten CSS-Styles aus ...
        return window.getComputedStyle(elem, null).getPropertyValue(prop);
    }
    var drawIcon = function (e){ 
        //Ermittlung der Mousepostione
               
        
        var c=iconActive.cloneNode();
        
//        console.log(c.width); 
//        console.log(c.height);
        canvas.appendChild(c);
        var h = parseInt(css(iconActive,'height'));
        var w = parseInt(css(iconActive,'width'));
        //Position zuweisen
        c.style.left=(e.pageX - canvas.offsetLeft - h/2) + 'px';
        c.style.top=(e.pageY - canvas.offsetTop - w/2) + 'px';
        c.classList.add('object');
                
    }
    var setIconActive = function(){        
        //this.style.boxShadow="0 0 5px green";
        if(iconActive !== undefined){
            iconActive.classList.remove('active');
        }
        iconActive=this;
        iconActive.classList.add('active');        
    }
    
    var setBackground = function(){
        canvas.style.backgroundImage='url("'+this.src +'")';
    }
    window.addEventListener('load', init);       
})({//ein anonymes Objekt, das mitgeschickt wird und an function(opts)übergeben wird
    DOMCanvas:'#myGame > div#canvas',
    DOMBackgrounds:'#myGame > div#backgrounds > img',
    DOMIcons: '#myGame> div#icons >img'
    
});