let app = {

  initialize: () => {
    $('#submit').on('click', app.handleSubmit);
  },

  handleSubmit: (e) => {
    e.preventDefault();
    console.log('CLICK', e);
    // let file = e.target.form[0].form[0].files[0];
    // console.log(file);
    let form = $('#form')[0];
    let data = new FormData(form);

    $.ajax({
      url: '/',
      type: 'POST',
      data: data,
      cache: false,
      processData: false,
      contentType: false,
      enctype: 'multipart/form-data',
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