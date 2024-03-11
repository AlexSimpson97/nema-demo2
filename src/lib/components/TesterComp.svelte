<!-- <script lang="ts" >
    // your script goes here
    import About from "$lib/components/About.svelte";
    import Careers from "$lib/components/Careers.svelte";
    import Intro from "$lib/components/Intro.svelte";
    import SectionDivider from "$lib/components/SectionDivider.svelte";
    import Services from "$lib/components/Services.svelte";
    import { activeSection, timeOfLastClick } from "$lib/context";
    import { links } from "$lib/data";
    import { onMount } from 'svelte';


    export function assignObserverReference(elementID: string) {
        type activeSection = (typeof links)[number]["name"];

        const numSteps: number = 20.0;

        let homeSection: Element;
        let prevRatio: number = 0.0;
        let prevTime: number = 0;
        let thisSection: activeSection;
        let inView: boolean;


        console.log('Page loaded: query not selected');
            
        onMount(() => {
            homeSection = document.querySelector(`${elementID}`) as Element;
            if (homeSection) {
                createObserver();
                timeOfLastClick.was(Date.now());
            } else {
                console.error(`Element with id ${elementID} does not exist`);
            }
        });

        function createObserver() {
            let observer: IntersectionObserver;

            let options: IntersectionObserverInit = {
                root: null,
                rootMargin: "0px",
                threshold: buildThresholdList(),
            };

            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(homeSection);
        }

        function buildThresholdList(): number[] {
            let thresholds: number[] = [];
            let numSteps: number = 20;

            for (let i: number = 1.0; i <= numSteps; i++) {
                let ratio: number = i / numSteps;
                thresholds.push(ratio);
            }

            thresholds.push(0);
            return thresholds;
        }

        function handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {

            entries.forEach((entry: IntersectionObserverEntry) => {
                inView = entry.isIntersecting;
                if (entry.intersectionRatio > prevRatio) {
                    let validIds = ["Home", "About", "Services", "Careers", "Our Community", "Contact Us"];
                    if (validIds.includes((entry.target.id[0].toUpperCase() + entry.target.id.substring(1)))) {
                        thisSection = entry.target.id;
                        thisSection = ((thisSection[0]).toUpperCase()) + (thisSection.substring(1));
                    }
                    

                    $: if (inView) {
                        console.log($timeOfLastClick);
                        
                        activeSection.setSectionTo(thisSection);
                        timeOfLastClick.was(Date.now());
                        $activeSection;
                        
                    } else {
                        prevRatio = 0;
                    }
                    
                    console.log(`The current section visible is: ${thisSection}`);
                    prevRatio = entry.intersectionRatio;
                
                } else if (entry.intersectionRatio < prevRatio) {
                    let validIds = ["Home", "About", "Services", "Careers", "Our Community", "Contact Us"];
                    if (validIds.includes((entry.target.id[0].toUpperCase() + entry.target.id.substring(1)))) {
                        thisSection = entry.target.id;
                        thisSection = ((thisSection[0]).toUpperCase()) + (thisSection.substring(1));
                    }

                    $: if (inView) {
                        console.log($timeOfLastClick);
                        
                        activeSection.setSectionTo(thisSection);
                        timeOfLastClick.was(Date.now());
                        $activeSection;
                        
                    } else {
                        prevRatio = 0;
                    }
                }
            });
        }
        return
    }

    

</script>


<main class={`flex flex-col items-center`} on:load={links.map((link) => {
    assignObserverReference(link.hash)
})}  >
    <Intro />
    <SectionDivider />
    <About />
    <SectionDivider />
    <Services />
    <SectionDivider />
    <Careers />
    <SectionDivider />
</main>


<style lang="postcss">
    /* your styles go here */
    
</style> -->
