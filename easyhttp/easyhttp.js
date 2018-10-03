function easyHTTP() {
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  this.http.onload = () => {

    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback(`Error while fetching : ${this.status}`, null);
    }
  }
  this.http.send();

}

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', "application/json")

  //arrow or self type
  let self = this
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));

}

easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', "application/json")
  //arrow or self type
  let self = this
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  //arrow or self type
  let self = this
  this.http.onload = function() {
    if (this.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback(`Error: ${this.status}`);
    }
  }

  this.http.send(JSON.stringify(data));
}
