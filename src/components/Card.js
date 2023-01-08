function Card(props){

    const text = props.text;
    const color = props.color;

    return(
        <div className="flex justify-center " >
            <div className="block p-20 rounded-lg shadow-xl bg-white max-w-sm" style={{backgroundColor: color}}>
                <h5 className="text-white text-xl font-Alata mb-2">{text}</h5>
            </div>
        </div>
    );

}

export default Card;