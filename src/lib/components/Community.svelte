<script lang="ts" >
    import Heading from "$lib/components/SectionHeading.svelte";
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = $page.url.pathname.split("/")[1];
        defineSection(thispath);
    });

    let title = 'Our Community';
    let href = '/community';

    let slides = [
        {
            src: '/officepic1.jpg',
            alt: 'Office Picture 1',
        },
        {
            src: '/officepic2.jpg',
            alt: 'Office Picture 2',
        },
        {
            src: '/officepic3.jpg',
            alt: 'Office Picture 3',
        },
        {
            src: '/officepic4.jpg',
            alt: 'Office Picture 4',
        },
        {
            src: '/officepic5.jpg',
            alt: 'Office Picture 5',
        },
        {
            src: '/officepic2.jpg',
            alt: 'Office Picture 2',
        },
        {
            src: '/officepic3.jpg',
            alt: 'Office Picture 3',
        },
        {
            src: '/officepic4.jpg',
            alt: 'Office Picture 4',
        },
        {
            src: '/officepic5.jpg',
            alt: 'Office Picture 5',
        },
    ];

    let currentSlide = 0;
    let concurrentSlides = 3;
    // let visibleSlides: number[];
    let visibleSlides = slides.slice(0, concurrentSlides).map((slide, index) => index);
    // $: console.log(visibleSlides);
    let slideDirection = 1;
    let autoSlide = true;
    // $: console.log(autoSlide);
    let slideTime = 2500;
    let timer = setInterval(() => {
        if (autoSlide) {
            slide(concurrentSlides);
        }
    }, slideTime);

    function slide(amount: number) {
        slideDirection = Math.sign(amount);
        currentSlide += amount;
        const newSlides = [];

        for ( let i = 0; i < concurrentSlides; i++ ) {
            newSlides.push(mod(currentSlide + i, slides.length));
        }

        visibleSlides = newSlides;
    }

    function mod(n: number, m: number) {
        return ((n % m) + m) % m;
    }
</script>

<style>
    .slide-invisible {
        opacity: 1;
        width: 48px;
        transition: 0.35s all cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .slide-invisible:hover {
        opacity: 1;
        width: 240px;
    }
</style>

<section class={`relative text-zinc-600 body-font xs:w-screen xs:overflow-clip scroll-mt-28 mb-28 sm:mb-28 overflow-visible`} id="community" data-section="Our Community"  >
    <Heading href={href} titleName={title} />
    <img src="/circles.svg" alt="Background Circles" class={`w-[50rem] opacity-90 xs:hidden absolute -z-[10] top-[-24.4375rem] left-[-31.7rem] max-w-full object-contain`}  >
    <img src="/circles.svg" alt="Background Circles" class={`w-[37.5rem] opacity-90 xs:hidden absolute -z-[10] top-[15.625rem] right-[-31.8125rem] max-w-full object-contain`}  >
    <div class={`container px-5 mx-auto`}  >
        <div class={`flex flex-col text-center w-full mb-20`}  >
            <p class={`lg:w-2/3 mx-auto leading-relaxed text-base`}  >
                At NEMA Homecare, we pride ourselves on fostering a
                professional community that embodies the essence of
                unity and mutual respect. As a leading domiciliary care
                provider, we understand the importance of creating a
                supportive environment that resonates with the values of
                a close-knit family. Our service users are not just
                clients, but valued members of our community. We are
                committed to delivering personalized care with utmost
                compassion, ensuring that everyone feels acknowledged,
                respected, and part of our NEMA family. Experience the
                NEMA difference, where professional care meets familial
                warmth.
            </p>
        </div>
        <div class={`xs:hidden flex flex-wrap items-center justify-center md:-m-2 -m-1`}  >
            <div class={`flex justify-center w-full max-w-full mx-2`} on:mouseover={() => autoSlide = false} on:focus={() => autoSlide = false} on:mouseleave={() => autoSlide = true} role="contentinfo"  >
                <button class={`basis-20`} on:click={(event) => slide(-concurrentSlides)}  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M32 40L16 24L32 8" stroke="#3f3f46" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class={`flex justify-center w-auto h-full overflow-hidden`}  >
                    {#each slides as slide, i}
                        <div class={`w-[240px] h-60 overflow-hidden transition-all duration-700 ease-cubic px-2`} class:slide-invisible={!visibleSlides.includes(i)}  >
                            <img src={slide.src} alt={slide.alt} class={`border border-white border-opacity-50 h-60 w-60 rounded-[60px] object-cover`}  />
                        </div>
                    {/each}
                </div>
                <button class={`basis-20`} on:click={(event) => slide(concurrentSlides)}  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M16 40L32 24L16 8" stroke="#3f3f46" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class={``}  >

            </div>
        </div>
    </div>
</section>