<script lang="ts">
    // your script goes here
    import About from "$lib/components/About.svelte";
    import Careers from "$lib/components/Careers.svelte";
    import Community from "$lib/components/Community.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Intro from "$lib/components/Intro.svelte";
    import SectionDivider from "$lib/components/SectionDivider.svelte";
    import Services from "$lib/components/Services.svelte";
    import { activeSection, currentPage, isPageLoading } from "$lib/context";
    import { links } from "$lib/data";
    import { onDestroy, onMount, tick } from 'svelte';
    import { beforeNavigate, afterNavigate, preloadCode } from '$app/navigation';
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = '';
        defineSection(thispath);
    });

    let sections = [];

    
</script>

<main class={`flex flex-col items-center xs:-px-2`}>
    <Intro bind:this={sections[0]} />
    <SectionDivider />
    <About bind:this={sections[1]} />
    <SectionDivider />
    <Services bind:this={sections[2]} />
    <SectionDivider />
    <Careers bind:this={sections[3]} />
    <SectionDivider />
    <Community bind:this={sections[4]} />
    <SectionDivider />
    <Contact bind:this={sections[5]} />
    <!-- {console.log(sections[1])} -->
</main>