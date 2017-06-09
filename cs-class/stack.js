// Implement a classic stack

function Stack() {
  this._data = new Array();

  Stack.protoype.push = function(element) {
    this._data.push(element);
  }

  Stack.prototype.pop = function() {
    this._data.pop();
  }

  Stack.prototype.peek = function() {
    return this._data[-1];
    }
}
