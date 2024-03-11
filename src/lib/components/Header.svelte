<script lang="ts" >
    import { links } from "$lib/data";
    import { page } from "$app/stores";
    import { activeSection, timeOfLastClick } from "$lib/context";
    import { send, receive } from "$lib/transition";

    type activeSection = (typeof links)[number]["name"] | 'Community' | 'Contact';

    let pathGetter: string;
    let newSection: activeSection;

    // Reactive statement
    $: {
        pathGetter = $page.url.pathname.split("/")[1];
        pathGetter = pathGetter === '' ? 'home' : pathGetter;
        newSection = ((pathGetter[0]).toUpperCase()) + (pathGetter.substring(1)) as activeSection;
        if (newSection === 'Community') {
            newSection = 'Our Community';
        };

        if (newSection === 'Contact') {
            newSection = 'Contact Us';
        };

        // activeSection.setSectionTo(newSection);
        // console.log(`The current section visible is: ${newSection}`);
        
    }

    type section = (typeof links)[number]["name"] | 'Community' | 'Contact';

</script>

<header class={`z-[999] relative xs:w-screen`}  >
    <div class={`fixed top-0 left-1/2 -translate-x-1/2 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 
    shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-[1.5rem] sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full flex items-center justify-center xs:left-[50%] 
    xs:h-[7.5rem] xs:w-screen xs:bg-zinc-100 xs:bg-opacity-80 xs:backdrop-blur-[0.5rem]`}  >

    </div>
    <nav class={`flex fixed top-[0.15rem] left-1/2 md:h-12 -translate-x-1/2 py-2 xs:h-16 sm:top-[1.7rem] sm:h-[initial] sm:py-0 xs:top-[1.85rem] xs:w-screen`}  >
        <ul class={`flex items-center flex-wrap justify-center gap-y-1 text-[0.9rem] font-medium text-zinc-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 w-[22rem] xs:w-screen`}  >
            {#each links as link (link.hash)}
                <li in:receive={{key: link.name}} out:send={{key:link.name}} class={link.xsClass === "hidden" ? `xs:hidden h-3/4 flex items-center justify-center relative` : `h-3/4 flex items-center justify-center relative`}  >
                    <a 
                        class={`flex w-full items-center justify-center px-3 py-3 ${ link.name !== String($activeSection) && 'hover:text-zinc-950'} font-normal transition-all duration-500 ${link.name === String($activeSection) ? 'text-center no-underline rounded-full bg-zinc-400 text-zinc-50 hover:text-[#ffff] xs:bg-zinc-300' : 'text-center no-underline rounded-full'}`}  
                        href={pathGetter === "home" ? `/${link.hash}` : `/${link.route}`}
                        data-sveltekit-noscroll  >

                        {link.name}

                        <!-- {#if link.name === String($activeSection)}
                            <span class={`bg-zinc-200 xs:bg-zinc-300 rounded-full absolute inset-0 -z-10`}  >
                            </span>
                        {/if} -->
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>