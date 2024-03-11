<script>
    import Careers from "$lib/components/Careers.svelte";

    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {

            let thispath = $page.url.pathname.split("/")[1];

            defineSection(thispath);

            const aboutElement = document.getElementById('careers');

            if (aboutElement) {

                aboutElement.id = 'careers-dedicated';

            }
        });
</script>


<Careers />