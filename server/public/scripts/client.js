console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  });
  $(document).on('click', '.readyToTransferBtn', readyToTransfer) 
}

function readyToTransfer() {
  let id = $(this).closest('tr').data('id')/*get the id of the row/koala, have to see how table is */
  console.log('id: ', id)
  $.ajax({
    method: 'PUT',
    url: `/koalas/${id}`
  }).then((res) => {
    console.log('Succesfully updated the koala.', res);
    getKoalas();
  }).catch((error) => {
    console.log('/PUT request failed: ', error);
    alert('Check console for error. PUT request failed.')
  });
};

function getKoalas(){
  console.log( 'in getKoalas' );
  $('#viewKoalas').empty();
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas'
  })
  .then(function (response){
    console.log('get response is ');
    // append to DOM
    for (let i = 0; i < response.length; i++) {
      console.log(response[i].ready_for_transfer)
      let transferButton = response[i].ready_for_transfer ? '' : `<button class="readyToTransferBtn">Ready for Transfer</button>`;
      $('#viewKoalas').append(`
          <tr data-id="${response[i].id}">
              <td>${response[i].name}</td>
              <td>${response[i].age}</td>
              <td>${response[i].gender}</td>
              <td>${response[i].ready_for_transfer}</td>
              <td>${response[i].notes}</td>
              <td><button class="readyBtn">Ready for Transfer</button></td>
          </tr>
      `);
    }
  });
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}

function deleteKoala() {
  let koalaId = $(this).val();
  $.ajax({
    type: 'DELETE',
    url: '/koalas/' + koalaId,
    success: function (response) {
      console.log('response', response);
      getKoalas();
    }
  });
}