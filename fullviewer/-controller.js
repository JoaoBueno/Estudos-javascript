const ipc = require('electron').ipcRenderer

document.addEventListener('DOMContentLoaded', function (event) {
  // $( document ).ready( function () {
  const app = require('electron').remote.app
  const { remote } = require('electron')

  // $( '.btn-group' ).hide()

  document.getElementById('btnMinimiza').addEventListener('click', function () {
    // $( '#btnMinimiza' ).click( function () {
    // console.log( 'minimiza' )
    ipc.send('put-in-tray')
    remote.BrowserWindow.getFocusedWindow().minimize()
  })

  document.getElementById('btnMaximiza').addEventListener('click', function () {
    // $('#btnMaximiza').click(function () {
    //   console.log('maximiza')
    if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
      remote.BrowserWindow.getFocusedWindow().restore()
    } else {
      remote.BrowserWindow.getFocusedWindow().maximize()
    }
  })
  // })

  document.getElementById('btnFecha').addEventListener('click', function () {
    // $( '#btnFecha' ).click( function () {
    // console.log( 'fecha' )
    remote.BrowserWindow.getFocusedWindow().close()
  })
})
