/*===========================================
=            jQuery Minimal Tips            =
===========================================*/

/**
*
* http://www.vinicius-stutz.com/
* Version: 0.1 of 19 Nov 2013
* Copyright 2013 - Vinícius Stutz
* Licensed under the MIT license
*
* WHY?
*   - Because we need to work with ease light tooltips!
* 
* HOW TO USE?
*   - Inside:
*       $(document).ready(function(){});
*   - Only do:
*       $.minimalTips();
*   - Put CSS file "jquery.minimalTips.css" in your code;
*   - Enjoy!
*
* Very easy to use! Too light to load (only 5 KB, this plugin and your style together)!
*
**/

// O código está comentado em português, mas é só porque eu sou brasileiro :-)
$.minimalTips = function(){

  var xOffset = 20;
  var yOffset = 20;

  var posX;
  var posY;

  var largura;
  var altura;
  
  $("a, .mintip").hover(function(e){
  
    if (this.title != "") { this.t = this.title; }
    else { this.t = "Clique para abrir"; } // Ou this.href se dejesa exibir a URL na tooltip;
    
    this.title = "";
    
    $("body").append("<div id='MinimalTip'>"+ this.t +"</div>");
    
    largura = $("#MinimalTip").width();
    altura = $("#MinimalTip").height();
    
    posX = ((e.pageX + largura + (yOffset*2)) > $(window).width()) ? e.pageX - (largura + 50) + yOffset : e.pageX + yOffset;

    if((e.pageY + altura + (xOffset*2)) > $(window).height()){
      posY = e.pageY - (altura + 40) + xOffset;
      $("#MinimalTip").removeClass('arrow-up');
      $("#MinimalTip").addClass('arrow-down');
    } else {
      posY = e.pageY + xOffset;
      $("#MinimalTip").removeClass('arrow-down');
      $("#MinimalTip").addClass('arrow-up');
    }
    
    $("#MinimalTip")
      .css("top", posY + "px")
      .css("left", posX + "px")
      .fadeIn("fast"); // Você também pode mudar a velocidade da transição
  
    },

    function(){
      this.title = this.t;
      $("#MinimalTip").remove();
    }

  );

  $("a, .mintip").mousemove(function(e){
    
    largura = $("#MinimalTip").width();
    altura = $("#MinimalTip").height();
    
    posX = ((e.pageX + largura + (yOffset*2)) > $(window).width()) ? e.pageX - (largura + 50) + yOffset : e.pageX + yOffset;

    if((e.pageY + altura + (xOffset*2)) > $(window).height()){
      posY = e.pageY - (altura + 40) + xOffset;
      $("#MinimalTip").removeClass('arrow-up');
      $("#MinimalTip").addClass('arrow-down');
    } else {
      posY = e.pageY + xOffset;
      $("#MinimalTip").removeClass('arrow-down');
      $("#MinimalTip").addClass('arrow-up');
    }

    $("#MinimalTip")
      .css("top", posY + "px")
      .css("left", posX + "px");

  });

};
