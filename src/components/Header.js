import photo from '../ressources/photo2.png';

function Header(){
    return(
        <div className="bg-[url('./ressources/header-bg.jpg')] ">
      <div className='pr-20 pb-40 pt-10 font-Alata'>
      <img src={photo}/>
          <div className='text-3xl text-secondary text-right font-Alata'>
            Hi there ! My name is
          </div>
        <div className='text-9xl text-white text-right font-Alata'> 
            KHALDI <br/> ACHRAF
          </div>
        <div className='text-3xl text-white text-right font-Alata'>
             <div className=''>And I'm a <div className='inline text-secondary'>computer engineer</div> <br/> and an aspiring game developer</div>
        </div>
      </div>
    </div>
    );
}

export default Header;