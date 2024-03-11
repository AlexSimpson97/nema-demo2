<script>
    import About from "$lib/components/About.svelte";
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {

        let thispath = $page.url.pathname.split("/")[1];

        defineSection(thispath);

            const aboutElement = document.getElementById('about');
            if (aboutElement) {
                aboutElement.id = 'about-dedicated';
            }
        });
</script>


<About />