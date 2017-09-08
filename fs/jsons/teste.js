exports.name = prompt('Name', basename);
exports.description = prompt('Description', '');
exports.version = prompt('Version', config.get('init-version'));
exports.main = config.get('main-file');
exports.license = config.get('init-license');
exports.author = config.get('init-author-name') + '<'+config.get('init-author-email')+'>';
exports.scripts = {
  start: 'node ' + config.get('main-file'),
  prestart: 'npm install'
};
exports.engines = {
  node: '>= 4.4.7',
  npm: '>= 2.15.8'
};