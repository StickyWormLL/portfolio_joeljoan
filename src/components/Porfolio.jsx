import CardPorfolio from "./CardPorfolio"

function Porfolio() {
    return <>
        <div>
            <h2>Porfolio</h2>
            <div className="porfolio-container">
                <CardPorfolio className="card-1" />
                <CardPorfolio className="card-2" />
                <CardPorfolio className="card-3" />
                <CardPorfolio className="card-4" />
                <CardPorfolio className="card-5" />
                <CardPorfolio className="card-6" />
            </div>
        </div>
    </>
}

export default Porfolio