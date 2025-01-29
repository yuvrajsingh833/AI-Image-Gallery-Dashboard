import { Image } from "../types";

const getRandomTags = () => {
  const allTags = [
    "nature",
    "abstract",
    "portrait",
    "landscape",
    "sci-fi",
    "fantasy",
    "space",
    "cyberpunk",
    "minimal",
    "colorful",
    "dark",
    "surreal",
    "geometric",
    "organic",
    "futuristic",
    "retro",
    "ethereal",
    "dystopian",
    "mystical",
    "urban",
  ];
  const numTags = Math.floor(Math.random() * 3) + 2; 
  const tags = [];
  for (let i = 0; i < numTags; i++) {
    const randomTag = allTags[Math.floor(Math.random() * allTags.length)];
    if (!tags.includes(randomTag)) {
      tags.push(randomTag);
    }
  }
  return tags;
};


const getRandomAIModel = () => {
  const models = ["Stable Diffusion", "Midjourney", "DALL-E", "Leonardo AI"];
  return models[Math.floor(Math.random() * models.length)];
};


export const images: Image[] = Array.from({ length: 100 }, (_, i) => {
  const id = (i + 1).toString().padStart(3, "0");
  const width = 800;
  const height = 600;

  const imageUrls = [
    "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3",
    "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
    "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f",
    "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1",
  ];

  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));

  const themes = [
    "Dream",
    "Vision",
    "Imagination",
    "Fantasy",
    "Reality",
    "Dimension",
    "Universe",
    "World",
    "Realm",
    "Creation",
  ];
  const adjectives = [
    "Ethereal",
    "Cosmic",
    "Digital",
    "Mystic",
    "Quantum",
    "Neural",
    "Synthetic",
    "Virtual",
    "Artificial",
    "Cybernetic",
  ];
  const subjects = [
    "Landscape",
    "Portrait",
    "Abstract",
    "Scene",
    "Composition",
    "Expression",
    "Perspective",
    "Visualization",
    "Interpretation",
    "Manifestation",
  ];

  return {
    id,
    title: `${adjectives[i % 10]} ${themes[Math.floor(i / 10) % 10]} ${
      subjects[i % 10]
    }`,
    imageUrl: imageUrls[i % imageUrls.length],
    generationDate: date.toISOString(),
    aiModel: getRandomAIModel(),
    tags: getRandomTags(),
  };
});
