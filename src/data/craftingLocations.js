const craftingLocations = [
  // Prophecies armor crafting locations

  {
    id: "droknars-forge",
    name: "Droknar's Forge",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Droknar%27s_Forge",
  },
  {
    id: "the-granite-citadel",
    name: "The Granite Citadel",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/The_Granite_Citadel",
  },
  {
    id: "marhans-grotto",
    name: "Marhan's Grotto",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Marhan%27s_Grotto",
  },

  // Factions armor crafting locations

  {
    id: "kaineng-center",
    name: "Kaineng Center",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Kaineng_Center",
  },
  {
    id: "wajjun-bazaar",
    name: "Wajjun Bazaar",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Wajjun_Bazaar",
  },
  {
    id: "bukdek-byway",
    name: "Bukdek Byway",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Bukdek_Byway",
  },
  {
    id: "house-zu-heltzer",
    name: "House zu Heltzer",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/House_zu_Heltzer",
  },
  {
    id: "cavalon",
    name: "Cavalon",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Cavalon",
  },
  {
    id: "divine-path",
    name: "Divine Path",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Divine_Path",
  },
  {
    id: "vasburg-armory",
    name: "Vasburg Armory",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Vasburg_Armory",
  },
  {
    id: "leviathan-pits",
    name: "Leviathan Pits",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Leviathan_Pits",
  },

  // Nightfall armor crafting locations

  {
    id: "consulate-docks",
    name: "Consulate Docks",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Consulate_Docks",
  },
  {
    id: "command-post",
    name: "Command Post",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Command_Post",
  },
  {
    id: "the-kodash-bazaar",
    name: "The Kodash Bazaar",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/The_Kodash_Bazaar",
  },
  {
    id: "bone-palace",
    name: "Bone Palace",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Bone_Palace",
  },
  {
    id: "throne-of-secrets",
    name: "Throne of Secrets",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Throne_of_Secrets",
  },

  // Eye of the North armor crafting locations

  {
    id: "boreal-station",
    name: "Boreal Station",
    campaignId: "eye-of-the-north",
    wikiUrl: "https://wiki.guildwars.com/wiki/Boreal_Station",
  },
  {
    id: "gunnars-hold",
    name: "Gunnar's Hold",
    campaignId: "eye-of-the-north",
    wikiUrl: "https://wiki.guildwars.com/wiki/Gunnar%27s_Hold",
  },
  {
    id: "rata-sum",
    name: "Rata Sum",
    campaignId: "eye-of-the-north",
    wikiUrl: "https://wiki.guildwars.com/wiki/Rata_Sum",
  },
  {
    id: "eye-of-the-north",
    name: "Eye of the North",
    campaignId: "eye-of-the-north",
    wikiUrl: "https://wiki.guildwars.com/wiki/Eye_of_the_North_(outpost)",
  },
  {
    id: "central-transfer-chamber",
    name: "Central Transfer Chamber",
    campaignId: "eye-of-the-north",
    wikiUrl: "https://wiki.guildwars.com/wiki/Central_Transfer_Chamber",
  },
  {
    id: "the-fissure-of-woe",
    name: "The Fissure of Woe",
    campaignId: "core",
    wikiUrl: "https://wiki.guildwars.com/wiki/The_Fissure_of_Woe",
  },

  // Prophecies artisan locations

  {
    id: "old-ascalon",
    name: "Old Ascalon",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Old_Ascalon",
  },
  {
    id: "regent-valley",
    name: "Regent Valley",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Regent_Valley",
  },
  {
    id: "ascalon-foothills",
    name: "Ascalon Foothills",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Ascalon_Foothills",
  },
  {
    id: "deldrimor-bowl",
    name: "Deldrimor Bowl",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Deldrimor_Bowl",
  },
  {
    id: "nebo-terrace",
    name: "Nebo Terrace",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Nebo_Terrace",
  },
  {
    id: "talmark-wilderness",
    name: "Talmark Wilderness",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Talmark_Wilderness",
  },
  {
    id: "mamnoon-lagoon",
    name: "Mamnoon Lagoon",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Mamnoon_Lagoon",
  },
  {
    id: "tangle-root",
    name: "Tangle Root",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Tangle_Root",
  },
  {
    id: "the-arid-sea",
    name: "The Arid Sea",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/The_Arid_Sea",
  },
  {
    id: "salt-flats",
    name: "Salt Flats",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Salt_Flats",
  },
  {
    id: "talus-chute",
    name: "Talus Chute",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Talus_Chute",
  },
  {
    id: "mineral-springs",
    name: "Mineral Springs",
    campaignId: "prophecies",
    wikiUrl: "https://wiki.guildwars.com/wiki/Mineral_Springs",
  },

  // Factions artisan locations

  {
    id: "panjiang-peninsula",
    name: "Panjiang Peninsula",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Panjiang_Peninsula",
  },
  {
    id: "seitung-harbor",
    name: "Seitung Harbor",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Seitung_Harbor",
  },
  {
    id: "haiju-lagoon",
    name: "Haiju Lagoon",
    campaignId: "factions",
    wikiUrl: "https://wiki.guildwars.com/wiki/Haiju_Lagoon",
  },

  // Nightfall artisan locations

  {
    id: "issnur-isles",
    name: "Issnur Isles",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Issnur_Isles",
  },
  {
    id: "mehtani-keys",
    name: "Mehtani Keys",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Mehtani_Keys",
  },
  {
    id: "marga-coast",
    name: "Marga Coast",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Marga_Coast",
  },
  {
    id: "jahai-bluffs",
    name: "Jahai Bluffs",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Jahai_Bluffs",
  },
  {
    id: "turais-procession",
    name: "Turai's Procession",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Turai%27s_Procession",
  },
  {
    id: "barbarous-shore",
    name: "Barbarous Shore",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Barbarous_Shore",
  },
  {
    id: "forum-highlands",
    name: "Forum Highlands",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Forum_Highlands",
  },
  {
    id: "wilderness-of-bahdza",
    name: "Wilderness of Bahdza",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Wilderness_of_Bahdza",
  },
  {
    id: "garden-of-seborhin",
    name: "Garden of Seborhin",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Garden_of_Seborhin",
  },
  {
    id: "crystal-overlook",
    name: "Crystal Overlook",
    campaignId: "nightfall",
    wikiUrl: "https://wiki.guildwars.com/wiki/Crystal_Overlook",
  },

  // Eye of the North artisan locations

  {
    id: "varajar-fells",
    name: "Varajar Fells",
    campaignId: "eye-of-the-north",
    wikiUrl: "https://wiki.guildwars.com/wiki/Varajar_Fells",
  },
  {
    id: "arbor-bay",
    name: "Arbor Bay",
    campaignId: "eye-of-the-north",
    wikiUrl: "https://wiki.guildwars.com/wiki/Arbor_Bay",
  },
];

export default craftingLocations;
