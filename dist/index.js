const axios = require('axios');
const sprintf = (replacementMap, str) => {
return str.replace(new RegExp(Object.keys(replacementMap).join('|'), 'g'), function(matched) {
    return replacementMap[matched];
    });
}

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
}
module.exports = Infinity;