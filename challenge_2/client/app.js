let app = {

  initialize: () => {
    $('#submit').on('click', app.handleSubmit);
    $('#download').on('click', app.handleDownload);
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
        $('#report').append(data);
        $('#download').append('<button type="button" id="button">Download CSV</button>');
      }
    });
  },

  handleDownload: (e) => {
    e.preventDefault();
    console.log('CLICK');
    $.ajax({
      url: '/challenge_2/test_sales_report.csv',
      type: 'GET',
      success: function(data) {
        console.log('DOWNLOAD DATA: ', data);
      }
    });
  }

};

console.log('CSV Report Generator v1.0');