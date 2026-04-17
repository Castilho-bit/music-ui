import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section>
          <img className='fotomusica' src="foto.jpg" alt="foto" />
          <h1>ROCKSTAR.</h1>
          <p>(feat.roddy ricch)</p>
          <h2>Top Tracks</h2>
          <a href="https://www.youtube.com/watch?v=mxFstYSbBmc" target="_blank">
            <button className='play'>Play</button>
          </a>
          <a href="https://www.youtube.com/watch?v=UNZqm3dxd2w" target="_blank">
            <button className='shuffle'>Shuffle</button>
          </a>
          <div className='lista'>
            <div className='musica'>
              <p>1</p>
              <img className='img1' src="foto.jpg" alt="foto1" />
              <div>
                <h4>Rockstar</h4>
                <p>(feat. Roddy Ricch)</p>
              </div>
            </div>
            <div className='musica'>
              <p>2</p>
              <img className='img2' src="RoddyRicch.jpg" alt="foto2" />
              <div>
                <h4>The Box</h4>
                <p>(Roddy Ricch)</p>
              </div>
            </div>
            <div className='musica'>
              <p>3</p>
              <img className='img3' src="Deady.png" alt="foto3" />
              <div>
                <h4>Suge</h4>
                <p>(DaBaby)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App