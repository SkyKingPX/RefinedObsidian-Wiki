export const recipes = [
  {
    name: "RefinedObsidian Ingot",
    type: "crafting",
    ingredients: [
      { name: "Obsidian", position: 0 },
      { name: "Blaze Powder", position: 1 },
      { name: "Ender Pearl", position: 3 },
      { name: "Diamond", position: 4 },
      { name: "Blaze Powder", position: 7 },
    ],
    result: { name: "RefinedObsidian Ingot", count: 2 },
  },
  {
    name: "Obsidian Crystal",
    type: "crafting",
    ingredients: [
      { name: "RefinedObsidian Ingot", position: 0 },
      { name: "Diamond", position: 1 },
      { name: "Ender Pearl", position: 3 },
      { name: "Glowstone Dust", position: 4 },
      { name: "Quartz", position: 7 },
    ],
    result: { name: "Obsidian Crystal", count: 1 },
  },
  {
    name: "RefinedObsidian Pickaxe",
    type: "crafting",
    ingredients: [
      { name: "RefinedObsidian Ingot", position: 0 },
      { name: "RefinedObsidian Ingot", position: 1 },
      { name: "RefinedObsidian Ingot", position: 2 },
      { name: "Stick", position: 4 },
      { name: "Stick", position: 7 },
    ],
    result: { name: "RefinedObsidian Pickaxe", count: 1 },
  },
  {
    name: "Obsidian Dust",
    type: "stonecutting",
    ingredients: [{ name: "Obsidian", position: 0 }],
    result: { name: "Obsidian Dust", count: 4 },
  },
  {
    name: "Purified Obsidian",
    type: "smelting",
    ingredients: [{ name: "Obsidian", position: 0 }],
    result: { name: "Purified Obsidian", count: 1 },
  },
  {
    name: "Purified Obsidian",
    type: "blasting",
    ingredients: [{ name: "Obsidian", position: 0 }],
    result: { name: "Purified Obsidian", count: 1 },
  },
];
