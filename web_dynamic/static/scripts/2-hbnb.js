$(document).ready(function () {
  console.log('2-hbnb');
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    dataType: 'json',
    success: function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available ');
      }else {
        $('#api_status').removeClass('available ');
      }
    }
  });
});
