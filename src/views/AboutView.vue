<script setup lang="ts">
import luuk from "@/assets/luuk.jpg"
import { ref, toValue } from "vue";

const THRESHOLD_DEGREE = 2;
  const rotation = ref<undefined | number>(undefined);
  const thresholdDeg = ref(THRESHOLD_DEGREE)
  const skew  = ref("0");
  const scale = ref(1.00);
  const onMouseDown = () => { 
    skew.value = '3deg';
       scale.value =0.96;
    thresholdDeg.value = THRESHOLD_DEGREE;
    if(rotation.value === undefined) rotation.value = setInterval(rotate, 150);
  
  }

      function rotate  ()  {
      rotation.value = thresholdDeg.value + (rotation.value || 20 );
    }

    const stopRotation = () => {
      scale.value =1.00;
          skew.value = '0';
      thresholdDeg.value = 0;
    }


</script>
<template>
  <div class="about-me-wrapper">
    <h1>Luuk Goedhart</h1>

    <img  :src="luuk" @mousedown="onMouseDown" @mouseleave="stopRotation" :style="{transform: `rotate(${rotation}deg)  scale(${scale})`}" id="luuk-img" alt="luuk foto"/>
       
      <div class="links-to-socials">
        linkedin
        etc.
      </div>
    <span class="quote">I turn coffee into code. </span>

        <div class="text-section">
    <h2>Wie ben ik?</h2>
    <p>
      Ik ben opgeleid als software engineer. Een software engineer is betrokken bij de ontwikkeling
      van een project nog vóór de eerste regel code wordt geschreven. Ik vind het bijzonder
      interessant om al in deze vroege fase mee te denken over de afwegingen en keuzes die
      uiteindelijk leiden tot het eindproduct. Deze fase is in mijn ogen essentieel voor de
      kwaliteit en relevantie van de oplossing die uiteindelijk wordt opgeleverd.
    </p>
    <p>
      Ondertussen heb ik veel mooie projecten succesvol mogen afsluiten, waardoor ik niet bang ben
      om opnieuw in het onbekende te stappen. Buiten mijn baan om houd ik me ook regelmatig bezig
      met web development als hobby. Door mijn werkervaring bij snelgroeiende IT-bedrijven heb ik
      het genoegen gehad om me te begeven tussen uiterst ervaren en getalenteerde personen. Ik heb
      veel opgestoken van deze professionele dienstverbanden, waardoor ik hier nog regelmatig met
      veel dankbaarheid en voldoening op terugblik.
    </p>
    <p>
      Als ik eens niet met softwareontwikkeling bezig ben is de kans groot dat ik in de sportschool
      fitness beoefen. Als het erg mooi weer is doe ik buiten calisthenics, of wandel ik door het
      duingebied in Castricum.
    </p>

    <h2>Wat wil ik?</h2>
    <p>
      Door mijn expertise in web-development wil ik deze kennis graag in de praktijk verder
      toepassen. Ik zoek naar een project waar ik in teamverband innovatieve oplossingen mag bieden.
      Met de dag groeit mijn interesse in de transities van de energie- en automobielsector, wat
      wellicht voorkomt uit mijn natuurlijke affectie voor natuurkunde.
    </p>

    <p>
      Mijn brede set aan vaardigheden komt het best tot zijn recht wanneer ik kan bijdragen aan
      zowel UI/UX als het ontwerpen van de architectuur, als de implementatie van de code. Op deze
      manier kan ik ook mijn vaardigheden up-to-date houden.
    </p>
    <p>
      Ik streef ernaar om met mijn werk een positieve impact te maken en betekenisvolle
      softwareoplossingen te realiseren. Zo heb ik erg veel voldoening gekregen tijdens mijn vorige
      werk als leerkracht in de IT.
    </p>
    <h2>Wat kan ik?</h2>
    <p>
      Ik ben een software engineer die gespecialiseerd is op het gebied van webapplicaties.
      ‘Software engineer’ is een bijna alles omvattende term m.b.t software-development, wat ik
      probeer waar te maken door constant bij te leren. Ik heb projecten afgerond in verschillende
      frameworks (Angular, Next.js, React en Vue). Daar gebruik ik bij voorkeur een Java Spring
      backend bij, maar ik heb ook wel eens projecten gedaan waarbij ik een Python-backend (FastAPI
      en Flask) gebruikt heb of Node.js. Databases die ik gebruik bij mijn producten zijn MySQL,
      PostgreSQL en MongoDB.
    </p>
    <p>
      Ik streef ernaar om zelfredzaam te zijn m.b.t. projectontwikkeling. Als ik een gaaf idee
      (toegespeeld) krijg m.b.t een webapplicatie, dan zorg ik ervoor dat het realiteit wordt. Ik
      denk goed na over de functionele en de niet-functionele eisen. Mijn kracht is dat ik het voor
      elkaar krijg om dingen gedaan te krijgen. Door zelfsturend vermogen en discipline worden
      ideeën omgezet tot projecten en vervolgens applicaties.
    </p>
    <p>
      Ik werk goed samen en draag actief bij aan het team, maar ik functioneer ook uitstekend
      zelfstandig en neem verantwoordelijkheid voor mijn eigen taken, zoals te zien is aan mijn
      zelfgemaakte webapplicaties.
    </p>
    </div>
  </div>
</template>

<style scoped>

h1 {
  grid-row: 1;
  grid-column: 1/-1;
}
#luuk-img {
  grid-row: 2;
  grid-column: 2/-1;
  justify-self: end;
  border-radius: 100%;
  display: flex;
  /* background-color: orange; */
  /* flex-grow: 1; */
  /* min-width: 100%;
  min-height: 100%; */
  max-height: 256px;;
  /* max-width: 128px;  */
  aspect-ratio: 1/1;
  border: transparent 3px solid;
  transition: all .21s linear;


  &:hover {
    border-color: var(--highlight-color) ;

  }
  /* &:active {
    transform: ;
  } */

}

.links-to-socials {
  grid-row: 2;
  grid-column: 1/2;
  place-items: center;
}
.about-me-wrapper {
  display: grid;
  width: 100%;
  overflow: hidden;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat( 6, 1fr); */
}
p {
    font-size: 1.5em;
    padding: 0.3em 0.9em 0.3em 0.6em;
    margin: 1.2em 0 1.2em;;
    line-height: 2em;
    width: 100%;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.quote {
  grid-row: 2;
  grid-column: 1;
     font-style: italic;
      color: whitesmoke;
  &::before {
      content: open-quote;
      /* font-size: 100px; */
       color: var(  --highlight-color);
      font-weight: bold;

     

      vertical-align: middle;
}

  &::after {content: close-quote;
      /* font-size: 100px; */
         color: var(  --highlight-color);
      font-style: italic;
      font-weight: bold;


         vertical-align: middle;
}

}
.text-section {
  /* grid-row: 4/6; */

  grid-column: 1/-1;
  /* background-color: blue; */
  width: 100%;


}


</style>
