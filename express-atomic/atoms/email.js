module.exports = {
  type: String,
  required: true,
  validate: require('../hadrons/email')
}
