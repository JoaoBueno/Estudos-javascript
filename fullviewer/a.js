// const net = require( 'net' )

// const HOST = '0.0.0.0'

// function createServer ( port ) {
//   net.createServer( function ( sock ) {
//     sock.on( 'data', function ( data ) {
//       let dados = data.toString()
//       console.log( dados )
//       console.log( dados.length )
//       dados = dados + 'teste'
//       console.log( dados )
//       sock.write( data )
//     } )
//   } ).listen( port, HOST )
//   console.log( 'server listening on ' + port )
// }

// createServer( 9090 )

// const shell = require( 'electron' ).shell
// const os = require( 'os' )
// shell.showItemInFolder( os.homedir() )
// console.log( shell.openItem( './icon.png' ) )

const { exec } = require('child_process');

exec('start ./icon.png', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
