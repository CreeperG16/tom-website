import Head from "next/head";

export default function Nyelvtan() {
    return (
        <>
            <Head>
                <title>Erdőirtás</title>
                <meta content="Erdőirtási kampány - Nyelvtan csoportmunka" property="og:title" />
                <meta
                    content="Figyelemfelhívó kampány az erdőirtásról - nyelvtan csoportmunka. Készítette: Papp Tamás, Tóth Levente, Kenderes Nóra, Csizmazia Sára, Kovács Jázmin, Barath Bence"
                    property="og:description"
                />
                <meta content="https://tom-website.vercel.app/nyelvtan" property="og:url" />
                {/* <meta content="https://embed.com/embedimage.png" property="og:image" /> */}
                <meta content="#43B581" data-react-helmet="true" name="theme-color" />
            </Head>
            <div id="mobile">
                <h1>Sajnos az oldal nem működik kis képernyőméreten.</h1>
            </div>
            <div id="nyelvtan">
                <div id="one-shadow">
                    <div id="one">
                        <h1 id="pretitle">Naponta</h1>
                        <h1 id="title">
                            42 000 000<span id="trees"> fát</span>
                        </h1>
                        <h1 id="subtitle">vágnak ki világszerte.</h1>
                        <h1>hello 🐳</h1>
                    </div>
                </div>
                <div id="two">
                    <h1 className="section-title">Mit is értünk erdőirtás alatt?</h1>
                    <h1 className="info">
                        Az erdőirtás folyamata egy olyan egzisztenciális veszély mely a köztudatban eltörpül a
                        klímaváltozás kérdése mellett, de a kettő összeköthető. Definiálva az erdőirtás az a
                        fakitermelés folyamata újratelepítési és erdőgazdálkodási tervek nélkül. Ebből származóan az
                        erdőirtás szinte egyidős az emberiséggel.
                    </h1>
                </div>

                {/* <div id="three">
                <h1 className="section-title">Miért?</h1>
                <h1 className="info">
                    Az oka a jelen időnkben származhat a fa, mint termék, korlátozatlan kitermelése, urbanizáció
                    növekedése és a mezőgazdasági területek bővítéséből.
                </h1>
            </div> */}

                <div id="three">
                    <h1 className="section-title">A következmények</h1>
                    <h1 className="info">
                        A következményei a folyamatnak több helyen is megnyilvánulnak. Kezdve a légkörrel, az erdők és a
                        benne elő mikroorganizmusok teszik lehetővé a levegő megújulását, így fonódik össze a globális
                        felmelegedés kérdésével. Emellett az erdők részt vesznek a talaj megkötésében mely omladozó,
                        szirtes területeken kifejezetten fontos, vagy például segítik a Szahara terjedését és a
                        sivatagosodás folyamatának lassítását. Ezen kívül az erdők számtalan állatoknak adnak otthon
                        melyek az előterük csökkenésével a kihalás szélére kerülhetnek.
                    </h1>
                </div>
                <div id="four">
                    <h1 className="section-title">Hazánkon</h1>
                    <div id="mo-content">
                        <h1 className="info">
                            Régebben hazánk mai területének több mint 2/3-át sűrű erdők borították, mely mára csak
                            19,6%-ra csökkent a folytonos fakitermelésnek köszönhetően. A WFF 2016-ban kiadott cikke
                            szerint, Magyarországon a 180 évnél idősebb erdőterületek terjedelme nem éri el az 1000
                            hektárt. Míg országunkban kifejezett törekvések az újraerdősítés elősegítésében ritkák, az
                            erdős területek száma lassan de biztosan nő, a mesterséges erdők ültetésének köszönhetően.
                        </h1>
                        <img src="MOerdok.png" alt="" />
                    </div>
                </div>

                {/* <div id="six">
                <h1 className="section-title">Brazília</h1>
                <h1 className="info">
                    Az egyik ország melyre példaként tekinthetünk ebben az Brazília. A korábbi elnök, Jair Bolsonaro,
                    nemhogy csak nem tett lépéseket az Amazonas irtásának megállításáért, hanem elősegítette, viszont a
                    nemrég lezajlott választások során Luiz Inácio Lula da Silva került ki nyertesként, az elődjéhez
                    képest egy nagyon zöld tervel futva.
                </h1>
            </div> */}

                <div id="five">
                    <h1 className="section-title">Mit tehetünk?</h1>
                    <h1 className="info">
                        Magán személyként eldobható papírtermékek kerülése lehet egy lépés melyet könnyű meglépni.
                        Ezentúl a szerveződésben, a kampányolásban, petíciókban vagy zöldebb pártok megválasztásában
                        nyilvánulhatnak meg törekvéseink. Továbbá a technológia fejlődésével a talaj regenerálása és
                        erdők újraültetése egyre könnyebbé válik.
                    </h1>
                </div>
            </div>
        </>
    );
}
