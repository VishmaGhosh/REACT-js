import { useState } from 'react';
import ImgComp from './ImgComp';
import './app.css'

function App() {
  const arr = [0, 1, 2]
  const [pad, setPad] = useState(20)
  const increasePad = () => {
    setPad(pad + 20)
    console.log(pad);
  }
  return (
    <div className="container text-center">

      <div className="container-xl flex-box text-center border border-dark border-4 border-round m-1">

        <div class="text-sm-center text-xl-start text-md-start text-lg-start">
          <ImgComp />
        </div>

        <div class="text-sm-center px-sm-5">
          <ImgComp />
        </div>

        <div class="text-md-end text-sm-center">
          <ImgComp />
        </div>
      </div>

      <div className="container-xl text-center border border-dark border-4 m-1">

        <div class="text-sm-center text-xl-start text-md-start text-lg-start">
          <ImgComp />
        </div>

        <div class="text-sm-center px-sm-5">
          <ImgComp />
        </div>

        <div class="text-md-end text-sm-center">
          <ImgComp />
        </div>
      </div>

      <div className="container-xl text-center border border-dark border-4 m-1">

        <div class="text-sm-center text-xl-start text-md-start text-lg-start">
          <ImgComp />
        </div>

        <div class="text-sm-center px-sm-5">
          <ImgComp />
        </div>

        <div class="text-md-end text-sm-center">
          <ImgComp />
        </div>
      </div>




    </div>
  );
}

export default App;
