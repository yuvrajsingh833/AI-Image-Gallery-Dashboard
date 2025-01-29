import React from "react";
import { AIModel } from "../types";

interface ModelFilterProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

const AI_MODELS: AIModel[] = [
  "Stable Diffusion",
  "Midjourney",
  "DALL-E",
  "Leonardo AI",
];

export function ModelFilter({ value, onChange }: ModelFilterProps) {
  return (
    <select
      value={value || ""}
      onChange={(e) => onChange(e.target.value || null)}
      className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
    >
      <option value="">All Models</option>
      {AI_MODELS.map((model) => (
        <option key={model} value={model}>
          {model}
        </option>
      ))}
    </select>
  );
}
