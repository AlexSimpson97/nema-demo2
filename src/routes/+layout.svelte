<script lang="ts" src="html2pdf.bundle.min.js" >
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { beforeNavigate, afterNavigate, disableScrollHandling, preloadCode, onNavigate } from '$app/navigation';
    import { currentPage, activeSection } from '$lib/context';
    import PageTransition from "$lib/components/PageTransition.svelte";
    import { cubicIn, cubicOut } from 'svelte/easing';
	import { onMount, tick, onDestroy } from "svelte";
    import { fly } from 'svelte/transition';
    import { links } from "$lib/data";
    import { page } from "$app/stores";

    export let duration: number = 300;
    export const delay: number = duration + 100;

    const y = 10;

    const transitionIn = { easing: cubicOut, y, duration, delay };
    const transitionOut = { easing: cubicIn, y: -y, duration };

    export let data;
    $: key = data.path;
    $: dataPath = $page.url.pathname;
    let dataParsed;
    let dataKey: string;


    let section;
    let previousSection: string;


    let scroll_behaviour: string;

    type ThresholdSet = [number] | [number, number, number, number, number];

    type activeSection = (typeof links)[number]["name"];

    let thresholdSets: ThresholdSet[] = [
            [0.60],
            [1.0],
            [0.20, 0.55, 0.60, 0.65, 0.70],
            [0.20],
            [0.30],
            [0.50],
        ];

    let marginSets: string[] = [
        '0px',
        '0px',
        '0px',
        '0px',
        '0px',
        '0px',
    ];

    let observerSet: IntersectionObserver[] = [];

    // This code sets up event listeners to handle navigation events before and after navigation occurs.
    // This function is executed before navigation.
    beforeNavigate(() => {
        // Save the current scroll behavior of the document.
        scroll_behaviour = getComputedStyle(document.documentElement).scrollBehavior;
        console.log(scroll_behaviour);
        // Temporarily set the scroll behavior to 'auto' to allow smooth scrolling during navigation.
        document.documentElement.style.scrollBehavior = 'smooth';
        disconnectObservers();
    });

    onNavigate((navigation) => {
        const { to } = navigation;

        const navigatingTo = to;
        let toRoute = navigatingTo?.route.id;
        console.log(`OnNavigate: you are navigating to: ${toRoute}`);

        if (toRoute) {
            toRoute = toRoute.split("/")[1];
            if (toRoute === '') {
                toRoute = 'Home';
            }
            if (toRoute === 'contact') {
                toRoute = 'Contact Us';
            }
            if (toRoute === 'community') {
                toRoute = 'Our Community';
            }
            if (toRoute) {
                toRoute = toRoute[0].toUpperCase() + toRoute.substring(1);
            }
            currentPage.setTo(toRoute);
            console.log($currentPage);
        }
    });

    // This function is executed after navigation.
    afterNavigate( async (navigation) => {
        const { from } = navigation;
        const navigatingFrom = from;
        let fromRoute = navigatingFrom?.route.id;


        console.log(`AfterNavigation: you have navigated from: ${fromRoute}`);

        // Save  the previous directory as the previous section.
        previousSection = fromRoute?.split('/')[1] as string;

        // Restore the original scroll behavior of the document.
        if (scroll_behaviour) {
            document.documentElement.style.scrollBehavior = 'smooth';
        }

        // Prevent svelte from scrolling to the top of the page.
        disableScrollHandling();

        // Manually scroll to the top of the page after navigation and after 500ms.
        setTimeout(() => {
            scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);

        // Setup observers when navigation to the home page is complete.
        if ($currentPage === 'Home') {
            tick();
            tick();
            setupObservers();
        }

        console.log(`AfterNavigation: LAYOUT.svelte says you are at: ${$currentPage}`);
    });

    $: {
        onMount(async () => {
            await tick();
            // disableScrollHandling();
            if (dataPath) {
                const path = dataPath;
                console.log(path);
                if (path) {
                    dataParsed = path.split('/')[1];
                    console.log(dataParsed);
                    if (dataParsed !== undefined) {
                        if (dataParsed === '') {
                            dataParsed = 'home';
                        }
                        console.log(dataParsed);
                        dataParsed = dataParsed[0].toUpperCase() + dataParsed.substring(1);
                        dataKey = dataParsed;
                        currentPage.setTo(dataKey);
                        handleSectionChange(dataKey as activeSection);
                    }
                }
            }
            console.log(`LAYOUT.svelte says you are at: ${$currentPage}`);
            setupObservers();
        });

        onDestroy(() => {
            console.log('LAYOUT.svelte is being destroyed');
            disconnectObservers();
        });
    }

    function setupObservers() {
        if ($currentPage === 'Home') {
            links.map((link, index) => {
                section = link.hash;
                const observer = new IntersectionObserver(handleEntries, { threshold: thresholdSets[index], rootMargin: marginSets[index] } );

                let observerTarget = document.querySelector(section)  as Element;
                observer.observe(observerTarget);
                observerSet.push(observer);
            });
        }
    }

    function disconnectObservers() {
        observerSet.forEach((observer) => {
            observer.disconnect();
            console.log('observers are being disconnected');
        });
    }

    function handleSectionChange(section: string) {
        activeSection.setSectionTo(section as activeSection);
    }

    function handleEntries(entries: IntersectionObserverEntry[]) {
        entries.forEach(({ isIntersecting, target, intersectionRatio }) => {
            if (isIntersecting) {
                const targetElement = target as HTMLElement;
                const targetSection = targetElement.dataset.section as activeSection;
                if (previousSection !== '') {
                    if (targetSection) {
                        handleSectionChange(targetSection);
                        previousSection = '';
                        // console.log('activeSection set based on previousSection');
                    }
                } else {
                    handleSectionChange(targetSection);
                    // console.log('activeSection set based on targetSection');
                }
            }
        });
    }
</script>

<style lang="postcss">
    :global(html) {
        font-family: monoDrip;
        background-color: #e4e4e7;
        /* scroll-behavior: smooth; */
    }
</style>

<div class={`bg-[#BBDDF2] absolute -z-[10] top-[-6rem] right-[11rem] h-[31.25rem] w-[35.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] xs:hidden`} ></div>
<div class={`bg-[#e9ffe7] absolute -z-[10] top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] xs:hidden`} ></div>

<Header />
{#key key}
    <div class={`flex flex-col items-center text-zinc-900 relative md:max-w-[1920px] xs:max-w-[354px]`} in:fly|global={transitionIn} out:fly|global={transitionOut}  >
        <slot />
    </div>
{/key}
<Footer />



<!-- #e4e4e7 -->
<!-- #3f3f46 -->
<!-- in:fly={transitionIn} out:fly={transitionOut} -->
<!--    {#key data.path}
            <div class={`flex flex-col items-center text-zinc-900 relative md:max-w-[1920px] xs:max-w-[374px]`} in:fly={transitionIn} out:fly={transitionOut}  >
                
            </div>
        {/key} -->
<!-- <PageTransition key={dataKey} duration={500}>
    <slot />
</PageTransition> -->