import request from '@/utils/request';

/**
 * Simple RESTful resource class
 */
class Resource {
  constructor(uri) {
    this.uri = uri;
  }
  list(query) {
    return request({
      url: '/' + this.uri,
      method: 'get',
      params: query,
      responseType: 'blob',
    });
  }
  get(id) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'get',
      responseType: 'blob',
    });
  }
  store(resource) {
      let fd = new FormData();
      Object.keys(resource).forEach(key => fd.append(key, resource[key]))
      return request({
          url: '/' + this.uri,
          method: 'post',
          data: fd,
      });
  }
  update(id, resource) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'put',
      data: resource,
    });
  }
  destroy(id) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'delete',
    });
  }
  destroyParams(resource) {
      return request({
          url: '/' + this.uri,
          method: 'delete',
          data: resource,
      });
  }
}

export { Resource as default };
