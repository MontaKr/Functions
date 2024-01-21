import React, { useEffect, useState } from 'react';
import { GlobalStyle, ImageComponentWrap, Wrap } from './styles';
import { gsap, ScrollTrigger } from "gsap/all";

// register ScrollTrigger PlugIn
gsap.registerPlugin(ScrollTrigger);

const ImageWrap = React.memo(({image}) => {
  return (
    <ImageComponentWrap>
      <img src={`https://picsum.photos/300/200?random=${image}`} alt={`Image${image}`} />
    </ImageComponentWrap>
  )
})

const App = () => {

  // image array
  const [images, setImages] = useState([])
  let imageNumber = 5;

  // image add function
  const addImage = (newImage) => {
    setImages((currentImages)=>[...currentImages, newImage])
  }

  // generate initial 10 images
  useEffect(()=>{
    for(let i=0; i<10; i++) {
      addImage(i)
    }
  },[])

  // Call new image when scroll reaches 90% of viewport
  useEffect(()=>{
    ScrollTrigger.create({
      trigger : document.body,
      start : "top top",
      end : "bottom bottom",
      markers : true,
      onUpdate : (self)=> {
        if(self.progress.toFixed(2) >= 0.9 && self.direction === 1) {
          addImage(imageNumber++)
          ScrollTrigger.refresh();
        }
      }
    })
  },[])

  // image animation
  useEffect(()=>{
    images.forEach((image,index)=>{
      const div = document.querySelectorAll(".container > div")[index];
      const img = div.querySelector("img");

      gsap.fromTo(div,{
        scale : 0
      },{
        scrollTrigger : {
          trigger : div,
          start : "top bottom",
          end : "top 50%",
          scrub : true
        },
        scale : 1,
        ease : "back.out(2)"
      })

      gsap.fromTo(img, {
        opacity : 0,
        filter: "contrast(5)"
      },{
        scrollTrigger : {
          trigger : div,
          start: "top bottom",
          end: "top 50%",
          scrub: true
        },
        opacity : 1,
        filter: "contrast(1)"
      })
    })
  },[images])

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <div className="container">
          {
            images.map((image,index)=>{
              return (
                <ImageWrap key={index} image={image} />
              )
            })
          }
        </div>
      </Wrap>
    </>
  );
};

export default App;
