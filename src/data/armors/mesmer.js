const mesmerArmors = [
  {
    id: "mesmer-ascalon-armor",
    name: "Ascalon Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["kaineng-center"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Ascalon_armor_m.webp",
      female: "/images/armors/mesmer/prophecies/Mesmer_Ascalon_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Ascalon_armor",
  },
  {
    id: "mesmer-krytan-armor",
    name: "Krytan Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["bukdek-byway"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Krytan_armor_m.webp",
      female: "/images/armors/mesmer/prophecies/Mesmer_Krytan_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Krytan_armor",
  },
  {
    id: "mesmer-tyrian-armor",
    name: "Tyrian Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge", "wajjun-bazaar", "boreal-station"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Tyrian_armor_m.webp",
      female: "/images/armors/mesmer/prophecies/Mesmer_Tyrian_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Tyrian_armor",
  },
  {
    id: "mesmer-rogue-armor",
    name: "Rogue Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Rogue_armor_m.webp",
      female: "/images/armors/mesmer/prophecies/Mesmer_Rogue_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Rogue_armor",
  },
  {
    id: "mesmer-courtly-armor",
    name: "Courtly Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Courtly_armor_m.webp",
      female: "/images/armors/mesmer/prophecies/Mesmer_Courtly_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Courtly_armor",
  },
  {
    id: "mesmer-performer-armor",
    name: "Performer Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Performer_armor_m.webp",
      female: "/images/armors/mesmer/prophecies/Mesmer_Performer_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Performer_armor",
  },
  {
    id: "mesmer-enchanter-armor",
    name: "Enchanter Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["droknars-forge"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Enchanter_armor_m.webp",
      female: "/images/armors/mesmer/prophecies/Mesmer_Enchanter_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "pile-of-glittering-dust",
          quantity: 28,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Enchanter_armor",
  },
  {
    id: "mesmer-elite-rogue-armor",
    name: "Elite Rogue Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["marhans-grotto"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Elite_Rogue_armor_m.webp",
      female:
        "/images/armors/mesmer/prophecies/Mesmer_Elite_Rogue_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 35,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Elite_Rogue_armor",
  },
  {
    id: "mesmer-elite-noble-armor",
    name: "Elite Noble Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["the-granite-citadel"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Elite_Noble_armor_m.webp",
      female:
        "/images/armors/mesmer/prophecies/Mesmer_Elite_Noble_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-damask",
          quantity: 35,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Elite_Noble_armor",
  },
  {
    id: "mesmer-elite-elegant-armor",
    name: "Elite Elegant Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["the-granite-citadel"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Elite_Elegant_armor_m.webp",
      female:
        "/images/armors/mesmer/prophecies/Mesmer_Elite_Elegant_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 35,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Elite_Elegant_armor",
  },
  {
    id: "mesmer-elite-enchanter-armor",
    name: "Elite Enchanter Armor",
    professionId: "mesmer",
    campaignId: "prophecies",
    craftingLocationIds: ["marhans-grotto"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/prophecies/Mesmer_Elite_Enchanter_armor_m.webp",
      female:
        "/images/armors/mesmer/prophecies/Mesmer_Elite_Enchanter_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "pile-of-glittering-dust",
          quantity: 35,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Elite_Enchanter_armor",
  },

  {
    id: "mesmer-shing-jea-armor",
    name: "Shing Jea Armor",
    professionId: "mesmer",
    campaignId: "factions",
    craftingLocationIds: ["kaineng-center"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/factions/Mesmer_Shing_Jea_armor_m.webp",
      female: "/images/armors/mesmer/factions/Mesmer_Shing_Jea_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Shing_Jea_armor",
  },
  {
    id: "mesmer-canthan-armor",
    name: "Canthan Armor",
    professionId: "mesmer",
    campaignId: "factions",
    craftingLocationIds: ["kaineng-center"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/factions/Mesmer_Canthan_armor_m.webp",
      female: "/images/armors/mesmer/factions/Mesmer_Canthan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Canthan_armor",
  },
  {
    id: "mesmer-kurzick-armor",
    name: "Kurzick Armor",
    professionId: "mesmer",
    campaignId: "factions",
    craftingLocationIds: ["house-zu-heltzer"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/factions/Mesmer_Kurzick_armor_m.webp",
      female: "/images/armors/mesmer/factions/Mesmer_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 32,
        },
        {
          materialId: "amber-chunk",
          quantity: 24,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Kurzick_armor",
  },
  {
    id: "mesmer-luxon-armor",
    name: "Luxon Armor",
    professionId: "mesmer",
    campaignId: "factions",
    craftingLocationIds: ["cavalon"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/factions/Mesmer_Luxon_armor_m.webp",
      female: "/images/armors/mesmer/factions/Mesmer_Luxon_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 32,
        },
        {
          materialId: "jadeite-shard",
          quantity: 24,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Luxon_armor",
  },
  {
    id: "mesmer-elite-canthan-armor",
    name: "Elite Canthan Armor",
    professionId: "mesmer",
    campaignId: "factions",
    craftingLocationIds: ["divine-path"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/factions/Mesmer_Elite_Canthan_armor_m.webp",
      female:
        "/images/armors/mesmer/factions/Mesmer_Elite_Canthan_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Elite_Canthan_armor",
  },
  {
    id: "mesmer-elite-kurzick-armor",
    name: "Elite Kurzick Armor",
    professionId: "mesmer",
    campaignId: "factions",
    craftingLocationIds: ["vasburg-armory"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/factions/Mesmer_Elite_Kurzick_armor_m.webp",
      female:
        "/images/armors/mesmer/factions/Mesmer_Elite_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 40,
        },
        {
          materialId: "amber-chunk",
          quantity: 80,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Elite_Kurzick_armor",
  },
  {
    id: "mesmer-elite-luxon-armor",
    name: "Elite Luxon Armor",
    professionId: "mesmer",
    campaignId: "factions",
    craftingLocationIds: ["leviathan-pits"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/factions/Mesmer_Elite_Luxon_armor_m.webp",
      female: "/images/armors/mesmer/factions/Mesmer_Elite_Luxon_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 40,
        },
        {
          materialId: "jadeite-shard",
          quantity: 80,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Elite_Luxon_armor",
  },

  {
    id: "mesmer-istani-armor",
    name: "Istani Armor",
    professionId: "mesmer",
    campaignId: "nightfall",
    craftingLocationIds: ["consulate-docks", "command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/nightfall/Mesmer_Istani_armor_m.webp",
      female: "/images/armors/mesmer/nightfall/Mesmer_Istani_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Istani_armor",
  },
  {
    id: "mesmer-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "mesmer",
    campaignId: "nightfall",
    craftingLocationIds: ["consulate-docks", "command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/mesmer/nightfall/Mesmer_Sunspear_armor_m.webp",
      female: "/images/armors/mesmer/nightfall/Mesmer_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 32,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Sunspear_armor",
  },
  {
    id: "mesmer-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "mesmer",
    campaignId: "nightfall",
    craftingLocationIds: ["command-post"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/nightfall/Mesmer_Elite_Sunspear_armor_m.webp",
      female:
        "/images/armors/mesmer/nightfall/Mesmer_Elite_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Elite_Sunspear_armor",
  },
  {
    id: "mesmer-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "mesmer",
    campaignId: "nightfall",
    craftingLocationIds: ["the-kodash-bazaar"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/nightfall/Mesmer_Vabbian_armor_m.webp",
      female: "/images/armors/mesmer/nightfall/Mesmer_Vabbian_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Vabbian_armor",
  },
  {
    id: "mesmer-ancient-armor",
    name: "Ancient Armor",
    professionId: "mesmer",
    campaignId: "nightfall",
    craftingLocationIds: ["bone-palace"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/nightfall/Mesmer_Ancient_armor_m.webp",
      female: "/images/armors/mesmer/nightfall/Mesmer_Ancient_armor_f.webp",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Ancient_armor",
  },
  {
    id: "mesmer-primeval-armor",
    name: "Primeval Armor",
    professionId: "mesmer",
    campaignId: "nightfall",
    craftingLocationIds: ["throne-of-secrets"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/nightfall/Mesmer_Primeval_armor_m.webp",
      female: "/images/armors/mesmer/nightfall/Mesmer_Primeval_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "fur-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Primeval_armor",
  },

  {
    id: "mesmer-norn-armor",
    name: "Norn Armor",
    professionId: "mesmer",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["gunnars-hold"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/eotn/Mesmer_Norn_armor_m.webp",
      female: "/images/armors/mesmer/eotn/Mesmer_Norn_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "fur-square",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Norn_armor",
  },
  {
    id: "mesmer-asuran-armor",
    name: "Asuran Armor",
    professionId: "mesmer",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["rata-sum"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/eotn/Mesmer_Asuran_armor_m.webp",
      female: "/images/armors/mesmer/eotn/Mesmer_Asuran_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Asuran_armor",
  },
  {
    id: "mesmer-monument-armor",
    name: "Monument Armor",
    professionId: "mesmer",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["eye-of-the-north"],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/eotn/Mesmer_Monument_armor_m.webp",
      female: "/images/armors/mesmer/eotn/Mesmer_Monument_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 40,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Monument_armor",
  },
  {
    id: "mesmer-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "mesmer",
    campaignId: "eye-of-the-north",
    craftingLocationIds: ["gunnars-hold"],
    pieces: ["chest", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/eotn/Mesmer_Deldrimor_armor_m.webp",
      female: "/images/armors/mesmer/eotn/Mesmer_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 30000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 300,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 30,
        },
      ],
    },
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Deldrimor_armor",
  },

  {
    id: "mesmer-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "mesmer",
    campaignId: "core",
    craftingLocationIds: ["the-fissure-of-woe"],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/mesmer/core/Mesmer_Obsidian_armor_m.webp",
      female: "/images/armors/mesmer/core/Mesmer_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "elonian-leather-square",
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
    wikiUrl: "https://wiki.guildwars.com/wiki/Mesmer_Obsidian_armor",
  },
];

export default mesmerArmors;
