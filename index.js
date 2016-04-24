'use strict'

/**
 * Export `stringify`
 */

module.exports = stringify

/**
 * Stringify environment variables
 *
 * @param {Object} env
 * @return {String}
 */

function stringify (env) {
  let out = []
  for (let key in env) {
    let value = typeof env[key] === 'string' ? `"${env[key]}"` : env[key]
    out.push(`  → ${key} = ${value}`)
  }
  return out.sort().join('\n')
}
