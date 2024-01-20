import React, { useEffect, useState } from 'react';
import { GlobalStyle, ImageComponentWrap, Wrap } from './styles';
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// React.memo로 감싼 ImageComponent
const ImageComponent = React.memo(({ value }) => {
  return (
    <ImageComponentWrap>
      <img src={value.src} alt={value.alt} loading="lazy" />
    </ImageComponentWrap>
  );
});

const App = () => {
  const [images, setImages] = useState([]);
  const startCount = 10;
  let imageNumber = 5;

  // Add new image
  const addImage = newImage => {
    setImages(currentImages => [...currentImages, newImage]);
  };

  useEffect(() => {
    // Add 10 more images after initial 4 images
    for (let i = 0; i < startCount; i++) {
      addImage({
        src: `https://picsum.photos/300/200?random=${imageNumber}`,
        alt: `Image${imageNumber}`
      });
      imageNumber++;
    }

    // Add images when scroll reaches 90% of viewport
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      markers: true,
      onUpdate: self => {
        if (self.progress.toFixed(2) >= 0.9 && self.direction === 1) {
          addImage({
            src: `https://picsum.photos/300/200?random=${imageNumber++}`,
            alt: `Image${imageNumber}`
          });
          ScrollTrigger.refresh();
        }
      }
    });
  }, []);

  // GSAP animation when new image is shown
  useEffect(() => {
    images.forEach((_, index) => {
      const div = document.querySelectorAll('.container > div')[index];
      const img = div.querySelector('img');

      gsap.fromTo(div,
        { scale: 0 },
        {
          scrollTrigger: {
            trigger: div,
            start: "top bottom",
            end: "top 50%",
            scrub: true,
          },
          scale: 1,
          ease: "back.out(2)"
        }
      );

      gsap.fromTo(img,
        { opacity: 0, filter: "contrast(5)" },
        {
          scrollTrigger: {
            trigger: div,
            start: "top bottom",
            end: "top 50%",
            scrub: true
          },
          opacity: 1,
          filter: "contrast(1)"
        }
      );
    });
  }, [images]);

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <div className="container">
          {/* first 4 images */}
          <ImageComponentWrap>
            <img src="https://picsum.photos/300/200?random=1" alt="" />
          </ImageComponentWrap>
          <ImageComponentWrap>
            <img src="https://picsum.photos/300/200?random=2" alt="" />
          </ImageComponentWrap>
          <ImageComponentWrap>
            <img src="https://picsum.photos/300/200?random=3" alt="" />
          </ImageComponentWrap>
          <ImageComponentWrap>
            <img src="https://picsum.photos/300/200?random=4" alt="" />
          </ImageComponentWrap>
          {/* additional images */}
          {images.map((value, index) => (
            <ImageComponent key={index} value={value} />
          ))}
        </div>
      </Wrap>
    </>
  );
};

export default App;
