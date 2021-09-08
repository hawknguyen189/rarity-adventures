const RARITY_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "summoner",
        type: "uint256",
      },
    ],
    name: "leveled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "class",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "summoner",
        type: "uint256",
      },
    ],
    name: "summoned",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "adventure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "adventurers_log",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "class",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "classes",
    outputs: [{ internalType: "string", name: "description", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "level",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "level_up",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "next_summoner",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_summoner", type: "uint256" },
      { internalType: "uint256", name: "_xp", type: "uint256" },
    ],
    name: "spend_xp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_class", type: "uint256" }],
    name: "summon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "summoner",
    outputs: [
      { internalType: "uint256", name: "_xp", type: "uint256" },
      { internalType: "uint256", name: "_log", type: "uint256" },
      { internalType: "uint256", name: "_class", type: "uint256" },
      { internalType: "uint256", name: "_level", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "xp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "curent_level", type: "uint256" },
    ],
    name: "xp_required",
    outputs: [
      { internalType: "uint256", name: "xp_to_next_level", type: "uint256" },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
const RARITY_ADDRESS = "0xce761d788df608bd21bdd59d6f4b54b2e27f25bb";

const RARITY_ABI_ATTRIBUTES = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "summoner",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "strength",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dexterity",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "constitution",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "intelligence",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "wisdom",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "charisma",
        type: "uint32",
      },
    ],
    name: "Created",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "leveler",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "summoner",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "strength",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dexterity",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "constitution",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "intelligence",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "wisdom",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "charisma",
        type: "uint32",
      },
    ],
    name: "Leveled",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "current_level", type: "uint256" },
    ],
    name: "abilities_by_level",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "ability_scores",
    outputs: [
      { internalType: "uint32", name: "strength", type: "uint32" },
      { internalType: "uint32", name: "dexterity", type: "uint32" },
      { internalType: "uint32", name: "constitution", type: "uint32" },
      { internalType: "uint32", name: "intelligence", type: "uint32" },
      { internalType: "uint32", name: "wisdom", type: "uint32" },
      { internalType: "uint32", name: "charisma", type: "uint32" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "score", type: "uint256" }],
    name: "calc",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_str", type: "uint256" },
      { internalType: "uint256", name: "_dex", type: "uint256" },
      { internalType: "uint256", name: "_const", type: "uint256" },
      { internalType: "uint256", name: "_int", type: "uint256" },
      { internalType: "uint256", name: "_wis", type: "uint256" },
      { internalType: "uint256", name: "_cha", type: "uint256" },
    ],
    name: "calculate_point_buy",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "character_created",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "increase_charisma",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "increase_constitution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "increase_dexterity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "increase_intelligence",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "increase_strength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "increase_wisdom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "level_points_spent",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_summoner", type: "uint256" },
      { internalType: "uint32", name: "_str", type: "uint32" },
      { internalType: "uint32", name: "_dex", type: "uint32" },
      { internalType: "uint32", name: "_const", type: "uint32" },
      { internalType: "uint32", name: "_int", type: "uint32" },
      { internalType: "uint32", name: "_wis", type: "uint32" },
      { internalType: "uint32", name: "_cha", type: "uint32" },
    ],
    name: "point_buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];
const RARITY_ADDRESS_ATTRIBUTES = "0xb5f5af1087a8da62a23b08c00c6ec9af21f397a1";

const RARITY_ABI_NAMES = [
  {
    inputs: [],
    name: "cost",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "full_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "n",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_summoner", type: "uint256" },
      { internalType: "string", name: "_name", type: "string" },
    ],
    name: "set_name",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_summoner", type: "uint256" }],
    name: "summoner_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_lvl", type: "uint256" }],
    name: "title",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
];
const RARITY_ADDRESS_NAMES = "0x4c40ce3fb33a6781c903bc830804de4195cc966f";

const WEB3_LOCAL_INSTANCE = "http://localhost:7545";
const WEB3_FANTOM_INSTANCE = "wss://wsapi.fantom.network";

const FANTOM_ID = 250;

const FANTOM_NETWORK = {
  method: "wallet_addEthereumChain",
  params: [
    {
      chainId: `0x${FANTOM_ID.toString(16)}`,
      chainName: "Fantom Opera",
      nativeCurrency: {
        name: "FTM",
        symbol: "ftm",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ftm.tools"],
      blockExplorerUrls: [`https://ftmscan.com`],
    },
  ],
};

const RARITY_SUMMONERS = (accountId) =>
  `https://api.ftmscan.com/api?module=account&action=tokennfttx&contractaddress=0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb&address=${accountId}&tag=latest&apikey=81CTWCS4N63GKQ4FUZ2YMC85M98YGUNTCN`;

export {
  RARITY_ABI,
  RARITY_ADDRESS,
  RARITY_ABI_ATTRIBUTES,
  RARITY_ADDRESS_ATTRIBUTES,
  RARITY_ADDRESS_NAMES,
  RARITY_ABI_NAMES,
  WEB3_FANTOM_INSTANCE,
  WEB3_LOCAL_INSTANCE,
  FANTOM_NETWORK,
  FANTOM_ID,
  RARITY_SUMMONERS,
};
