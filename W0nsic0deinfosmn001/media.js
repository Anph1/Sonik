

 $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'beep.mp3');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);
   

    $('#mycanvas').click(function() {
       audioElement.play();

   });

});

 $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', '02sghsjp2.mp4');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('#mycanvas').click(function() {
       audioElement.play();

   });
});

