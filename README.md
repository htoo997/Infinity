
# Infinity_AIST Node.js Module

The Infinity_AIST Node.js module provides a convenient way to interact with the Infinity project management software API. This module simplifies making requests to the Infinity API by encapsulating common actions into easy-to-use methods.

## Installation

To use this module in your Node.js project, you can install it via npm:

```bash
npm install infinity_aist
```

## Usage

Import the module into your Node.js application:

```javascript
const Infinity = require('infinity_aist');
```

### Initialization

To use the Infinity module, you need to create an instance of it by providing the required parameters:

```javascript
const infinity = new Infinity({
  host: 'https://app.startinfinity.com/', // Infinity API host (optional, defaults to the Infinity cloud host)
  token: 'YOUR_API_TOKEN', // Your Infinity API token (required)
});
```

### Available Methods

#### Get Workspaces

Retrieve a list of workspaces associated with your Infinity account.

```javascript
infinity.getWorkspaces()
  .then((workspaces) => {
    // Handle the list of workspaces
  })
  .catch((error) => {
    // Handle errors
  });
```

#### Get Attributes

Retrieve attributes (columns) of a specific board within a workspace.

```javascript
const params = {
  workspaceID: 'WORKSPACE_ID', // ID of the workspace (required)
  boardID: 'BOARD_ID', // ID of the board (required)
};

infinity.getAttributes(params)
  .then((attributes) => {
    // Handle the list of attributes
  })
  .catch((error) => {
    // Handle errors
  });
```

#### Get Items

Retrieve items (tasks) from a specific board within a workspace.

```javascript
const params = {
  workspaceID: 'WORKSPACE_ID', // ID of the workspace (required)
  boardID: 'BOARD_ID', // ID of the board (required)
  options: {}, // Additional query parameters (optional)
};

infinity.getItems(params)
  .then((items) => {
    // Handle the list of items
  })
  .catch((error) => {
    // Handle errors
  });
```

#### More Methods

The module provides several other methods for interacting with workspaces, boards, items, folders, and more. Refer to the source code for a complete list of available methods.

## License

This Infinity Node.js module is released under the MIT License.

## Issues

If you encounter any problems or have questions about using this module, please feel free to [open an issue](https://github.com/htoo997/Infinity/issues) on GitHub.

---

You can customize this README to include more details or specific usage examples based on your module's features and requirements. Be sure to replace placeholders like `YOUR_API_TOKEN`, `WORKSPACE_ID`, and `BOARD_ID` with actual values where necessary.