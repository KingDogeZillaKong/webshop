

<script setup lang="ts">
//TODO rename to ICON
import { ref } from 'vue';
import IconFile from "@/components/icons/IconFile.vue"
import IconApp from "@/components/icons/IconApp.vue"
     const props =  defineProps<{imageSrc:string, type: string}>();  //TODO make type a type
const {imageSrc, type} = props;
    const overlayIsVisible = ref(false);
    const onMouseOverSelf = () => {
        overlayIsVisible.value = true;
    }
    const onMouseLeaveSelf = () => {
        overlayIsVisible.value = false;
    }
</script>

<template>
    <div class="icon-wrapper" @mouseover="onMouseOverSelf" @mouseleave="onMouseLeaveSelf">
        <Transition>
        <div v-if="overlayIsVisible.valueOf()" class="overlay">
        <IconFile v-if="type === 'code'" :foregroundColor="'#FFFFFF'" title="Go to code"/>
         <IconApp v-if="type === 'app'" :foregroundColor="'#FFFFFF'"  title="Go to app"/></div>
        </Transition>
        <img class="orignal-image" :src="imageSrc" :alt="'orignal image'"/>
    </div>

</template>

<style scoped>

.icon-wrapper {
  display: flex;
  padding: .15em;
  overflow: hidden;
  position: relative;


img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

  &:hover {
            .overlay {
                opacity: 1;
            }

            .orignal-image {
                opacity: 0.11;
                  background-color: rgba(0,0,0,0.12);
            }
        }

}
   

    .overlay {
        position: absolute;
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        background-color: rgba(0,0,0,0.12);
        opacity: 0;
        transition: opacity ease-in-out .3s;


      
    }
       .orignal-image {

                opacity: 1;
                        transition: opacity ease-in-out .3s;
            }
</style>