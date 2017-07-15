// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

$( document ).ready( () => {

  $( document ).on( 'click', 'button.btn-remove', ( e ) => {
    e.preventDefault()
    const id = $( e.target ).data( 'id' )
    console.log( 'id', id )
    $.ajax( {
      type: 'DELETE',
      url: 'http://localhost:3000/api/produtos/' + id
    }, 'json' ).done( function ( data ) {
      console.log( data )
      if ( data.resposta === 'Produto excluido com sucesso' ) {
        $( e.target ).closest( 'tr' ).fadeOut()
      // $( e.target ).closest( 'tr' ).remove()
      }
    } )
  } )

  $( document ).on( 'click', 'button.btn-view', ( e ) => {
    e.preventDefault()
    const id = $( e.target ).data( 'id' )
    console.log( 'id', id )

    $.get( 'http://localhost:3000/api/produtos/' + id, function ( data ) {
      console.log( 'get data', data )

      const resposta = `<p>${ data._id } <br>
            ${ data.codigo } <br>
            ${ data.descricao } <br>
          </p>`
      $( '.product-infos' ).html( resposta )
    } )
  } )

  $.get( 'http://localhost:3000/api/produtos', function ( data ) {
    console.log( 'Data:', data )
    const resposta = data.map( ( e, i ) => {
      const tag = `<tr>
          <td>${ e.codigo }</td>
          <td>${ e.descricao }</td>
          <td><button data-id='${ e._id }' class='btn-view'>Visualizar</button></td>
          <td><button data-id='${ e._id }' class='btn-remove'>Remover</button></td>
          </tr>`
      return tag
    } )

    const table = `<table>${ resposta }</table>`
    $( '.result' ).html( resposta )
  } )
} )

$( 'form' ).submit( function ( event ) {
  event.preventDefault()

  const data = {
    'codigo': $( '#codigo' ).val(),
    'descricao': $( '#descricao' ).val()
  }
  console.log( 'data:', data )

  $.ajax( {
    type: 'POST',
    url: 'http://localhost:3000/api/produtos',
  data }, 'json' ).done( function ( data ) {
    console.log( data )
  } )
} )
