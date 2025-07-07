export const Jumbotron = () => {
    return (
        <section
            className="d-flex align-items-start justify-content-center flex-column text-light mt-2"
            style={{
                backgroundImage: 'url(src/img/AlcidesJumbo2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '40rem',
                position: 'relative'
            }}
        >
            
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1
                }}
            ></div>

            <hgroup className="position-relative p-3" style={{ zIndex: 2 }}>
                <h1 className="display-4 fw-bold mb-3">Alcides SSJ4</h1>
                <p className="lead mb-4">Dragon Ball Z is a Japanese anime series that follows the story of Goku, a powerful Saiyan warrior, as he defends Earth against increasingly formidable enemies. The series explores themes of friendship, perseverance, and self-improvement, featuring epic battles, transformations like Super Saiyan, and the quest to gather the mystical Dragon Balls to grant any wish. It’s an action-packed adventure that has inspired generations of fans around the world.</p>
            </hgroup>
            <button className="ms-3 btn btn-outline-light btn-lg" style={{ zIndex: 2 }}>Kamehameha Alcides!</button>


        </section>
    );
}