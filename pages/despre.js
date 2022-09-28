import React, { useEffect } from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Despre = () =>
{

    return (
        <div>
            <div className="hero-banner-container"
                style={{
                    // backgroundImage: "",
                    backgroundImage: `url(https://cdn.sanity.io/images/fb4zoq1k/production/6286d86bf461c0d98a144b6e0cbeb2ecbfaab307-1600x613.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'au',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="new-hero">
                    <h3>Pentru legume pline de viata!</h3>
                    <h3>Soiuri testate in gradina noastra</h3>
                </div>
            </div>
            <div className="despre">

                <p>
                    Suntem o familie de tarani autentici pasionata de gradinarit, natura si tot ce este frumos in jurul nostru.
                </p>
                <p>Am inceput de 7 ani calatoria în lumea fascinanta a grădinăritului.</p>
                <p>Flori,legume, plante aromate și tot soiul de verdețuri au trecut prin mâinile noastre în tot acest timp.</p>
                <p>Dorim sa va oferim și vouă o părticică din bucuria pe care o avem atunci când lucram în grădina.</p>
                <p>Împreună cu copiii și vecini lucram cu drag și spor ca sa putem lua hrana din gradina si sa o dam  mai departe stomacului și celor care au nevoie de ea.</p>
                <p>Ca sa va bucurati de roade bogate va stam la dispozitie cu cateva soiuri de seminte testate si cultivate de noi.</p>
                <p>Pentru un rod bun si de calitate avem nevoie de aeminte bune si de calitate. La fel ca in viata de zi cu zi. Pentru o zi frumoasa avem nevoie de seminte de dragoste, rabdare, pace... Si ca sa le avem trebuie sa le luam direct de la sursa: Dumnezeu. Pentru roadele din gradina aveti nevoie de seminte bune: noi va putem ajuta!</p>
                <p>Va dorim spor si roade bogate pe plan fizic si spiritual! </p>
                <p style={{ textAlign: "right", fontStyle: 'italic', marginTop: '20px' }}>Cu drag, echipa Gradina din padure</p>

            </div>

        </div>
    );
};

export default Despre;
