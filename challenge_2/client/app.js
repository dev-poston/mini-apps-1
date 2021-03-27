let app = {

  initialize: () => {
    $('#submit').on('click', app.handleSubmit);
  },

  handleSubmit: (e) => {
    e.preventDefault();
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
        console.log('CSV Report: ', data);
        $('#report').append(data);
        $('#download').append('<a href="http://localhost:3000/test_sales_report.csv">Download CSV</a>');
      }
    });
  }

};

console.log('CSV Report Generator v1.0');