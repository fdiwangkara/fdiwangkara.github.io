<script>
    import {theme} from "$lib/stores/theme.js";
    import {onMount} from "svelte";
    import {tweened} from 'svelte/motion';
    import {cubicOut} from 'svelte/easing';

    let scrollY = tweened(0, {duration: 300, easing: cubicOut});
    let imagesLoaded = {programming: false, hiking: false, photography: false};

    function handleScroll() {
        scrollY.set(window.scrollY);
    }

    function handleImageLoad(key) {
        imagesLoaded = {...imagesLoaded, [key]: true};
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<svelte:head>
    <title>fdiwangkara - About</title>
</svelte:head>

<div class="min-h-screen flex flex-col justify-start transition-all duration-300 bg-bg-light dark:bg-bg-dark relative">
    <div class="px-10 md:px-20 lg:px-36 xl:px-[200px] pt-[100px]">
        <h1 class="font-secondary font-bold text-start text-xl md:text-4xl text-text-light dark:text-text-dark">
            About Filemon Diwangkara...
        </h1>
        <p class="text-sm md:text-lg font-secondary text-text-light dark:text-text-dark text-justify mt-2 max-w-2xl">
            Hello, I'm Filemon Diwangkara, a junior programmer who is living my daily life as a "normal" person and
            carrying out my studies.
            Greetings to all who see my website. That's if anyone sees it hahahahaha.
        </p>
    </div>
    <div class="parallax mt-10"></div>
    <div class="px-10 md:px-20 lg:px-36 xl:px-[200px] pt-10 flex justify-center">
        <div class="max-w-full text-justify">
            <p class="text-sm md:text-lg font-secondary text-text-light dark:text-text-dark">
                Well, so after you know my name and a brief introduction... I will continue the story about life. A
                vocational student from Raden Umar Said Vocational School in Kudus, Central Java. Yes, there is
                nothing special in my life, but just as a fun fact, I am someone who is very interested in
                technological developments today. That's why I majored in Software and Game Development at this
                school. And now I'm doing an internship.
            </p>
            <p class="text-sm md:text-lg font-secondary text-text-light dark:text-text-dark mt-4">
                I do everything with pleasure and enjoy all the moments (not all of them, though). But that's the
                way the world is, as long as I can live and be happy, I will enjoy everything and I will continue to
                do my best to be my most useful self. I'm not too introverted but I also don't like crowds, so I
                only have enough friends who are supportive and can help me develop my skills in all things.
            </p>
        </div>
    </div>

    <div class="px-10 md:px-20 lg:px-36 xl:px-[200px] pt-16 text-center pb-[100px]">
        <h2 class="font-secondary font-bold text-2xl text-end md:text-3xl text-text-light dark:text-text-dark">
            What I Do?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mt-10">
            {#each [
                {title: "prograMminG", image: "/assets/images/programming.png", key: "programming"},
                {title: "hiKing", image: "/assets/images/hiking.png", key: "hiking"},
                {title: "phoTographY", image: "/assets/images/photography.png", key: "photography"}
            ] as item}
                <div class="flex flex-col items-center">
                    <h3 class="font-primary text-xl md:text-2xl text-text-light dark:text-text-dark mb-1">
                        {item.title}
                    </h3>
                    <div class="w-100%/4 flex items-center justify-center overflow-hidden relative">
                        {#if !imagesLoaded[item.key]}
                            <div class="absolute inset-0 bg-grey-light dark:bg-grey-dark animate-pulse"></div>
                        {/if}
                        <img src={item.image} alt={item.title} class="w-full h-full object-cover"
                             on:load={() => handleImageLoad(item.key)} class:opacity-0={!imagesLoaded[item.key]}
                             class:opacity-100={imagesLoaded[item.key]} transition-opacity duration-500/>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .parallax {
        height: 500px;
        background-image: url("/assets/images/about.JPG");
        background-attachment: fixed;
        background-position: center 20%;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
    }

    @media (max-width: 768px) {
        .parallax {
            background-attachment: fixed;
            background-position: center 50%;
        }
    }
</style>
