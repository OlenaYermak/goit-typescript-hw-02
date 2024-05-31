import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { fetchImages } from '../imageSearch-api';
import { Image, FetchImagesResponse } from '../../types';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

Modal.setAppElement('#root');

export default function App(): JSX.Element {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleSearch = async (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (query === '') return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        const data: FetchImagesResponse = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [page, query]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          isOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          setSelectedImage={setSelectedImage}
        />
      )}
      {isLoading && <Loader />}
      {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedImage={selectedImage}
        />
      )}
      {images.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </>
  );
}
