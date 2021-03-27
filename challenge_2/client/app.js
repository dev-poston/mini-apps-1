let app = {

  initialize: () => {
    $('#submit').on('click', app.handleSubmit);
  },

  handleSubmit: (e) => {
    e.preventDefault();
    console.log('CLICK', e);
    let file = e.target.form[0].form[0].files[0];
    console.log(file);
    // let data = new FormData($('#form'));
    $.ajax({
      url: '/',
      type: 'POST',
      data: file,
      contentType: 'application/json',
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