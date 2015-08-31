// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  $('#addSubmission').on('click', function(event){
    event.preventDefault();
    var $githubName = $('#github-name').val();
    var $githubURL = $('#github-url').val();

    $.post('/api/v1/submit', {
      name : $githubName,
      URL : $githubURL,
    }, function(data){
      console.log(data);
      $('#github-name').val('');
      $('#github-url').val('');
      if(typeof data === 'string'){
        $('.error').html('');
        $('.error').html('<p>' + data + '</p>');
      } else {
      $('.competitor-names').html('');
      for (var i = 0; i < data.length; i++) {
        $('.competitor-names').append('<li>' + data[i].githubName +'</li>');
       }
      }
    });
  });

  $('.votebutton').on('click', function(event){
    event.preventDefault();
    var $index = $('.votebutton').index(this);
    var $clicked = $(this);

    $.post('api/v1/fight', {
      index : $index,
    }, function(data){
      var votes = parseInt(data);
      $clicked.html('');
      $clicked.html('<p>Votes : ' + data + '<p>');
    });

  });

});


