/**
 * @version 0.0.2
 * @author Pradeep
 */

class EasyHTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then(res => res.json()).then(data => resolve(data)).
        catch(err => reject(err))
    });
  }

  post(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(data => resolve(data)).
        catch(err => reject(err))
    });
  }


  put(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(data => resolve(data)).
        catch(err => reject(err))
    });
  }


  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json()).then(data => resolve('resource deleted')).
        catch(err => reject(err))
    });
  }

}

