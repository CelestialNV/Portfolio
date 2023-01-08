function Navbar(){
    return(
        <div className="sticky top-0 bg-white text-black text-2xl shadow-lg">
            <ul className="flex">
                <li className="flex-1 text-center hover:bg-sky-50 py-3 font-Alata">
                   <a className="" href="">Home</a>
                </li>
                <li className="flex-1 text-center hover:bg-sky-50 py-3 font-Alata">
                   <a className="" href="">About</a>
                </li>

                <li className="flex-1 text-center hover:bg-sky-50 py-3 font-Alata">
                   <a className="" href="">Experience</a>
                </li>

                <li className="flex-1 text-center hover:bg-sky-50 py-3 font-Alata">
                   <a className="" href="">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;