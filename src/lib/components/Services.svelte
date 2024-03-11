<script>
    import Heading from "$lib/components/SectionHeading.svelte";
    import { onMount } from "svelte";
    import { defineSection } from "$lib/sectionDefinition";
    import { page } from "$app/stores";

    onMount(() => {
        let thispath = $page.url.pathname.split("/")[1];
        defineSection(thispath);
    });

    let title = "Our Services";
    let href = '/services';
</script>


<section class={`xs:w-screen text-center leading-8 scroll-mt-96 mb-28 sm:mb-28`} id="services" data-section="Services"  >
    <Heading href={href} titleName={title} />
    <img src="/wavelines.svg" alt="Background Waves" class={`opacity-80 xs:hidden absolute -z-[10] top-[82.1rem] right-[-1.6rem] max-w-full object-contain`}  >
    <div class={`xs:p-0 px-6 xl:px-0`}  >
        <div class={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-x-16 gap-y-24`}  >
            <a href="/services/personalcare">
                <div class={`CardGroupContainer w-[360px] h-[426px] flex-col justify-center items-center inline-flex group`}  >
                    <div class={`CardGroup w-[360px] h-[426px] relative hover:HindCard`}  >
                        <div class={`ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl`}  >
                            <div class={`p-5`}  >
                                <h1 class={`p-2 mb-5 text-2xl font-semibold`}  >
                                    Personal Care
                                </h1>
                                <div class={`my-5`}  >
                                    <p>
                                        Experience the warmth of personalized care
                                        with NEMA. We provide top-notch
                                        personal care services tailored to your
                                        unique needs. Our dedicated team ensures
                                        your comfort and well-being are our top
                                        priority. Rediscover independence and joy in
                                        the comfort of your own home with us.
                                    </p>
                                </div>
                                <span class={`hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center`}  >
                                    <p>Learn More </p>
                                    <div>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            class={`group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right`}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            
                                            stroke="#4338CA"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round" >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="15" y1="16" x2="19" y2="12" />
                                            <line x1="15" y1="8" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class={`HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-left  bg-gradient-to-b from-green-200 to-sky-500 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] backdrop-blur-2xl md:group-hover:skew-x-[10deg] md:group-hover:skew-y-[-20deg] md:group-hover:translate-y-[-3px] md:group-hover:scale-x-[0.8]`}  >
                        </div>
                    </div>
                </div>
            </a>
            <a href="/services/supportedliving">
                <div class={`CardGroupContainer w-[360px] h-[426px] flex-col justify-center items-center inline-flex group`}  >
                    <div class={`CardGroup w-[360px] h-[426px] relative hover:HindCard`}  >
                        <div class={`ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl`}  >
                            <div class={`p-5`}  >
                                <h1 class={`p-2 text-2xl font-semibold`}  >
                                    Supported Living
                                </h1>
                                <div class={`my-5`}  >
                                    <p>
                                        Rediscover the joy of independence with our Care 
                                        Company&apos;s Supported Living services. We provide 
                                        personalized assistance tailored to your lifestyle, 
                                        ensuring you can live comfortably and confidently 
                                        in your own home. Our dedicated team is committed 
                                        to enhancing your quality of life every day.
                                    </p>
                                </div>
                                <span class={`hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center`}  >
                                    <p>Learn More </p>
                                    <div>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            class={`group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right`}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            
                                            stroke="#4338CA"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round" >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="15" y1="16" x2="19" y2="12" />
                                            <line x1="15" y1="8" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class={`HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-left md:group-hover:rotate-[-8.25deg] bg-gradient-to-b from-sky-200 to-green-500 rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] backdrop-blur-2xl md:group-hover:transform md:group-hover:skew-x-10 md:group-hover:skew-y-20 md:group-hover:translate-y-[-3px] md:group-hover:scale-x-80`} >
                        </div>
                    </div>
                </div>
            </a>
            <a href="/services/dementia">
                <div class={`CardGroupContainer flex-col justify-center items-center inline-flex group`}  >
                    <div class={`CardGroup w-[360px] h-[426px] relative hover:HindCard`}  >
                        <div class={`ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl`}  >
                            <div class={`p-5`}  >
                                <h1 class={`p-2 mb-5 text-2xl font-semibold`}  >
                                    Dementia/Alzheimers
                                </h1>
                                <div class={`my-5`}  >
                                    <p>
                                        Experience compassionate and specialized Dementia
                                        /Alzheimer&apos;s care with NEMA. Our dedicated 
                                        team is trained to provide personalized care and support, 
                                        ensuring comfort, safety, and dignity for your loved ones. 
                                        We&apos;re committed to making every day meaningful in the journey 
                                        of memory loss.
                                    </p>
                                </div>
                                <span class={`hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center`}  >
                                    <p>Learn More </p>
                                    <div>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            class={`group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right`}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            
                                            stroke="#4338CA"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round" >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="15" y1="16" x2="19" y2="12" />
                                            <line x1="15" y1="8" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class={`HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-right  bg-gradient-to-b from-green-200 to-sky-500 rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] backdrop-blur-2xl md:group-hover:skew-x-[-10deg] md:group-hover:skew-y-[20deg] md:group-hover:translate-y-[-3px] md:group-hover:scale-x-[0.8]`}  >
                        </div>
                    </div>
                </div>
            </a>
            <a href="/services/outreachsupport">
                <div class={`CardGroupContainer w-[360px] h-[426px] flex-col justify-center items-center inline-flex group`}  >
                    <div class={`CardGroup w-[360px] h-[426px] relative hover:HindCard`}  >
                        <div class={`ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl`}  >
                            <div class={`p-5`}  >
                                <h1 class={`p-2 mb-5 text-2xl font-semibold`}  >
                                    Outreach Support
                                </h1>
                                <div class={`my-5`}  >
                                    <p>
                                        Experience the power of community with 
                                        NEMA&apos;s Outreach Support. We 
                                        connect you with essential services and 
                                        resources, fostering a sense of belonging 
                                        and well-being. Our dedicated team is 
                                        committed to empowering you to live a 
                                        fulfilling and independent life within 
                                        your community.
                                    </p>
                                </div>
                                <span class={`hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center`}  >
                                    <p>Learn More </p>
                                    <div>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            class={`group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right`}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            
                                            stroke="#4338CA"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round" >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="15" y1="16" x2="19" y2="12" />
                                            <line x1="15" y1="8" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class={`HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-left  bg-gradient-to-b from-sky-200 to-green-500 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] backdrop-blur-2xl md:group-hover:skew-x-[10deg] md:group-hover:skew-y-[-20deg] md:group-hover:translate-y-[-3px] md:group-hover:scale-x-[0.8]`}  >
                        </div>
                    </div>
                </div>
            </a>
            <a href="/services/domestictasks">
                <div class={`CardGroupContainer w-[360px] h-[426px] flex-col justify-center items-center inline-flex group`}  >
                    <div class={`CardGroup w-[360px] h-[426px] relative hover:HindCard`}  >
                        <div class={`ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl`}  >
                            <div class={`p-5`}  >
                                <h1 class={`p-2 text-2xl font-semibold`}  >
                                    Domestic Tasks
                                </h1>
                                <div class={`my-5`}  >
                                    <p>
                                        Embrace the ease of living with our Care Company&apos;s 
                                        Domestic Tasks Assistance. We provide support with 
                                        daily chores, ensuring a clean and organized home 
                                        environment. Our dedicated team is committed to 
                                        enhancing your comfort and independence, making 
                                        everyday living simpler and more enjoyable.
                                    </p>
                                </div>
                                <span class={`hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center`}  >
                                    <p>Learn More </p>
                                    <div>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            class={`group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right`}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            
                                            stroke="#4338CA"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round" >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="15" y1="16" x2="19" y2="12" />
                                            <line x1="15" y1="8" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class={`HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-left md:group-hover:rotate-[-8.25deg] bg-gradient-to-b from-green-200 to-sky-500 rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] backdrop-blur-2xl md:group-hover:transform md:group-hover:skew-x-10 md:group-hover:skew-y-20 md:group-hover:translate-y-[-3px] md:group-hover:scale-x-80`} >
                        </div>
                    </div>
                </div>
            </a>
            <a href="/services/palliativecare">
                <div class={`CardGroupContainer flex-col justify-center items-center inline-flex group`}  >
                    <div class={`CardGroup w-[360px] h-[426px] relative hover:HindCard`}  >
                        <div class={`ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl`}  >
                            <div class={`p-5`}  >
                                <h1 class={`p-2 mb-5 text-2xl font-semibold`}  >
                                    Palliative Care
                                </h1>
                                <div class={`my-5`}  >
                                    <p>
                                        Experience compassionate Palliative Care 
                                        with NEMA. We provide personalized, 
                                        holistic care designed to alleviate discomfort 
                                        and improve quality of life for those facing 
                                        serious illness. Our dedicated team is committed 
                                        to providing comfort, dignity, and peace in every 
                                        stage of your journey.
                                    </p>
                                </div>
                                <span class={`hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center`}  >
                                    <p>Learn More </p>
                                    <div>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            class={`group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right`}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            
                                            stroke="#4338CA"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round" >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="15" y1="16" x2="19" y2="12" />
                                            <line x1="15" y1="8" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class={`HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-right  bg-gradient-to-b from-sky-200 to-green-500 rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] backdrop-blur-2xl md:group-hover:skew-x-[-10deg] md:group-hover:skew-y-[20deg] md:group-hover:translate-y-[-3px] md:group-hover:scale-x-[0.8]`}  >
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</section>