const dervishArmors = [
  {
    id: "dervish-istani-armor",
    name: "Istani Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocationIds: ["consulate-docks", "command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Istani_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Istani_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Istani_armor",
  },
  {
    id: "dervish-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocationIds: ["consulate-docks", "command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Sunspear_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Sunspear_armor",
  },
  {
    id: "dervish-elonian-armor",
    name: "Elonian Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocationIds: ["consulate-docks", "command-post", "boreal-station"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Elonian_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Elonian_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Elonian_armor",
  },
  {
    id: "dervish-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocationIds: ["command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Elite_Sunspear_armor_m.webp",
      female:
        "/images/armors/dervish/nightfall/Dervish_Elite_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Elite_Sunspear_armor",
  },
  {
    id: "dervish-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocationIds: ["the-kodash-bazaar"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Vabbian_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 32,
        },
        {
          materialId: "ruby",
          quantity: 16,
        },
        {
          materialId: "sapphire",
          quantity: 16,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Vabbian_armor",
  },
  {
    id: "dervish-ancient-armor",
    name: "Ancient Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocationIds: ["bone-palace"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Ancient_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Ancient_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Ancient_armor",
  },
  {
    id: "dervish-primeval-armor",
    name: "Primeval Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocationIds: ["throne-of-secrets"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Primeval_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Primeval_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bone",
          quantity: 400,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Primeval_armor",
  },

  {
    id: "dervish-norn-armor",
    name: "Norn Armor",
    professionId: "dervish",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["gunnars-hold"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/eotn/Dervish_Norn_armor_m.webp",
      female: "/images/armors/dervish/eotn/Dervish_Norn_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "fur-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Norn_armor",
  },
  {
    id: "dervish-asuran-armor",
    name: "Asuran Armor",
    professionId: "dervish",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["rata-sum"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/eotn/Dervish_Asuran_armor_m.webp",
      female: "/images/armors/dervish/eotn/Dervish_Asuran_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "leather-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Asuran_armor",
  },
  {
    id: "dervish-monument-armor",
    name: "Monument Armor",
    professionId: "dervish",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["eye-of-the-north"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/eotn/Dervish_Monument_armor_m.webp",
      female: "/images/armors/dervish/eotn/Dervish_Monument_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Monument_armor",
  },
  {
    id: "dervish-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "dervish",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["central-transfer-chamber"],
    pieces: ["chest", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/eotn/Dervish_Deldrimor_armor_m.webp",
      female: "/images/armors/dervish/eotn/Dervish_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 30000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 150,
        },
        {
          materialId: "iron-ingot",
          quantity: 150,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 15,
        },
        {
          materialId: "leather-square",
          quantity: 15,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Deldrimor_armor",
  },

  {
    id: "dervish-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "dervish",
    campaignId: "core",
    craftingLocationIds: ["the-fissure-of-woe"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/core/Dervish_Obsidian_armor_m.webp",
      female: "/images/armors/dervish/core/Dervish_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 40,
        },
        {
          materialId: "glob-of-ectoplasm",
          quantity: 120,
        },
        {
          materialId: "obsidian-shard",
          quantity: 120,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Dervish_Obsidian_armor",
  },
];

export default dervishArmors;
