$("#more_com").click(function(){
     
    $.ajax({
       url : 'https://api.music.core2duo.fr/bot/', 
       type : 'GET',
       username: 'bot_spotify',
       password: 'b3auty0fth3m0ula',
       
    });
   
});
