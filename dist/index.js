const axios = require('axios');
const delayBetweenRetries = 2000; // in milliseconds

const sprintf = (replacementMap, str) => {
return str.replace(new RegExp(Object.keys(replacementMap).join('|'), 'g'), function(matched) {
    return replacementMap[matched];
    });
}
const instance = axios.create();
instance.interceptors.response.use(
    response => response,
    async error => {
      if (error.response && error.response.status === 429) {
        // Exponential backoff
        const delay = Math.pow(2, error.config.retryCount) * delayBetweenRetries;
        await new Promise(resolve => setTimeout(resolve, delay));
        // Increment the retry count
        error.config.retryCount = (error.config.retryCount || 0) + 1;
        // Retry the request
        return instance(error.config);
      } else if (error.response && error.response.status === 504) {
        // Retry the request after a certain delay
        const delay = 1000; // in milliseconds
        await new Promise(resolve => setTimeout(resolve, delay));
        // Retry the request
        return instance(error.config);
      }
  //---
      return Promise.reject(error);
    }
  );

class Infinity {
  constructor(param) {
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
   
    let { host, token } = param;
    if (!token) {
        throw new Error('Required* token')
    }
    this.host = host??'https://app.startinfinity.com/';
    this.token = token;
    this.config = {
        method: 'get',
        headers: { 
            'Authorization': `Bearer ${this.token}`
        }
    };

  } 
  getWorkspaces(){
    let url = sprintf({ '{host}': this.host}, '{host}api/v2/workspaces');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get'
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getAttributes(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    }

    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/attributes');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get'
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  createItems(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID, data } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    } else if(!data) {
        throw new Error('Required* data (JSON String)')
    }

    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/items');
    let config = Object.assign(this.config, {
        url : url,
        method: 'post',
        data: data
    })
    return instance.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getItems(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID, options } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    }

    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/items');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get',
        params: options
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getItemDetails(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID, itemID, options } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    } else if (!itemID) {
        throw new Error('Required* itemID')
    }

    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID, '{item}': itemID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/items/{item}');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get',
        params: options
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getBoards(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID, options } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    }
    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/folders');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get',
        params: options
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getFolders(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID, options } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    }
    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/folders');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get',
        params: options
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getAttributeDetails(param) {
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID, attributeID, options } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    } else if (!attributeID) {
        throw new Error('Required* attributeID')
    }
    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID, '{attribute}': attributeID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/attributes/{attribute}');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get',
        params: options
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getFolderDetails(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID, folderID, options } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    } else if (!folderID) {
        throw new Error('Required* folderID')
    }
    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID, '{folder}': folderID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/folders/{folder}');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get',
        params: options
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getBoards(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, options } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } 
    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID}, '{host}api/v2/workspaces/{workspace}/boards');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get',
        params: options
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  getProfile(){
    let url = sprintf({ '{host}': this.host}, '{host}api/v2/profile');
    let config = Object.assign(this.config, {
        url : url,
        method: 'get',
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
  createAttribute(param){
    if(!param) {
        throw new Error('Must have exactly one parameter')
    }
    const { workspaceID, boardID, data } = param;
    if(!workspaceID) {
        throw new Error('Required* workspaceID')
    } else if (!boardID) {
        throw new Error('Required* boardID')
    } else if(!data) {
        throw new Error('Required* data (JSON String)')
    }

    let url = sprintf({ '{host}': this.host, '{workspace}': workspaceID, '{board}': boardID}, '{host}api/v2/workspaces/{workspace}/boards/{board}/attributes');
    let config = Object.assign(this.config, {
        url : url,
        method: 'post',
        data: data
    })
    return axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
    return error;
    });
  }
}
module.exports = Infinity;