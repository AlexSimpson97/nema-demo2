<script lang="ts">
    import Referenceforms from "$lib/components/Referenceforms.svelte";
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {

        let thispath = $page.url.pathname.split("/")[1];

        defineSection(thispath);
        });
</script>

<Referenceforms />