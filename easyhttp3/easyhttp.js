/**
 * @version 0.0.3
 * @author Pradeep
 */

class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const data = response.json()
    return data;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      }, body: JSON.stringify(data)
    });
    const result = await response.json()
    return result;

  }


  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      }, body: JSON.stringify(data)
    });
    const result = await response.json()
    return result;
  }


  async  delete(url) {

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return "data deleted  ";


  }
}

