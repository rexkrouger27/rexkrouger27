$("#more_com").click(function(){
     
    $.ajax({
       url : 'https://api.music.core2duo.fr/bot/1', 
       type : 'GET',
       data : 'utilisateur=' + nom_user
    });
   
});
