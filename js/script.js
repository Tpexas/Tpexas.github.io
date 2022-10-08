$(document).ready(function(){
    
    $('.carousel').carousel({
      }).on('slid.bs.carousel', function () {
          curSlide = $('.active');
        if(curSlide.is( '.start' )) {
           $('header .carousel-control-prev').hide();
           return;
        } else {
           $('header .carousel-control-prev').show();   
        }
        if (curSlide.is( '.end' )) {
           $('header .carousel-control-next').hide();
           return;
        } else {
           $('header .carousel-control-next').show();      
        }
      });
       $(window).resize(function() {
         if ($(window).width() < 975) {
            $(".resize").removeClass("col-lg-8");
            $(".resize").addClass("col-12");
         }
         else{
            $(".resize").removeClass("col-12");
            $(".resize").addClass("col-lg-8");
         }
       });
   var arena = $(".arenaticket");
   var sarasas = arena.find(".sarasas ul");
   var zoom=1;
   var totsum= arena.find(".totsum")
  function kedesgen(top, left, sk, deg=0){
     var stiliai='top:' + top*zoom + 'px; left:' + left*zoom + 'px;';
     stiliai+='width:' + 25*zoom + 'px; height:' + 25*zoom + 'px;';
     stiliai+='line-height:' + 25*zoom + 'px;';
     var apsukimas;
     if(deg!=0){
        stiliai+='transform:rotate('+deg+'deg);';
        apsukimas='transform:rotate('+ -deg +'deg);';
     }
   var kede = '<div class="kede" style="'+stiliai+'"><div style="'+apsukimas+'">' + sk + '</div></div>';
   arena.append(kede);
   }

   function vietu_sarasas(){
      sarasas.html("");
      totsum.html("");
      var total=0;
      arena.find(".kede").each(function(){
          var kede = $(this);
          var kaina=0;
          if (kede.hasClass("pasirinkta")){
             if( $(this).text().substr(0,1).toUpperCase() == 'B'||$(this).text().substr(0,1).toUpperCase() == 'D'||$(this).text().substr(0,1).toUpperCase() == 'L'||$(this).text().substr(0,1).toUpperCase() == 'K'||$(this).text().substr(0,1).toUpperCase() == 'J'){
                kaina=19;
                total+=kaina;
          }
          else if($(this).text().substr(0,1).toUpperCase() == 'A' || $(this).text().substr(0,1).toUpperCase() == 'M' || $(this).text().substr(0,1).toUpperCase() == 'H' || $(this).text().substr(0,1).toUpperCase() == 'F'){
               kaina=14;
               total+=kaina;
         }
         else{
            kaina=10;
            total+=kaina;
         }
          sarasas.append("<li>Vieta: " + kede.text() +", kaina: " + kaina+" eurų</li>");
         totsum.empty().append("Visa kaina: "+ total+"€");
         }
      });
//Isvalo kedes paspaudus mygtuka
      $("#naikinimas").click(function(){
         totsum.html("");
         var imgdefault="img/kede.png";
         sarasas.html("");
         arena.find(".kede").each(function(){
            var kede = $(this);
            if (kede.hasClass("pasirinkta")){
               kede.removeClass(("pasirinkta"));
               totsum.empty();
               kede.css("background-image", "url(" + imgdefault + ")");
            }
            });
      });
  }  
//Balsavimas
   $(".komanda").click(function(){
      kpav=$(this).text();
      });

      $(".balsav").click(function(){
         $('.alert .vidus').html("<span>Dėkojame už balsą, jūsų nuomone "+kpav+" laimės čempionatą</span>");
         $("#message").fadeIn().css("display","block");
   });

//Kedziu deliojimo pradzia
   for(var i=1; i<=3; i++)
   {
      for(var j=1; j<=3; j++)  
      {
      kedesgen(75+j*25, 170+25*i, "B"+i);
      }
   }
   for(var i=1; i<=4; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(150+j*25, 158+25*i, "B"+i);
      }
   }
   for(var i=1; i<=2; i++)
   {
      for(var j=1; j<=5; j++)  
      {
      kedesgen(75+j*25, 462+25*i, "D"+i);
      }
   }
   for(var i=1; i<=2; i++)
   {
      for(var j=1; j<=3; j++)  
      {
      kedesgen(75+j*25, 543+25*i, "E"+i);
      }
   }
   for(var i=1; i<=2; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(150+j*25, 535+25*i, "E"+i);
      }
   }
   for(var i=1; i<=9; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(268+j*25, 600+25*i, "F"+i, 90, 90);
      }
   }
   for(var i=1; i<=9; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(347+j*25, 600+25*i, "G"+i, 90);
      }
   }
   for(var i=1; i<=5; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(347+j*25, -20+25*i, "N"+i, 270);
      }
   }
   for(var i=1; i<=5; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(268+j*25, -20+25*i, "P"+i, 270);
      }
   }
   for(var i=1; i<=3; i++)
   {
      for(var j=1; j<=3; j++)  
      {
      kedesgen(510+j*25, 550+25*i, "H"+i, 180);
      }
   }
   for(var i=1; i<=2; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(460+j*25, 537+25*i, "H"+i ,180);
      }
   }
   for(var i=1; i<=4; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(460+j*25, 415+25*i, "J"+i, 180);
      }
   }
   for(var i=1; i<=3; i++)
   {
      for(var j=1; j<=3; j++)  
      {
      kedesgen(510+j*25, 430+25*i, "J"+i, 180);
      }
   }
   for(var i=1; i<=3; i++)
   {
      for(var j=1; j<=3; j++)  
      {
      kedesgen(510+j*25, 300+25*i, "K"+i, 180);
      }
   }
   for(var i=1; i<=4; i++)
   {
      for(var j=1; j<=1; j++)  
      {
      kedesgen(485+j*25, 290+25*i, "K"+i, 180);
      }
   }
   for(var i=1; i<=3; i++)
   {
      for(var j=1; j<=3; j++)  
      {
      kedesgen(510+j*25, 173+25*i, "L"+i, 180);
      }
   }
   for(var i=1; i<=4; i++)
   {
      for(var j=1; j<=2; j++)  
      {
      kedesgen(460+j*25, 160+25*i, "L"+i, 180);
      }
   }
   for(var i=1; i<=2; i++)
   {
      for(var j=1; j<=4; j++)  
      {
      kedesgen(485+j*25, 78+25*i, "M"+i, 180);
      }
   }
//Kedziu deliojimo pabaiga
arena.find(".kede").click(function(){
   var kede = $(this);
   var imgdefault="img/kede.png";
   var imggreen="img/kedegreen.png";
   if (!kede.hasClass("rezervuota")){
       if (kede.hasClass("pasirinkta")){
           kede.removeClass("pasirinkta");
           kede.css("background-image", "url(" + imgdefault + ")"); 
       } 
       else {
           kede.addClass("pasirinkta");
           kede.css("background-image", "url(" + imggreen + ")"); 
       } 
       vietu_sarasas(); 
   }
});
vietu_sarasas();
$("#pirkimas").click(function(){
   $("#duomenys").slideDown("slow");
 });

});
