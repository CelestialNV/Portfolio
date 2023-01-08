function Cards(props){
    const title = props.title;
    const description = props.description;
    const image = props.image;
    const use = props.use;

    return(
            <div className="flex justify-center px-3">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg h-80" src={image} alt=""/>
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p className="text-gray-700 text-base mb-4">{description}</p>
                    </div>
                </div>
            </div>
    );
}

export default Cards;