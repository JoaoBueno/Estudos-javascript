// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ipc = require( 'electron' ).ipcRenderer
const shell = require( 'electron' ).shell
const net = require( 'net' )
const os = require( 'os' )
const { exec } = require( 'child_process' )

const HOST = '0.0.0.0'

const btnMinimiza = document.getElementById( 'btnMinimiza' )
const btnMaximiza = document.getElementById( 'btnMaximiza' )
const btnFecha = document.getElementById( 'btnFecha' )
let taSaida = document.getElementById( 'taSaida' )
let buffer = new Buffer(1024)

document.addEventListener( 'DOMContentLoaded', ( event ) => {
  const app = require( 'electron' ).remote.app
  const { remote } = require( 'electron' )

  let trayOn = false
  ipc.send( 'put-in-tray' )

  // $( '.btn-group' ).hide()

  btnMinimiza.addEventListener( 'click', () => {
    // remote.BrowserWindow.getFocusedWindow().hide()
  } )

  btnMaximiza.addEventListener( 'click', () => {
    if ( remote.BrowserWindow.getFocusedWindow().isMaximized() ) {
      remote.BrowserWindow.getFocusedWindow().restore()
    } else {
      remote.BrowserWindow.getFocusedWindow().maximize()
    }
  } )

  btnFecha.addEventListener( 'click', () => {
    // remote.BrowserWindow.getFocusedWindow().hide()
    remote.BrowserWindow.getFocusedWindow().close()
  } )
  createServer( 9090 )
  console.log( shell.openItem( './icon.png' ) )
} )

const createServer = ( port ) => {
  net.createServer( ( sock ) => {
    sock.on( 'data', ( data ) => {
      let dados = data.toString().trim()
      taSaida.value = taSaida.value + dados
      console.log( dados )
      console.log( dados.length )
      exec( 'start ' + dados, ( error, stdout, stderr ) => {
        if ( error ) {
          taSaida.value = taSaida.value + `exec error: ${ error }`
          buffer.write = ( `exec error: ${ error }`, 'utf-8' )
          sock.write( buffer )
          return
        }
        console.log( `stdout: ${ stdout }` )
        console.log( `stderr: ${ stderr }` )
      } )
      sock.write( data )
    } )
  } ).listen( port, HOST )
  console.log( 'server listening on ' + port )
}
