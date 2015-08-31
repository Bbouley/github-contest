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
      $('#github-name').val('');
      $('#github-url').val('');

    });

    $.get('api/v1/submit', function(data){
      $('.competitor-names').html('');
      for (var i = 0; i < data.length; i++) {
        $('.competitor-names').append('<li>' + data[i].githubName +'</li>');
      }
    });

  });

});


