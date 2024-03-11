<script>
    import Services from "$lib/components/Services.svelte";

    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {

            let thispath = $page.url.pathname.split("/")[1];

            defineSection(thispath);

            const aboutElement = document.getElementById('services');

            if (aboutElement) {

                aboutElement.id = 'services-dedicated';

            }
    });
</script>


<Services />