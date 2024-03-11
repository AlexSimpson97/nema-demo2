<script>
    import Heading from "$lib/components/SectionHeading.svelte";
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = $page.url.pathname.split("/")[1];
        defineSection(thispath);
    });
    
    let title = 'Contact Us';
    let href = '/contact';
</script>

<section class={`text-zinc-500 body-font scroll-mt-28 mb-20 sm:mb-28 text-center`} id="contact" data-section="Contact Us"  >
    <Heading href={href} titleName={title} />
    <p class={`text-zinc-700 -mt-6`}  >
        For all enquiries please contact us at:
        <a class={`underline`}  href={`mailto:info@nemahomecare.co.uk`}  >info@nemahomecare.co.uk</a> 
        or through the form below.
    </p>
    <form class={`mt-10 flex flex-col`}  action="">
        <input name="userEmail" class={`outline-green-600 h-14 px-4 rounded-lg borderBlack transition-all duration-1000 ease-custom`}  type="email" required={true} maxlength={500} placeholder="Your email"  >
        <textarea name="userFeedback" class={`outline-green-600 h-52 my-3 rounded-lg borderBlack p-4 transition-all duration-1000 ease-custom`} required={true} maxlength={5000} placeholder="Your message"  />
        <button class={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-green-600 text-white rounded-full outline-none transition-all duration-700 ease-custom focus:scale-110 hover:scale-110 active:scale-105 hover:bg-green-700 disabled:scla-100 disabled:bg-opacity-65`} type="submit"  >
            Submit
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-700 ease-custom" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
        </button>
    </form>
</section>