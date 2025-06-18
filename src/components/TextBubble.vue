<script setup lang="ts">
const props = defineProps<{text: string}>();

</script><template>
    <div>
        {{ props.text }}
    </div>
</template>
<style scoped>
    div {
        border-radius: 100%;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
        /* width: 100%; */
        height: 150px;
        width: 150px;
        /* padding: px; */
        background-color: black;
        text-wrap: wrap;
        font-size: 1.5em;
        border: 3px solid var(--highlight-color);
    }

</style>