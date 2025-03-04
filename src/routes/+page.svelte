<script>
    import {onMount} from "svelte";
    import {theme} from "$lib/stores/theme.js";
    import { gallery } from "$lib/data/gallery.js";

    let latestImage = gallery.reduce((latest, current) =>
        new Date(current.date) > new Date(latest.date) ? current : latest
    );
    let isLoading = true;
    let isPrimary = true;

    onMount(() => {
        if (typeof window !== 'undefined') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
            theme.set(systemTheme.matches ? 'dark' : 'light');
        }
        setInterval(() => {
            isPrimary = !isPrimary;
        }, 500);
        setTimeout(() => {
            isLoading = false;
        }, 2000);
    });

    $: isDark = $theme === "dark";
</script>

<svelte:head>
    <title>fdiwangkara - Approach</title>
</svelte:head>

<div class="h-screen flex flex-col items-center justify-center transition-all duration-300
    bg-bg-light dark:bg-bg-dark px-10 md:px-20 lg:px-36 xl:px-[200px]">
    <h1 class="font-primary text-5xl md:text-7xl text-center
        bg-gradient-to-br from-bg-dark via-primary-light to-primary-light
        dark:from-bg-light dark:via-primary-dark dark:to-primary-dark
        bg-clip-text text-transparent relative pt-2"
        style="line-height: 80%;">
        SugenG <br>RaWuh
    </h1>
    <p class="text-xl sm:text-2xl md:text-4xl font-secondary text-text-light dark:text-text-dark">
        ꧋ꦱꦸꦒꦼꦁꦫꦮꦸꦃ꧉
    </p>
    <div class="pt-[50px] md:pt-[100px] flex flex-col md:flex-row items-center justify-between w-full gap-6">
        <p class="text-sm sm:text-md md:text-lg font-secondary text-text-light dark:text-text-dark text-center md:text-left max-w-[295px] md:max-w-[500px]">
            Welcome to the fdiwangkara website. Actually, this is a website that I created to introduce who
            <span class={`text-primary-light dark:text-primary-dark transition-all duration-500 ${isPrimary ? 'font-primary' : 'font-third'}`}>FilemOn DiWangkarA</span> is.
        </p>
        <div class="relative group mt-[25px] md:mt-0">
            <div class="absolute inset-0 bg-bg-light border border-bg-dark dark:bg-primary-light dark:border-none rounded-[5px]
        translate-y-1 -translate-x-1">
            </div>
            <button class="relative px-6 py-1 text-base sm:text-sm font-secondary rounded-[5px] border
        border-text-light text-text-dark dark:text-text-light
        bg-primary-light dark:bg-bg-light dark:border-text-light
        transition-all duration-300 group-hover:translate-y-1 group-hover:-translate-x-1 hidden md:block">
                Explore
            </button>
            <div class="relative md:hidden">
                <div class="absolute inset-0 bg-bg-light border border-bg-dark dark:bg-primary-light dark:border-none rounded-[5px]
            translate-y-1 -translate-x-1">
                </div>
                <button class="relative px-6 py-1 text-[12px] sm:text-sm font-secondary rounded-[5px] border
            border-text-light text-text-dark dark:text-text-light
            bg-primary-light dark:bg-bg-light dark:border-text-light">
                    Explore
                </button>
            </div>
        </div>
    </div>
</div>

<div class="relative w-full flex items-center justify-center py-10 bg-bg-light dark:bg-bg-dark">
    <div class="w-[35%] h-[1px] bg-grey-light dark:bg-grey-dark"></div>
    <div class="relative flex items-center justify-center mx-8 -px-6">
        <div class="w-[1px] h-[25px] bg-grey-light dark:bg-grey-dark"></div>
        <div class="absolute left-[-10px] w-[1px] h-[10px] bg-grey-light dark:bg-grey-dark"></div>
        <div class="absolute right-[-10px] w-[1px] h-[10px] bg-grey-light dark:bg-grey-dark"></div>
    </div>
    <div class="w-[35%] h-[1px] bg-grey-light dark:bg-grey-dark"></div>
</div>
<div class="h-screen flex flex-col md:flex-row items-center justify-center transition-all duration-300
    bg-bg-light dark:bg-bg-dark px-10 md:px-20 lg:px-36 xl:px-[200px] gap-10">
    <div class="w-full md:w-1/2 flex justify-start">
        {#if isLoading}
            <div class="w-full max-w-[400px] h-[200px] md:h-[250px] bg-grey-light dark:bg-grey-dark animate-pulse"></div>
        {:else}
            <img src={latestImage.image} alt={latestImage.title}
                 class="w-full max-w-[400px] h-auto shadow-lg transition-opacity duration-500">
        {/if}
    </div>
    <div class="w-full md:w-1/2 text-center md:text-left justify-end">
        <h2 class="font-primary text-3xl md:text-4xl text-primary-light dark:text-primary-dark text-center md:text-end mt-10 md:mt-0">laTest on Gallery</h2>
        <p class="text-sm md:text-lg font-secondary text-text-light dark:text-text-dark text-justify mt-4">
            Photography is also one of my hobby. So you can look around my gallery on the gallery tab to view a bunch of my shots.
        </p>
    </div>
</div>


