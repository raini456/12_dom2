(function(opts){
    var backgrounds, icons, canvas, max;
    var init=function(){
        canvas = document.querySelector(opts.DOMCanvas);
        backgrounds = document.querySelectorAll(opts.DOMBackgrounds);
        icons = document.querySelectorAll(opts.DOMIcons);   
        //Events
        max=backgrounds.length;
        for(var i= 0; i<max;i++){
            backgrounds[i].addEventListener('click', setBackground);
            
        }
    };
    var setBackground = function(){
        canvas.style.backgroundImage='url("'+this.src +'")';
    }
    window.addEventListener('load', init);       
})({//ein anonymes Objekt, das mitgeschickt wird und an function(opts)übergeben wird
    DOMCanvas:'#myGame > div#canvas',
    DOMBackgrounds:'#myGame > div#backgrounds > img',
    DOMIcons: '#myGame> div#icons >img'
    
});