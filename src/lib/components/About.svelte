<script>
    import Heading from "$lib/components/SectionHeading.svelte";
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = $page.url.pathname.split("/")[1];
        defineSection(thispath);
    });

    

    let title = 'about NEMA';
    let href = '/about';
</script>


<section class={`relative p-2 mb-24 md:mb-0 sm:p-0 text-zinc-700 xs:w-screen w-[min(90%,60rem)] xs:mb-36 text-center leading-8 scroll-mt-96`} id="about" data-section="About"  >
    <Heading href={href} titleName={title}  />
    <p class={`hidden md:contents mb-3 text-2xl`} >
        NEMA Home Care is dedicated to providing exceptional, 
        personalized care services right in the comfort of your 
        own home. Our wide range of services includes Personal 
        Care, Supported Living, Dementia/Alzheimer’s Care, 
        Domestic Tasks Assistance, Outreach Support, and 
        Palliative Care. Our team of dedicated professionals 
        is committed to enhancing your quality of life, 
        ensuring your comfort, safety, and independence.
    </p>
    <p class={`text-2xl`} >
        We tailor our services to meet your unique needs and 
        preferences, providing you with the support you need 
        when you need it. Experience the NEMA difference today 
        and rediscover the joy of living at home.
    </p>
    <img src={`/squares.svg`} alt={`Background Squares`} class={`opacity-50 xs:hidden absolute h-[591px] w-[604px] z-[10] top-[-10.7rem] right-[-47.5rem] max-w-full object-contain`}  >
    <img src={`/squares.svg`} alt={`Background Squares`} class={`rotate-180 opacity-50 xs:hidden absolute h-[591px] w-[604px] z-[10] top-[-10.625rem] left-[-57.5rem] max-w-full object-contain`}  >
</section>