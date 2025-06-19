<script setup lang="ts">
import IDCard from '@/components/IDCard.vue';
import { onBeforeUpdate, onMounted, ref, Transition } from 'vue';
  
const spawn = ref(false)

onMounted(() => {
warnDisabled();
})

function warnDisabled() {
  spawn.value = false
  setTimeout(() => {
    spawn.value = true
  }, 1500)
}

    // const navigateToExperiences =() => {
    //   router.push({path: "/"})
    // }
</script>
<template>
  <div class="about-me-wrapper">
    <!-- Text on the left side-->
     <!-- Card on the right side-->
      <!-- residu van de tekst onder, maar over de hele breedte-->

   

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
  </div>
<!-- <div class="text-section2">
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
    </div>
    <div class="text-section3">
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
    </div> -->
    <Transition>
     <div :style="{       transform: spawn ? 'translateX(0%)' : 'translateX(100%)'}" class="card">

    <IDCard/>
    </div>
  </Transition>
  
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform:
}
h2 {
  font-weight: bold;
  font-size: 2rem;
  padding-left: .5em;
}
.turn {
  transition: all 1s ease-in-out;
  text-underline-offset: 3px;
  text-decoration: 2px underline solid;
}
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



/* Tech name styling */
.tech-name {
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
}


@media (orientation: landscape) {
  .text-section3 {
  grid-row: 3;
  grid-column: 3/-1;
}
  .text-section {
    grid-row: 1;
    grid-column: 3/-1;
}

  .text-section2 {
  /* grid-row: 4/6; */
    grid-row: 2;
    grid-column: 3/-1;
  }
.about-me-wrapper {
  display: grid;
  width: 100%;
  grid-column-gap: 1.5em;
  overflow: hidden;
  /* background-color: orange; */
    grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(5, auto);

  background: var(--primary-color);
  border-radius: 24px;

  /* grid-template-rows: repeat( 6, 1fr); */
}
 
  .card {
    /* background: whitesmoke;
    color: black; */
  grid-row: 1;
  grid-column:1/3;
  overflow: hidden;
  display: flex;
      box-shadow:  10px 0px 12px 7px rgba(0,0,0.2);
    width: 100%;
    background-color: black;;
transform: translateX(100%);
 

    transition: transform 1.5s ease-in;


  }
}



#links-to-socials {

  > * {
    cursor: pointer;
  }

  display: flex;
  justify-content: center;
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


.text-section {
  /* grid-row: 4/6; */

  /* grid-column: 1/-1; */
  /* background-color: blue; */
  width: 100%;


}


</style>
