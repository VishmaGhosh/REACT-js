import ImgComp from './ImgComp';
import './app.css'

function App() {
  return (
    <div className="container text-center">

      <div className="container-xl flex-box text-center border border-dark border-4 border-round m-1">

        <div className="text-sm-center text-xl-start text-md-start text-lg-start">
          <ImgComp />
        </div>

        <div className="text-sm-center px-sm-5">
          <ImgComp />
        </div>

        <div className="text-md-end text-sm-center">
          <ImgComp />
        </div>
      </div>

      <div className="container-xl text-center border border-dark border-4 m-1">

        <div className="text-sm-center text-xl-start text-md-start text-lg-start">
          <ImgComp />
        </div>

        <div className="text-sm-center px-sm-5">
          <ImgComp />
        </div>

        <div className="text-md-end text-sm-center">
          <ImgComp />
        </div>
      </div>

      <div className="container-xl text-center border border-dark border-4 m-1">

        <div className="text-sm-center text-xl-start text-md-start text-lg-start">
          <ImgComp />
        </div>

        <div className="text-sm-center px-sm-5">
          <ImgComp />
        </div>

        <div className="text-md-end text-sm-center">
          <ImgComp />
        </div>
      </div>




    </div>
  );
}

export default App;
