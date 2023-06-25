export const environment = {
  production:false,
  firebase: {
    projectId: 'finalcloud-2ae61',
    appId: '1:58975067078:web:eb1514250e45adb5fc70c7',
    storageBucket: 'finalcloud-2ae61.appspot.com',
    apiKey: 'AIzaSyCT_QgokKC5kIr0GnpHM6aKLj-gMt6PPdw',
    authDomain: 'finalcloud-2ae61.firebaseapp.com',
    messagingSenderId: '58975067078',
  },
finalsabi:
[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "manufacturer",
        "type": "address"
      }
    ],
    "name": "ProductCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "descD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "DTMD",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "QMRD",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "DTPMD",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "TMDD",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "VHD",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "descM",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "CATRM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "DPMM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "DTQTMM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "DTPM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "DEM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "DTPMM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "TMTMM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "VHM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "ISOM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "FSSAIM",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "descS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "DTRMS",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "TMTRS",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "TMTSS",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "distributor",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "manufacturer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "products",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "Location",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "retailer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_distributor",
        "type": "address"
      }
    ],
    "name": "setDistributor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_retailer",
        "type": "address"
      }
    ],
    "name": "setRetailer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_CATRM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DPMM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DTQTMM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DTPM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DEM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DTPMM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_TMTMM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_VHM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_ISOM",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_FSSAIM",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_productId",
        "type": "uint256"
      }
    ],
    "name": "updateManufacturerVariables",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_DTMD",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_QMRD",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_DTPMD",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_TMDD",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_VHD",
        "type": "string"
      }
    ],
    "name": "updateDistributorVariables",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_DTRMS",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_TMTRS",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_TMTSS",
        "type": "string"
      }
    ],
    "name": "updateRetailerVariables",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pid",
        "type": "uint256"
      }
    ],
    "name": "getprodmandet",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "CATRM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "DPMM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "DTQTMM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "DTPM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "DEM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "DTPMM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "TMTMM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "VHM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "ISOM",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "FSSAIM",
            "type": "string"
          }
        ],
        "internalType": "struct finals.DescM",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pid",
        "type": "uint256"
      }
    ],
    "name": "getproddistdet",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "DTMD",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "QMRD",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "DTPMD",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "TMDD",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "VHD",
            "type": "string"
          }
        ],
        "internalType": "struct finals.DescD",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pid",
        "type": "uint256"
      }
    ],
    "name": "getprodseldet",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "DTRMS",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "TMTRS",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "TMTSS",
            "type": "string"
          }
        ],
        "internalType": "struct finals.DescS",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_productId",
        "type": "uint256"
      }
    ],
    "name": "getProductHistory",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_productId",
        "type": "uint256"
      }
    ],
    "name": "isProductPresent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]};
