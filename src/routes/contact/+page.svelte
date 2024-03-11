<script lang="ts" >
    import Contact from "$lib/components/Contact.svelte";
	import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {

            let thispath = $page.url.pathname.split("/")[1];

            defineSection(thispath);

            const aboutElement = document.getElementById('contact');

            if (aboutElement) {
                aboutElement.id = 'contact-dedicated';
            }
        });
</script>

<Contact />