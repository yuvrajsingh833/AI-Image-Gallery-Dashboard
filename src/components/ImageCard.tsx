import React from "react";
import { Calendar, Image as ImageIcon } from "lucide-react";
import { Image } from "../types";

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

export function ImageCard({ image, onClick }: ImageCardProps) {
  const formattedDate = new Date(image.generationDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer hover:shadow-xl dark:shadow-gray-900/30"
      onClick={() => onClick(image)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={image.imageUrl}
          alt={image.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {image.title}
        </h3>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <ImageIcon className="w-4 h-4 mr-1" />
          <span>{image.aiModel}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {image.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
