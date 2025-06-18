<script setup lang="ts">
import luuk from "@/assets/luuk.jpg"
import TextBubble from "@/components/TextBubble.vue";
import { transform } from "typescript";
import { ref, toValue } from "vue";
import sopra from "@/assets/sopra.svg";
import router from "@/router"
import java from "@/assets/java.svg";
import postgres from "@/assets/postgres.svg"
import angular from "@/assets/angular.svg";
import IDCard from "@/components/IDCard.vue"
import {navigateToLinkedIn, navigateToSopraWebsite} from "@/mixins"
const THRESHOLD_DEGREE = 2;
  const rotation = ref<undefined | number>(undefined);
  const thresholdDeg = ref(THRESHOLD_DEGREE)
  const skew  = ref("0");
  const scale = ref(1.00);
  const borderColor = ref('transparent')
  const onMouseDown = () => { 
    skew.value = '3deg';
    borderColor.value =  'var(--highlight-color)';
       scale.value =0.96;
    thresholdDeg.value = THRESHOLD_DEGREE;
    if(rotation.value === undefined) rotation.value = setInterval(rotate, 150);
  
  }

      function rotate  ()  {
      rotation.value = thresholdDeg.value + (rotation.value || 20 );
    }

    const stopRotation = () => {
      borderColor.value ='transparent';
      scale.value =1.00;
          skew.value = '0';
      thresholdDeg.value = 0;
    }

    const navigateToExperiences =() => {
      router.push({path: "/"})
    }
</script>
<template>
  <div class="about-me-wrapper">
    <!-- <IDCard/> -->
    <div class="card">


<div id="bubbles"> <div class="card-top-rule"><img  :src="luuk"  :style="{transform: `rotate(${rotation}deg)  scale(${scale})`, borderColor: `${borderColor}`}" id="luuk-img" alt="luuk foto"/>
            <div><h1>Luuk Goedhart</h1>
              <span class="quote">I turn coffee into code. </span>
              </div>
</div>
<!-- <h3 class="organization-label">Organization</h3> -->
      <div class="current-job-section" @click="navigateToSopraWebsite">
        
               <img class="company-img" :src="sopra"/> 
               </div> 
  <div id="links-to-socials"  >
   <div class="tech-item">
              <TextBubble text="10+ jaar informatica" @mousedown="onMouseDown" @mouseleave="stopRotation"/>
              </div>
                <div class="tech-item">
               <TextBubble  text="LinkedIn" @click="navigateToLinkedIn"/>
</div>
      </div> 
                   
</div>
<div class="favourite-stack">
  <h2>My favourite stack</h2>
  <div class="tech-list">
    <div class="tech-item">
                    <TextBubble text="Angular" :background-color="'transparent'" :img="angular" @mousedown="onMouseDown" @mouseleave="stopRotation"/>

    </div>

    <div class="tech-item">
                    <TextBubble text="Java" :background-color="'transparent'" :img="java" @mousedown="onMouseDown" @mouseleave="stopRotation"/>

    </div>
    <div class="tech-item">
                    <TextBubble text="PostgreSQL" :background-color="'transparent'" :img="postgres" @mousedown="onMouseDown" @mouseleave="stopRotation"/>
    </div>
  
  </div>
</div>
</div>
  

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

.favourite-stack {
  text-align: center;
  /* background-color: #f9f9f9; */
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  /* max-width: 500px; */
  margin: 50px auto;
  width: 100%;
  border-radius: 100vw;;
  /* outline: 3px solid whitesmoke; */
}

/* Heading styling */
.favourite-stack h2 {
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  /* color: #333; */

  font-weight: bold;
  margin-bottom: 20px;
}

/* List container for the tech items */
.tech-list {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

/* Styling for each tech item */
.tech-item {
  text-align: center;
}

.tech-logo {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.tech-logo:hover {
  transform: scale(1.1);
}

/* Tech name styling */
.tech-name {
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
}
.card-top-rule {
  display: flex;
  border-radius: 100vw;
  gap: 1.5em;

  /* outline: 3px solid whitesmoke; */

  > * {
    width:100%;
    text-wrap: nowrap;
    place-self: center;
  }

}
#bubbles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 3em;
  /* width: 100%; */
  /* background-color: ; */
}
@media (orientation: landscape) {
  
  .text-section {
  /* grid-row: 4/6; */
    grid-row: 3;
    grid-column: 1/2;

  /* background-color: blue; */
  /* width: 100%; */


}
.about-me-wrapper {
  display: grid;
  width: 100%;
  overflow: hidden;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(3, auto);
  /* grid-template-rows: repeat( 6, 1fr); */
}
  #luuk-img {
  /* grid-row: 2; */
  /* grid-column: 3; */
  justify-self: center;
  border-radius: 100%;
  /* display: flex; */
  max-width: 30%;
  /* flex-grow: 1; */
  
  /* max-width: 20vw; */
  aspect-ratio: 1/1;
  border: transparent 3px dashed;

  transition: all .21s linear;

  &:hover {
    border-color: var(--highlight-color) ;

  }
  



}
  .card {
  grid-row: 3;
  grid-column: 3/4;

  width: 100%;
  overflow: hidden;
  padding: 2em 1em;
  border-radius: 24px;
  /* background-color: var(--primary-color); */
  border: 3px solid var(--highlight-color);
  display: flex;
  flex-direction: column;

  /* aspect-ratio: 17/22; */
  }

.about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .links-to-socials {
    grid-column: 1/2;
  }
  .quote {
      grid-row: 3;
  grid-column: 1/2;
  }
}

.current-job-section {
  cursor: pointer;
  display: flex;;
  flex-direction: column;
  /* grid-template-columns: 1fr 3fr; */
  width :100%;
  place-items: center;
        border-radius: 100vw;
  /* background-color: orange; */
          background-color: white;



}
.company-img {

  height: auto;
  width: inherit;


        padding: 2rem 1rem;


}
.organisation-label{
  text-wrap: nowrap;
 
}
h1 {
  grid-row: 1;
  grid-column: 1/-1;
}

  @keyframes border-loop {
    0% {
      outline-color: transparent;
    }
    15% {
      outline-color: var(--secondary-color);
    }

    85% {
      outline-color: var(--highlight-color);
    }
    100% {
      outline-color: transparent;
    }
   
  }

  

#links-to-socials {

  > * {
    cursor: pointer;
  }

  display: flex;
  justify-content: space-between;
  gap: 3em;
  text-align: center;
  border-radius: 100vw;
  
  background: linear-gradient(45deg, var(--primary-color), gray);
  padding: 6px;
  
      outline:  3px solid transparent;
      transition: all .33s ease-in-out;



  &:hover {
    /* outline-color: ; */
       
        animation-name: border-loop;
    animation-duration:2s;
animation-iteration-count:infinite;
  }



}

p {
    font-size: 1.5em;
    padding: 0.3em 0.9em 0.3em 0.6em;
    margin: 1.2em 0 1.2em;;
    line-height: 2em;
    width: 100%;

}

.quote {
  grid-row: 2;
  grid-column: 1/2;
  width: 100%;
  max-lines: 2;
  text-wrap:nowrap;
     font-style: italic;
      color: whitesmoke;
      font-size: 2.4em;
      place-self: center;
      /* background-color: orange; */
  &::before {
      content: open-quote;
      /* font-size: 100px; */
       color: var(--primary-color);
      font-weight: bold;

     

      vertical-align: middle;
}

  &::after {content: close-quote;
      /* font-size: 100px; */
         color: var(--primary-color);
      font-style: italic;
      font-weight: bold;


         vertical-align: middle;
}

}
.text-section {
  /* grid-row: 4/6; */

  /* grid-column: 1/-1; */
  /* background-color: blue; */
  width: 100%;


}


</style>
