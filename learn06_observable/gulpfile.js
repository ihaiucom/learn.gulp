const { Observable } = require('rxjs');
require('rxjs/add/observable/of');

Observable.of(1,2,3).map(x => x + '!!!');

function observableTask() {
  return Observable.of(1, 2, 3);
}

exports.default = observableTask;