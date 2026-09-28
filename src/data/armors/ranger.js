const rangerArmors = [
  {
    id: "ranger-ascalon-armor",
    name: "Ascalon Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["kaineng-center"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Ascalon_armor_m.webp",
      female: "/images/armors/ranger/prophecies/Ranger_Ascalon_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Ascalon_armor",
  },
  {
    id: "ranger-krytan-armor",
    name: "Krytan Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["bukdek-byway"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Krytan_armor_m.webp",
      female: "/images/armors/ranger/prophecies/Ranger_Krytan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "bone",
          quantity: 200,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Krytan_armor",
  },
  {
    id: "ranger-tyrian-armor",
    name: "Tyrian Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge", "wajjun-bazaar", "boreal-station"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Tyrian_armor_m.webp",
      female: "/images/armors/ranger/prophecies/Ranger_Tyrian_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Tyrian_armor",
  },
  {
    id: "ranger-fur-lined-armor",
    name: "Fur-Lined Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Fur-Lined_armor_m.webp",
      female: "/images/armors/ranger/prophecies/Ranger_Fur-Lined_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "fur-square",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Fur-Lined_armor",
  },
  {
    id: "ranger-drakescale-armor",
    name: "Drakescale Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Drakescale_armor_m.webp",
      female: "/images/armors/ranger/prophecies/Ranger_Drakescale_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "scale",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Drakescale_armor",
  },
  {
    id: "ranger-druid-armor",
    name: "Druid Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Druid_armor_m.webp",
      female: "/images/armors/ranger/prophecies/Ranger_Druid_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "wood-plank",
          quantity: 175,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Druid_armor",
  },
  {
    id: "ranger-studded-leather-armor",
    name: "Studded Leather Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Studded_Leather_armor_m.webp",
      female:
        "/images/armors/ranger/prophecies/Ranger_Studded_Leather_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "steel-ingot",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Studded_Leather_armor",
  },
  {
    id: "ranger-elite-fur-lined-armor",
    name: "Elite Fur-Lined Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["the-granite-citadel"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Elite_Fur-Lined_armor_m.webp",
      female:
        "/images/armors/ranger/prophecies/Ranger_Elite_Fur-Lined_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "fur-square",
          quantity: 35,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Elite_Fur-Lined_armor",
  },
  {
    id: "ranger-elite-drakescale-armor",
    name: "Elite Drakescale Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["marhans-grotto"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Elite_Drakescale_armor_m.webp",
      female:
        "/images/armors/ranger/prophecies/Ranger_Elite_Drakescale_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "scale",
          quantity: 35,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Elite_Drakescale_armor",
  },
  {
    id: "ranger-elite-druid-armor",
    name: "Elite Druid Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["marhans-grotto"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Elite_Druid_armor_m.webp",
      female:
        "/images/armors/ranger/prophecies/Ranger_Elite_Druid_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "wood-plank",
          quantity: 350,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Elite_Druid_armor",
  },
  {
    id: "ranger-elite-studded-leather-armor",
    name: "Elite Studded Leather Armor",
    professionId: "ranger",
    campaignId: "prophecies",
    craftingLocationIds: ["the-granite-citadel"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/prophecies/Ranger_Elite_Studded_Leather_armor_m.webp",
      female:
        "/images/armors/ranger/prophecies/Ranger_Elite_Studded_Leather_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 35,
        },
      ],
    },
    wikiUrl:
      "https://wiki.guildwars.com/wiki/Ranger_Elite_Studded_Leather_armor",
  },

  {
    id: "ranger-shing-jea-armor",
    name: "Shing Jea Armor",
    professionId: "ranger",
    campaignId: "factions",
    craftingLocationIds: ["kaineng-center"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/factions/Ranger_Shing_Jea_armor_m.webp",
      female: "/images/armors/ranger/factions/Ranger_Shing_Jea_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "wood-plank",
          quantity: 200,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Shing_Jea_armor",
  },
  {
    id: "ranger-canthan-armor",
    name: "Canthan Armor",
    professionId: "ranger",
    campaignId: "factions",
    craftingLocationIds: ["kaineng-center"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/factions/Ranger_Canthan_armor_m.webp",
      female: "/images/armors/ranger/factions/Ranger_Canthan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "fur-square",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Canthan_armor",
  },
  {
    id: "ranger-kurzick-armor",
    name: "Kurzick Armor",
    professionId: "ranger",
    campaignId: "factions",
    craftingLocationIds: ["house-zu-heltzer"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/factions/Ranger_Kurzick_armor_m.webp",
      female: "/images/armors/ranger/factions/Ranger_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 32,
        },
        {
          materialId: "amber-chunk",
          quantity: 24,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Kurzick_armor",
  },
  {
    id: "ranger-luxon-armor",
    name: "Luxon Armor",
    professionId: "ranger",
    campaignId: "factions",
    craftingLocationIds: ["cavalon"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/factions/Ranger_Luxon_armor_m.webp",
      female: "/images/armors/ranger/factions/Ranger_Luxon_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "scale",
          quantity: 200,
        },
        {
          materialId: "chitin-fragment",
          quantity: 200,
        },
        {
          materialId: "jadeite-shard",
          quantity: 24,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Luxon_armor",
  },
  {
    id: "ranger-elite-canthan-armor",
    name: "Elite Canthan Armor",
    professionId: "ranger",
    campaignId: "factions",
    craftingLocationIds: ["divine-path"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/factions/Ranger_Elite_Canthan_armor_m.webp",
      female:
        "/images/armors/ranger/factions/Ranger_Elite_Canthan_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "scale",
          quantity: 400,
        },
        {
          materialId: "fur-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Elite_Canthan_armor",
  },
  {
    id: "ranger-elite-kurzick-armor",
    name: "Elite Kurzick Armor",
    professionId: "ranger",
    campaignId: "factions",
    craftingLocationIds: ["vasburg-armory"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/factions/Ranger_Elite_Kurzick_armor_m.webp",
      female:
        "/images/armors/ranger/factions/Ranger_Elite_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 40,
        },
        {
          materialId: "amber-chunk",
          quantity: 80,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Elite_Kurzick_armor",
  },
  {
    id: "ranger-elite-luxon-armor",
    name: "Elite Luxon Armor",
    professionId: "ranger",
    campaignId: "factions",
    craftingLocationIds: ["leviathan-pits"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/factions/Ranger_Elite_Luxon_armor_m.webp",
      female: "/images/armors/ranger/factions/Ranger_Elite_Luxon_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "scale",
          quantity: 400,
        },
        {
          materialId: "chitin-fragment",
          quantity: 400,
        },
        {
          materialId: "jadeite-shard",
          quantity: 80,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Elite_Luxon_armor",
  },

  {
    id: "ranger-istani-armor",
    name: "Istani Armor",
    professionId: "ranger",
    campaignId: "nightfall",
    craftingLocationIds: ["consulate-docks", "command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/nightfall/Ranger_Istani_armor_m.webp",
      female: "/images/armors/ranger/nightfall/Ranger_Istani_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "leather-square",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Istani_armor",
  },
  {
    id: "ranger-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "ranger",
    campaignId: "nightfall",
    craftingLocationIds: ["consulate-docks", "command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ranger/nightfall/Ranger_Sunspear_armor_m.webp",
      female: "/images/armors/ranger/nightfall/Ranger_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "chitin-fragment",
          quantity: 200,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Sunspear_armor",
  },
  {
    id: "ranger-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "ranger",
    campaignId: "nightfall",
    craftingLocationIds: ["command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/nightfall/Ranger_Elite_Sunspear_armor_m.webp",
      female:
        "/images/armors/ranger/nightfall/Ranger_Elite_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Elite_Sunspear_armor",
  },
  {
    id: "ranger-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "ranger",
    campaignId: "nightfall",
    craftingLocationIds: ["the-kodash-bazaar"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/nightfall/Ranger_Vabbian_armor_m.webp",
      female: "/images/armors/ranger/nightfall/Ranger_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Vabbian_armor",
  },
  {
    id: "ranger-ancient-armor",
    name: "Ancient Armor",
    professionId: "ranger",
    campaignId: "nightfall",
    craftingLocationIds: ["bone-palace"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/nightfall/Ranger_Ancient_armor_m.webp",
      female: "/images/armors/ranger/nightfall/Ranger_Ancient_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Ancient_armor",
  },
  {
    id: "ranger-primeval-armor",
    name: "Primeval Armor",
    professionId: "ranger",
    campaignId: "nightfall",
    craftingLocationIds: ["throne-of-secrets"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/nightfall/Ranger_Primeval_armor_m.webp",
      female: "/images/armors/ranger/nightfall/Ranger_Primeval_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bone",
          quantity: 400,
        },
        {
          materialId: "fur-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Primeval_armor",
  },

  {
    id: "ranger-norn-armor",
    name: "Norn Armor",
    professionId: "ranger",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["gunnars-hold"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/eotn/Ranger_Norn_armor_m.webp",
      female: "/images/armors/ranger/eotn/Ranger_Norn_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Norn_armor",
  },
  {
    id: "ranger-monument-armor",
    name: "Monument Armor",
    professionId: "ranger",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["eye-of-the-north"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/eotn/Ranger_Monument_armor_m.webp",
      female: "/images/armors/ranger/eotn/Ranger_Monument_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Monument_armor",
  },
  {
    id: "ranger-asuran-armor",
    name: "Asuran Armor",
    professionId: "ranger",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["rata-sum"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/eotn/Ranger_Asuran_armor_m.webp",
      female: "/images/armors/ranger/eotn/Ranger_Asuran_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Asuran_armor",
  },
  {
    id: "ranger-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "ranger",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["central-transfer-chamber"],
    pieces: ["chest", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/eotn/Ranger_Deldrimor_armor_m.webp",
      female: "/images/armors/ranger/eotn/Ranger_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 30000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 300,
        },
        {
          materialId: "leather-square",
          quantity: 20,
        },
        {
          materialId: "bolt-of-damask",
          quantity: 10,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Deldrimor_armor",
  },

  {
    id: "ranger-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "ranger",
    campaignId: "core",
    craftingLocationIds: ["the-fissure-of-woe"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ranger/core/Ranger_Obsidian_armor_m.webp",
      female: "/images/armors/ranger/core/Ranger_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "fur-square",
          quantity: 35,
        },
        {
          materialId: "glob-of-ectoplasm",
          quantity: 105,
        },
        {
          materialId: "obsidian-shard",
          quantity: 105,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Ranger_Obsidian_armor",
  },
];

export default rangerArmors;
