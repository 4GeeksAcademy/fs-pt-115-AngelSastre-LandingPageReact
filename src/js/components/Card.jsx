export const Card = ({ image, title, text, button }) => {
    return (
        <div className="card-container card col-12 col-md-6 col-3 my-5 p-0 " style={{ width: "18rem" }}>
            <img src={image} className="card-img card-img-top" />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{title}</h5>
                <p className="card-text ">{text}</p>
                <a href="#" className="btn btn-warning">{button}</a>
            </div>
        </div>
    )
}