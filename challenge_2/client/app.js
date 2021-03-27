let app = {

  initialize: () => {
    $('#submit').on('click', app.handleSubmit);
  },

  handleSubmit: (e) => {
    console.log('submit click');
    e.preventDefault();
    $.ajax({
      url: '/',
      type: 'POST',
      data: formData,
      contentType: 'multipart/form-data',
      success: function(data) {
        console.log('DATA: ', data);
        $('body').append(data);
      }
    })
  },

  handleDownload: () => {

  },


};

console.log('CSV Report Generator v1.0');