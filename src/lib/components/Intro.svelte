<script>
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = $page.url.pathname.split("/")[1];
        defineSection(thispath);
    });
</script>

<section class={`mb-28 xs:w-screen max-w-[50rem] w-[min(90%,60rem)] text-center sm:mb-0 scroll-mt-[1000rem]`} id="home" data-section="Home"  >
    <div class={`flex items-center justify-center`}  >
        <div class={`flex items-center justify-center`}  >
            <img src="/nemaLogo.png" alt="NEMA Logo">
        </div>
    </div>
    <h1 class={`mb-10 bt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-zinc-600`} >
        <span class={`font-thin`}  >
            &quot;I remain grateful for your{" "}
            <span class={`font-bold`}  >
                compassionate
            </span> care of my dear wife. Her final days were filled with{" "}
            <span class={`font-light italic`}  >
                dignity and warmth
            </span>. Your kindness will{" "}
            <span class={`font-bold underline`}  >
                forever
            </span> echo in our hearts.&quot; - Ben (ex-client&apos;s partner)
        </span>
    </h1>
    <div class={`flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium`}  >
        <a href="#contact" class={`group bg-zinc-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-zinc-950 transition-all duration-700 active:scale-105`}  >
            Contact Us
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class={`group-hover:translate-x-1 transition-all duration-700 text-zinc-300`}  ><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
        </a>
        <a href="/Servicelist.pdf" class={`group bg-zinc-100 text-zinc-600 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:text-zinc-950 hover:scale-110 hover:bg-white transition-all duration-700 active:scale-105 cursor-pointer borderBlack`}  >
            Download service list
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class={`group-hover:translate-y-[0.15rem] transition-all duration-700`}  ><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        <a href="tel:02079521480" class={`group bg-zinc-100 text-zinc-600 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:text-zinc-950 hover:scale-110 hover:bg-white transition-all duration-700 active:scale-105 cursor-pointer borderBlack`}  >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class={`group-hover:scale-125 transition-all duration-1000`}  ><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg>
        </a>
        <a href="https://web.facebook.com/Nema-Home-Care-Limited-144725949460730/?_rdc=1&_rdr" target="_blank" class={`group bg-zinc-100 text-zinc-600 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:text-zinc-950 hover:scale-110 hover:bg-white transition-all duration-700 active:scale-105 cursor-pointer borderBlack`}  >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class={`group-hover:scale-125 transition-all duration-1000`}  ><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg>
        </a>
    </div>
</section>