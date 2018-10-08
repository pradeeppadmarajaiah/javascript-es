/**
 * @version 0.0.2
 * @author Pradeep
 */

class EasyHTTP {
  get(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}

