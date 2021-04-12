let app = {

  initialize: () => {
    $('#submit').on('click', app.handleSubmit);
  },

  handleSubmit: (e) => {
    e.preventDefault();
    let file = e.target.form[0].files[0].name.slice(0, -4) + 'csv';
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
        $('#report').append(`<table>${data}</table>`);
        $('#download').append(`<a href="http://localhost:3000/${file}">Download CSV</a>`);
      }
    });
  }

};
console.log('CSV Report Generator v1.0');