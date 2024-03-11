<script lang="ts" >
    import Heading from "$lib/components/SectionHeading.svelte";
    import { CareersData } from "$lib/data";
    import Career from "$lib/components/Career.svelte";
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = $page.url.pathname.split("/")[1];
        defineSection(thispath);
    });

    let title = 'Careers';
    let href = '/careers';
</script>

<section class={`relative flex flex-col items-center w-[min(90%,70rem)] xs:w-screen xs:hidden scroll-mt-28 mb-28 sm:mb-28 overflow-visible`} id="careers" data-section="Careers"  >
    <Heading href={href} titleName={title} />
    <img src="/wavelines2.svg" alt="Background Waves" class={`rotate-180 w-[60rem] opacity-90 xs:hidden absolute -z-[10] top-[-12.7rem] left-[-22.7rem] max-w-full object-contain`}  >
    <img src="/wavelines2.svg" alt="Background Waves" class={`opacity-90 w-[60rem] xs:hidden absolute -z-[10] top-[-12.7rem] right-[-22.4rem] max-w-full object-contain`}  >
    <div class={`p-2 mb-24 md:mb-0 lg:mb-8 sm:p-0 text-zinc-700 max-w-[60rem] text-center leading-10 scroll-mt-28`}  >
        <p class={`md:block text-zinc-800 underline underline-offset-8 mb-4 text-2xl`}  >
            Interested in becoming a carer?{" "}
        </p>
        <p class={`md:block mb-3 text-2xl`}  >
            At NEMA home care we value staff development, offering 
            free ongoing online training for all staff. We provide 
            QCF levels 2 & 3 in health and social care. We’re committed 
            to ensuring staff complete their care certification within 
            the first 3 months of employment.
        </p>
    </div>
    <div>
        {#each CareersData as career, i (career.title)}
            <a href={`/careers/lvl${i + 1}`} class={`group`}  >
                <Career {...career} />
            </a>
        {/each}
    </div>
</section>