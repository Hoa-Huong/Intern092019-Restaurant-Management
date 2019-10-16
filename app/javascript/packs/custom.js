function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.preview_img')
        .attr('src', e.target.result)
        .width(150)
        .height(150);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$('document').ready(function(){
  $('.dropdown-toggle').on('mouseenter', function () {
    if (!$(this).parent().hasClass('show')) {
        $(this).click();
    }
  });

  $('.btn-group, .dropdown').on('mouseleave', function () {
    if ($(this).hasClass('show')){
      $(this).children('.dropdown-toggle').first().click();
    }
  });

  $('#order-table-select').select2({
    placeholder: I18n.t('pick_table_placeholder')
  });

  $('#list-products').select2({
    placeholder: I18n.t('pick_product'),
  });

  $('.table_product').DataTable();

  $(document).on('click', '.table_button', function(){
    let table_id = $(this).data('id');
    show_modal(table_id);
  });

  $(document).on('change', '.order-detail-change-quantily', function(){
    let data = $(this).data('id').split('-');
    update_amount(data[0], data[1]);
  });

  $('.upload_img').on('change', function() {
    readURL(this);
  });

  $('#sort_select').on('change', function() {
    this.form.submit();
 });
});

function show_modal(table_id){
  $.ajax({
    url: '/tables/' + table_id
  });
}

function update_amount(order_id, order_detail_id){
  id_quantily = '#order-detail-quantily-' + order_detail_id;
  id_amount = '#order-detail-amount-' + order_detail_id;
  quantily = $(id_quantily).val();

  $.ajax({
    url: '/orders/' + order_id + '/order_details/' + order_detail_id + '/update_amount',
    data: {
      quantily: quantily
    },
    success: function(result){
      $(id_amount).html(result.amount);
      $('#order-total-amount').html(result.total_amount);
    }
  });
}
