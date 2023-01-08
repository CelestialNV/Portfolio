import background from '../ressources/standard-bg.jpg';
import Card from '../components/Card';

function Strenghts(){
    return(
        <div className="bg-bg-color py-20">
            <center>
                <div className="text-6xl text-white pb-10 font-Alata">
                    Clifton  Strenghts
                </div>
            </center>


            <div class="grid grid-cols-3 gap-4 place-content-stretch h-50 pt-10">
                <Card text="Strategic" color="rgb(222,31,31)"/>
                <Card text="Analytical" color="rgb(222,31,31)"/>
                <Card text="Futuristic" color="rgb(31,125,222)"/>
                <Card text="Activator" color="rgb(222,31,31)"/>
                <Card text="Developer" color="rgb(31,125,222)"/>
                <Card text="Learner   " color="rgb(254,202,9)"/>
            </div>


        </div>

    );
}

export default Strenghts;