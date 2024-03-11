<script lang="ts" >
  let slides = [
    {
      src:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Mountain"
    },
    {
      src:
        "https://images.unsplash.com/photo-1507502707541-f369a3b18502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      alt: "Moon"
    },
    {
      src:
        "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Building"
    },
    {
      src:
        "https://images.unsplash.com/photo-1516653980844-c68df1de5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Desert"
    },
    {
      src:
        "https://images.unsplash.com/photo-1472715148636-92e348325950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      alt: "Ocean"
    },
    {
      src:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Mountain"
    },
    {
      src:
        "https://images.unsplash.com/photo-1507502707541-f369a3b18502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      alt: "Moon"
    },
    {
      src:
        "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Building"
    },
    {
      src:
        "https://images.unsplash.com/photo-1516653980844-c68df1de5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "Desert"
    },
    {
      src:
        "https://images.unsplash.com/photo-1472715148636-92e348325950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      alt: "Ocean"
    }
  ];

  let currentSlide = 0;
  let concurrentSlides = 3;
  let visibleSlides = slides.slice(slides, concurrentSlides).map((x, i) => i);
  let slideDirection = 1;
  let autoSlide = true;
  $: console.log(autoSlide);

  let slideTime = 2500;
  let timer = setInterval(() => {
    if (autoSlide) slide(concurrentSlides);
  }, slideTime);

  function slide(amount) {
    slideDirection = Math.sign(amount);
    currentSlide = currentSlide + amount;
    const newSlides = [];
    for (let i = 0; i < concurrentSlides; i++)
      newSlides.push(mod(currentSlide + i, slides.length));
    visibleSlides = newSlides;
  }

  function mod(n, m) {
    return ((n % m) + m) % m;
  }
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  main {
    font-family: sans-serif;
    text-align: center;
  }
  .carousel {
    display: flex;
    width: 100vw;
    max-width: 100vw;
    justify-content: center;
    margin: 0 8px;
  }
  .slides {
    display: flex;
    width: auto;
    height: 100%;
    overflow: hidden;
    justify-content: space-around;
  }
  .carousel-ctrl {
    flex-basis: 80px;
  }
  .slide {
    width: 240px;
    height: 240px;
    overflow: hidden;
    transition: 0.75s all ease;
    padding: 0 4px;
  }

  .slide img {
    width: 240px;
    max-width: 100%;
    height: 240px;
    display: block;
    object-fit: cover;
    object-position: center;
    transition: 0.25s all ease;
  }

  .slide:hover img {
    transform: scale(1.1);
  }

  .slide-invisible {
    opacity: 1;
    width: 12px;
    transition: 0.25s all ease;
  }
  .slide-invisible:hover {
    width: 240px;
  }

  button {
    background-color: transparent;
    border: 0;
  }
  button:hover {
    background-color: rgb(241, 241, 241);
    border-radius: 4px;
  }
</style>

<svelte:head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>

<main>
	<h1>Carousel</h1>
	<h2>Image Carousel built with Svelte 3</h2>
  <input type="number" bind:value={concurrentSlides} on:change={e => { slide(0) }}>
  <input type="checkbox" bind:checked={autoSlide}>Auto Slide
  <div class="carousel">
    <button class="carousel-ctrl" on:click={e => slide(-concurrentSlides)}>
      <i class="material-icons">
        keyboard_arrow_left
      </i>
    </button>
    <div class="slides">
      {#each slides as slide, i}
          <div
            class="slide" class:slide-invisible={!visibleSlides.includes(i)}
            style="">
            <img {...slide} />
          </div>
      {/each}
    </div>
    <button class="carousel-ctrl"  on:click={e => slide(concurrentSlides)}>
      <i class="material-icons">
        keyboard_arrow_right
      </i>
    </button>
  </div>
  <div class="carousel-nav">
  </div>
</main>





<!-- let observers: IntersectionObserver[] = [];
let direction: string = 'up';
let prevYPosition: number = 0;
let sections: Element[] = [];
let scrollRoot: Element;

onMount(() => {
    sections = [...document.querySelectorAll('[data-section]')];
    scrollRoot = document.querySelector('[data-scroller]') as Element;
})

function setScrollDirection() {
    if (window.scrollY > prevYPosition) {
        direction = 'down';
        // console.log(direction);
    } else {
        direction = 'up';
        // console.log(direction);
    }

    prevYPosition = scrollRoot.scrollTop;
}

function getTargetSection(entry: IntersectionObserverEntry) {
    const index = sections.findIndex((section) => section === entry.target);

    if (index >= sections.length - 1) {
        return entry.target;
    } else {
        return sections[index + 1];
    }
}

function shouldSectionUpdate(entry: IntersectionObserverEntry) {
    
    // const isScrollBelowEntryTop = window.scrollY >= (entry.boundingClientRect.bottom - entry.boundingClientRect.top)/2;

    if ( direction === 'down' && !entry.isIntersecting ) {
        // return isScrollBelowEntryTop && !entry.isIntersecting;
        return true;
    }

    if ( direction === 'up' && entry.isIntersecting ) {
        // return isScrollBelowEntryTop && entry.isIntersecting;
        return true;
    }

    return false;

}

function updateMarker(target: Element) {
    const id = target.id;

    if (!id) return;
}



export function assignObserverReference(elementID: string, index: number) {

    type activeSection = (typeof links)[number]["name"];

    const numSteps: number = 20.0;

    let homeSection: Element;
    let thisSection: activeSection;
    let prevRatio: number = 0.0;
    let prevTime: number = 0;
    let inView: boolean;


    console.log('Page loaded: query not selected');
        
    onMount(() => {
        homeSection = document.querySelector(`${elementID}`) as Element;
        
        timeOfLastClick.was(Date.now());
        if (homeSection) {
            createObserver();
            timeOfLastClick.was(Date.now());
        } else {
            console.error(`Element with id ${elementID} does not exist`);
        }
    });

    function createObserver() {

        let options: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px",
            threshold: [],
        };

        let thresholdSets = [
            [0.60],
            [0.99],
            [0.50],
            [0.20],
            [0.30],
            [0.50],
        ];

        // for (let i = 0; i < links.length; i++) {
        //     options.threshold = thresholdSets[i];
        //     observers[i] = new IntersectionObserver(handleIntersect, options);
        //     observers[i].observe(homeSection);
        // };

        options.threshold = thresholdSets[index]
        observers[index] = new IntersectionObserver(handleIntersect, options);
        observers[index].observe(homeSection);

    }

    function handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {

        entries.forEach((entry: IntersectionObserverEntry) => {
            setScrollDirection();
            // inView = entry.isIntersecting;
            // $: if (entry.isIntersecting) {
            //     let validIds = ["Home", "About", "Services", "Careers", "Our Community", "Contact Us"];
            //     if (validIds.includes((entry.target.id[0].toUpperCase() + entry.target.id.substring(1)))) {
            //         thisSection = entry.target.id;
            //         thisSection = ((thisSection[0]).toUpperCase()) + (thisSection.substring(1));
            //     }
                

                
            //     console.log($timeOfLastClick);
                
            //     activeSection.updateSectionTo(thisSection);
            //     timeOfLastClick.was(Date.now());
            //     $activeSection;
            
            //     console.log(`The current section visible is: ${thisSection}`);
            //     prevRatio = entry.intersectionRatio;
            
            // }

            const target = direction === 'down' ? getTargetSection(entry) : entry.target;

            thisSection = target.dataset.section;

            $: if (shouldSectionUpdate(entry)) {
                // console.log(target.dataset.section);
                activeSection.updateSectionTo(thisSection);
                console.log($activeSection);
            }

        });
    }

    return
} -->










<!-- type ThresholdSet = [number] | [number, number, number, number, number];

    let pathGetter: string;
    let rootPath: string;

    let sections = [];
    let thresholdSets: ThresholdSet[] = [
            [0.60],
            [1.0],
            [0.20, 0.55, 0.60, 0.65, 0.70],
            [0.20],
            [0.30],
            [0.50],
        ];

    type activeSection = (typeof links)[number]["name"];

    export function assignObserverReference( section: string, index: number ) {

        const observer = new IntersectionObserver(async ( entries ) => {
            entries.forEach(({ isIntersecting, target, intersectionRatio }) => {
                const targetElement = target as HTMLElement;
                const targetSection = targetElement.dataset.section as activeSection;
                if (isIntersecting) {
                    
                    activeSection.setSectionTo(targetSection);
                    
                }
            });
        }, { threshold: thresholdSets[index] } );

        let observerTarget = document.querySelector(section)  as Element;
        observer.observe(observerTarget);
        // console.log($activeSection);
        
        return
    }

    // onMount(async () => {
    //     await tick();
    //     rootPath = currentPage.is();
    //     // alert(rootPath);
    //     await tick();
    //     await links.forEach((link, index) => {
    //         assignObserverReference(link.hash, index)
    //     });
    // });

    // onDestroy(async () => {
    //     // console.log('destroyed');
    //     await tick();
    //     rootPath = currentPage.is();
    // }); -->