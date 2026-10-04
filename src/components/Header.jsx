import Navbar from './Navbar'

function Header() {
    return <>
    <Navbar />
        <header>
            <div className="pt-1">
                <h1>Soy Joel Joan Castillo Ramos</h1>
                <h2>Desarollador Web</h2>
                <div>
                    <button>Saludame!</button>
                </div>
            </div>
            <div className="pt-2">
                <div className="color-1"></div>
                <div className="color-2"></div>
                <img src="/assets/img/img.png"/>
            </div>
        </header>
    </>
}

export default Header