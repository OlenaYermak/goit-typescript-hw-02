export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
    portfolio_url: string;
    instagram_username: string;
  };
  url: string;
  alt: string;
  author: string;
  portfolio: string;
  instagram: string;
}

export interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

