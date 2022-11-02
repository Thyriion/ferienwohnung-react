import React from 'react';
import ImageGallery from '../ImageSlider/ImageSlider';
import './Home.scss';

export default function Home() {
    return (
        <>
            <h1>Herzlich Willkommen in der Plattenburger Straße 3</h1>
            <div className="content">
                <div className="text-content">
                    <h2>Urlaub in Bad Wilsnack!</h2>
                    <br />
                    <p>
                        Baden im Thermalbad, Kuren in der Elbtalklinik, erholen
                        in der Elbtalaue und vieles mehr.
                    </p>
                    <br />
                    <p>
                        Diese Ferienwohnungen bietet Ihnen eine komfortable
                        Unterkunft im Zentrum der Stadt. Verschiedene
                        Einkaufsmöglichkeiten und Gaststätten befinden sich
                        sozusagen um die Ecke. Die Kureinrichtungen und die
                        Therme erreicht man zu Fuß in 10 bis 12 Minuten. Für
                        gehbehinderte Menschen ist Wohnung 1 besonders geeignet,
                        da sie parterre liegt.
                    </p>
                    <br />
                    <p>
                        Diese Ferienwohnungen sind viel mehr als nur ein Zimmer,
                        sie sind ein gemütliches Feriendomizil und daher
                        besonders gut für einen längeren Aufenthalt geeignet.
                    </p>
                </div>
                <div className="img">
                    <img
                        src="https://images.unsplash.com/photo-1666506581782-7b58bc184a2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        alt="Oberes Drittel eines Hochhauses"></img>
                </div>
            </div>
            <div className="hinweis-text">
                <p className="text-red">
                    Mit Festnetztelefon ( Deutschland Festnetz frei) und freien
                    WLAN Gastzugang!
                </p>
                <br />
                <p className="text-red">Zweites Fernsehgerät im Schlafzimmer</p>
            </div>
            <div>
                <h2>Ferienwohnung mit Wallbox - Elektrotankstelle</h2>
                <br />
                <p>
                    Ab März 2022 ist eine Wallbox zum Laden für die Elektroautos
                    meiner Gäste auf dem Hof vorhanden. Die Elektrotankstelle
                    liefert 11 KW und hat einen Typ 2 Anschluss.
                </p>
                <br />
                <p>
                    <strong>Unser Beitrag für die Umwelt:</strong>
                    <br />
                    Ab Januar 2022 haben wir die Ferienwohnungen auf Ökostrom
                    aus 100 % Wasserkraft umgestellt. Eine Solarthermieanlage
                    auf dem Dach unterstützt die Heizung und Warmwassererzeugung
                    und hilft, Erdgas einzusparen.
                </p>
            </div>
            <ImageGallery />
            <div>
                <hr />
            </div>
        </>
    );
}
