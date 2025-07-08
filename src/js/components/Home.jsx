import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx"
import { Card } from "./Card.jsx"
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
            <main className="container">
                <Jumbotron />
                <section className="row justify-content-center gap-5">
                    <Card image="src/img/MutenJavier.png" title="Maestro Muten-Javi" text="Siempre tranquilo, responde con exactitud y despliega ejemplos como si invocara técnicas secretas.Nada lo altera: ni un bucle infinito, ni un estudiante en apuros, ni un repo sin README.Dicen que antes de que preguntes, él ya tiene la respuesta… y tres formas distintas de explicártela." button="Paciencia Infinita!!" />
                    <Card image="src/img/Alciku.png" title="Alciku" text="Alciku, el defensor del clean code y enemigo mortal del <div> innecesario. Con el espíritu de Goku y la paciencia de un maestro Kame, Alciku entrena sin descanso a los jóvenes desarrolladores. Lanzando retos más duros que el torneo de artes marciales: proyectos extra sorpresa que solo los verdaderos guerreros pueden superar." button="Trabajo Extra!!" />
                    <Card image="src/img/Angellin.png" title="Angellin" text="Angellin, el vigilante silencioso de los proyectos ya aprobados, maestro del review inesperado y lanzador profesional de cuchillos críticos. Con la astucia de Krillin, Angellin aparece cuando creias que habias aprobado. Nada escapa a su mirada entrenada: ni un id mal nombrado, ni un margin sospechoso." button="Lanzar Cuchillo!!" />
                    <Card image="src/img/Marcolly.png" title="Marcoslly" text="Antiguo amigo, fuerza descomunal, y presencia constante cuando el caos se desata en el editor.Dicen que su poder crece con cada línea rota, y que ningún error sobrevive a su paso.Cuando todo falla, él aparece. Siempre está ahí, justo cuando más lo necesitas, como si leyera el console.log() del destino." button="Odio el learnpack!!" />
                </section>
            </main>
			<Footer/>
		</React.Fragment>
	);
};

export default Home;