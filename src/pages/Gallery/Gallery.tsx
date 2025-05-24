import { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/facial-1.jpg",
      alt: "Ayurvedic Facial Treatment",
      category: "Facial",
    },
    {
      id: 2,
      src: "/images/gallery/massage-1.jpg",
      alt: "Traditional Massage",
      category: "Massage",
    },
    {
      id: 3,
      src: "/images/gallery/hair-1.jpg",
      alt: "Hair Care Treatment",
      category: "Hair Care",
    },
    {
      id: 4,
      src: "/images/gallery/facial-2.jpg",
      alt: "Herbal Facial",
      category: "Facial",
    },
    {
      id: 5,
      src: "/images/gallery/massage-2.jpg",
      alt: "Body Treatment",
      category: "Massage",
    },
    {
      id: 6,
      src: "/images/gallery/hair-2.jpg",
      alt: "Hair Spa",
      category: "Hair Care",
    },
    {
      id: 7,
      src: "/images/gallery/facial-3.jpg",
      alt: "Gold Facial",
      category: "Facial",
    },
    {
      id: 8,
      src: "/images/gallery/massage-3.jpg",
      alt: "Shirodhara Treatment",
      category: "Massage",
    },
    {
      id: 9,
      src: "/images/gallery/hair-3.jpg",
      alt: "Hair Coloring",
      category: "Hair Care",
    },
  ];

  const categories = ["All", "Facial", "Massage", "Hair Care"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <div className="gallery">
      <section className="gallery-hero">
        <h1>Our Gallery</h1>
        <p>Explore our treatments and facilities</p>
      </section>

      <section className="gallery-content">
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image.src)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="image-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected treatment" />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
