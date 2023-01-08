import result from '../ressources/Myers-icon.png';
import mind from '../ressources/Myers-icon2.png';
import energy from '../ressources/Myers-icon3.png';
import nature from '../ressources/Myers-icon4.png';
import tactics from '../ressources/Myers-icon5.png';
import identity from '../ressources/Myers-icon6.png';

function Myers(){
    return (
<div>
      <center><div className="text-6xl py-10 font-Alata">
        Myers-Briggs
      </div></center>
      <div id="carouselExampleCaptions" className="carousel slide carousel-dark relative pt-10" data-bs-ride="carousel">
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center pt-20 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1">

            </button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2">
            </button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3">
            </button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4">

            </button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5">

            </button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6">

            </button>
          </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={result}
              className="block w-full"
              alt="..."/>
          </div>
    
    <div className="carousel-item relative float-left w-full">
      <img
        src={mind}
        className="block w-full"
        alt="..."
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src={energy}
        className="block w-full"
        alt="..."
      />
    </div>

    <div className="carousel-item relative float-left w-full">
      <img
        src={nature}
        className="block w-full"
        alt="..."
      />
    </div>

    <div className="carousel-item relative float-left w-full">
      <img
        src={tactics}
        className="block w-full"
        alt="..."
      />
    </div>

    <div className="carousel-item relative float-left w-full">
      <img
        src={identity}
        className="block w-full"
        alt="..."
      />
    </div>
    
  </div>
  
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  <br/><br/><br/><br/>
</div></div>
  );
}

export default Myers;