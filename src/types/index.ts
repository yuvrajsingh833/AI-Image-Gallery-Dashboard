export interface Image {
  id: string;
  title: string;
  imageUrl: string;
  generationDate: string;
  aiModel: string;
  tags: string[];
}

export type AIModel =
  | "Stable Diffusion"
  | "Midjourney"
  | "DALL-E"
  | "Leonardo AI";

export interface FilterState {
  search: string;
  aiModel: string | null;
  currentPage: number;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
