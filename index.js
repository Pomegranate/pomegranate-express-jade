/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express-jade
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module index
 */

exports.options = {
  workDir: './views'
}

exports.metadata = {
  name: 'JadeViews',
  layer: 'dependency',
  type: 'merge',
  param: 'ExpressConfig'
}

exports.plugin = {
  load: function(inject, loaded) {
    var viewDirectory = this.options.workDir;
    var viewEngine = {
      "View Engine": function(Express){
        Express.engine('jade', require('jade').__express);
        Express.set('views', viewDirectory)
        Express.set('view engine', 'jade')
      }
    }
    loaded(null, viewEngine)
  },
  start: function(done) {
    done()
  },
  stop: function(done) {
    done()
  }
}