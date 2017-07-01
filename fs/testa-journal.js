const JOURNAL = require('./journal')

function phi (table) {
  return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
}

function hasEvent (event, entry) {
  return entry.events.indexOf(event) !== -1
}

function tableFor (event, journal) {
  var table = [0, 0, 0, 0]
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i]
    var index = 0
    if (hasEvent(event, entry)) index += 1
    if (entry.squirrel) index += 2
    table[index] += 1
  }
  return table
}

console.log(tableFor('pizza', JOURNAL))

function gatherCorrelations (journal) {
  var phis = {}
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events
    for (var i = 0; i < events.length; i++) {
      var event = events[i]
      if (!(event in phis)) phis[event] = phi(tableFor(event, journal))
    }
  }
  return phis
}

var correlations = gatherCorrelations(JOURNAL)
console.log(correlations.pizza)

for (var event in correlations) console.log(event + ': ' + correlations[event])

for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i]
  if (hasEvent('peanuts', entry) && !hasEvent('brushed teeth', entry)) entry.events.push('peanut teeth')
}
console.log(phi(tableFor('peanut teeth', JOURNAL)))
