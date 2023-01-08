function Button(props){

    const icon = props.icon;
    const platform = props.platform;
    const color = props.color

    return (
            <button type="button" className="bg-transparant hover: bg-sky-500 text-blue-700 font-Alata m-10 px-4 py-2 hover: text-white border border-blue-500 hover: border-transparant rounded">{platform}</button>
    );
}


export default Button;