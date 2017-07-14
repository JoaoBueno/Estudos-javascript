// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ipc = require( 'electron' ).ipcRenderer

const btnMinimiza = document.getElementById( 'btnMinimiza' )
const btnMaximiza = document.getElementById( 'btnMaximiza' )
const btnFecha = document.getElementById( 'btnFecha' )

document.addEventListener( 'DOMContentLoaded', function ( event ) {
  const app = require( 'electron' ).remote.app
  const { remote } = require( 'electron' )

  let trayOn = false
  ipc.send( 'put-in-tray' )

  // $( '.btn-group' ).hide()

  btnMinimiza.addEventListener( 'click', function () {
    // remote.BrowserWindow.getFocusedWindow().hide()
  } )

  btnMaximiza.addEventListener( 'click', function () {
    if ( remote.BrowserWindow.getFocusedWindow().isMaximized() ) {
      remote.BrowserWindow.getFocusedWindow().restore()
    } else {
      remote.BrowserWindow.getFocusedWindow().maximize()
    }
  } )

  btnFecha.addEventListener( 'click', function () {
    // remote.BrowserWindow.getFocusedWindow().hide()
    remote.BrowserWindow.getFocusedWindow().close()
  } )
} )

const trayBtn = document.getElementById( 'put-in-tray' )

trayBtn.addEventListener( 'click', function ( event ) {
  if ( trayOn ) {
    trayOn = false
    ipc.send( 'remove-tray' )
  } else {
    trayOn = true
    ipc.send( 'put-in-tray' )
  }
} )
// Tray removed from context menu on icon
ipc.on( 'tray-removed', function () {
  ipc.send( 'remove-tray' )
  trayOn = false
} )
