import React from "react";
import styled from "styled-components";
import Get from "../../assets/images/putte.png";



const About = ({updateTitle}) => {
    React.useEffect(() => {
        updateTitle('About');
    }, [updateTitle]);

    return (
        <>
            <section>
                <img src={Get} className="img-fluid float-right w-50" alt="Goat muuuuuU"></img>
                    <p>Det är jag som är Patrik Karlsson, en 33 årig kille från Flen i Södermanland. Var väldigt idrottintresserad 
                    som yngre, utövade både innebandy, fotboll och bordtennis. Slutade dock med lagsporter och satsade allt på 
                    bordtennisen. Uppnådde väl inga större prestationer men lyckades bli en utbildad steg ett tränare och fick 
                    således träna en ungdomsgrupp ett par dagar i veckan.</p>

                    <p>Efter gymnasiet fick jag jobb på Rätt Pris, en matvaruaffär. Åren gick och jag fick syn på en jobbannons. 
                    Det stod att ett nytt företag vid namn Lager 157 skulle etablera sig i Hälleforsnäs. Hälleforsnäs ligger 
                    ungefär två mil ifrån Flen så självklart lämnade jag in mitt cv. Några dagar senare ringde det och jag fick 
                    komma på en intervju, minns att jag var så taggad. Det slutade i varje fall med att jag åkte på intervjun 
                    och ett kraftigt handslag senare blev jag anställd.</p>

                    <p>Jag flyttade hemifrån och bosatte mig i en lägenhet på 37 kvm i Hälleforsnäs. Hälleforsnäs är ju inte 
                    jättestort, det fanns en konsum butik och en pizzera, vad mer kan man begära. Här fastnade jag i ungefär 9 
                    år som klädförsäljare på Lager 157. När jag inte jobbade satt jag mycket framför datorn, dock gick mycket 
                    tid åt till spelande, men förutom det växte mitt intresse för webbdesign. Jag har sen gymnasiet alltid 
                    pysslat med hemsidor i olika former, men aldrig satt mig in i det på riktigt. Tankarna snurrade och 
                    någonstans kände jag att det är var dags att byta bransch då jag inte riktigt såg mig vilja jobba inom 
                    handels i resten utav mitt liv.</p>

                    <p>Och här befinner jag mig nu studerande webbprogrammering på Blekinge Tekniska Högskola.</p>
            </section>
        </>
    );
};

export default About;
