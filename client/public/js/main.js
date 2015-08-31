// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  $('.fighter').on('click', function(event){
    event.preventDefault();
    var $index = ($(this).index('.fighter'));

    $.post('/fight', {index: $index}, function(data){
      console.log('post');
    });

    $.get('/fight', function(data){
      console.log(data);
    });

  });

});


