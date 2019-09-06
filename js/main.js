/**
 * Create a TableTop object and retrieve our data
 */
function init() {
  Tabletop.init({
    key: '182TSC-STftVr-ULgGTx_bkfsnL3vBrnvQ05m8Wtuc90',
    callback: renderData,
    simpleSheet: true
  })
}

/**
 * Render the returned json in the DOM
 */
function renderData(data, tabletop) {
  var table;

  console.log(data);

  // loop thru returned json and output
  $.each(data, function (i, record) {

    // check if the donor paid
    if (record.paid) {
      table = $('#paidTable');
    } else {
      table = $('#unpaidTable');
    }

    table.append('<tr>' +
      '<td>' + record.first_name + '</td>' +
      '<td>' + record.last_name + '</td>' +
      '<td>' + record.element_id + '</td>' +
      '<td>' + record.donation_amt + '</td>' +
      '</tr>'
    );
  });
}

window.addEventListener('DOMContentLoaded', init);
