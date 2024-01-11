import React, { useEffect, useState } from 'react'
import { GlobalStyle, Wrap } from './styles'

const App = () => {

  // generate array from 1 to 50
  const cards = Array.from({length : 50},(_, i)=> i + 1);

  const [scrollBarWidth, setScrollBarWidth] = useState(0)

  // progress scrollbar
  useEffect(()=>{
    const handleScroll = () => {
      let percentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

      setScrollBarWidth(percentage);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <div className="scrollbar" style={{ width : `${scrollBarWidth}%`}}/>
        <div className="container">
          {
            cards.map((value, index)=>{
              return (
                <div key={index} className="cards">{value}</div>
              )
            })
          }
        </div>
      </Wrap>
    </>
  )
}

export default App