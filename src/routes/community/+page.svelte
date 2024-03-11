<script>
    import Community from "$lib/components/Community.svelte";

    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {

            let thispath = $page.url.pathname.split("/")[1];

            defineSection(thispath);

            const aboutElement = document.getElementById('community');

            if (aboutElement) {

                aboutElement.id = 'community-dedicated';

            }

        });
</script>

<Community />