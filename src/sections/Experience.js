import Cards from '../components/Cards'


function Experience(){
    return(

    <div>
        <center>
            <div className="text-6xl py-10 font-Alata">
                Experiences
            </div>
        </center>
        <div className="flex justify-center">
<div className="flex items-stretch justify-center text-center">
        <div className="">
            <Cards title="Web Application" description="A supermarket managing application built with basic HTML CSS and Bootstrap" image={require('../ressources/supermarket.jpg')} use="Android Studio"/>
        </div>
        <div className=" ">
            <Cards title="Android App" description="A quiz game that was made using android studio paired with Java" image={require('../ressources/quiz.jpg')} use="HTML, CSS, BOOTSTRAP"/>
        </div>
        <div className=" ">
            <Cards title="Desktop Application" description="A taxi managing Desktop Application built using JavaFX" image={require('../ressources/Taxi.jpg')} use="JavaFX"/>
        </div>
    </div>
    </div>
    </div>
    );
}

export default Experience;