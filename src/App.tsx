import React, { useState, useMemo } from "react";
import { ImageCard } from "./components/ImageCard";
import { ImageModal } from "./components/ImageModal";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Pagination } from "./components/Pagination";
import { images } from "./data/images";
import { Image, FilterState } from "./types";

const IMAGES_PER_PAGE = 10;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    aiModel: null,
    currentPage: 1,
  });

  // Apply filters to images
  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      const matchesSearch =
        image.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        image.tags.some((tag) =>
          tag.toLowerCase().includes(filters.search.toLowerCase())
        );
      const matchesModel =
        !filters.aiModel || image.aiModel === filters.aiModel;
      return matchesSearch && matchesModel;
    });
  }, [filters.search, filters.aiModel]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
  const paginatedImages = useMemo(() => {
    const startIndex = (filters.currentPage - 1) * IMAGES_PER_PAGE;
    return filteredImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  }, [filteredImages, filters.currentPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, currentPage: page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle dark mode
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header
        darkMode={darkMode}
        searchValue={filters.search}
        modelValue={filters.aiModel}
        onSearchChange={(value) =>
          setFilters((prev) => ({ ...prev, search: value, currentPage: 1 }))
        }
        onModelChange={(value) =>
          setFilters((prev) => ({ ...prev, aiModel: value, currentPage: 1 }))
        }
        onDarkModeToggle={() => setDarkMode(!darkMode)}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        {filteredImages.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedImages.map((image) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  onClick={setSelectedImage}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={filters.currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No images found matching your criteria
            </p>
          </div>
        )}
      </main>

      <Footer />

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default App;
