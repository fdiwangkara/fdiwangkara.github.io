<script>
    import { onMount } from "svelte";
    import { gallery } from "$lib/data/gallery.js";
    import { theme } from "$lib/stores/theme";

    let imagesLoaded = {};
    let selectedCategory = "All";

    function handleImageLoad(index) {
        imagesLoaded = { ...imagesLoaded, [index]: true };
    }

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return date.toLocaleDateString("en-GB", options);
    }

    function filterGallery() {
        return selectedCategory === "All"
            ? gallery
            : gallery.filter((item) => item.category === selectedCategory);
    }
</script>

<svelte:head>
    <title>fdiwangkara - Gallery</title>
</svelte:head>

<div class="min-h-screen flex flex-col justify-start bg-bg-light dark:bg-bg-dark transition-all duration-300">
    <div class="px-6 md:px-20 lg:px-36 xl:px-[200px] pt-[100px]">
        <h1 class="font-primary pt-5 pb-10 md:pb-5 text-center text-2xl md:text-4xl text-primary-light dark:text-primary-dark">
            GallerY
        </h1>

        <div class="flex space-x-4 items-start overflow-x-auto whitespace-nowrap md:px-0 pb-5 sm:pb-0">
            {#each ["All", ...new Set(gallery.map(item => item.category))] as category}
                <button
                        on:click={() => (selectedCategory = category)}
                        class="px-4 py-1 rounded-[2px] border font-secondary text-sm md:text-base transition-colors duration-300 shrink-0"
                        class:bg-primary-light={selectedCategory === category && $theme === "light"}
                        class:bg-primary-dark={selectedCategory === category && $theme === "dark"}
                        class:text-text-dark={selectedCategory === category && $theme === "light"}
                        class:text-text-light={selectedCategory === category && $theme === "dark"}
                        class:border-none={selectedCategory === category}
                        class:border-grey-light={selectedCategory !== category && $theme === "light"}
                        class:border-grey-dark={selectedCategory !== category && $theme === "dark"}
                        class:text-grey-light={selectedCategory !== category && $theme === "light"}
                        class:text-grey-dark={selectedCategory !== category && $theme === "dark"}
                >
                    {category}
                </button>
            {/each}
        </div>
    </div>

    <div class="gallery-grid px-6 md:px-20 lg:px-36 xl:px-[200px] pt-5">
        {#each filterGallery() as item, index}
            <div class="gallery-item relative">
                {#if !imagesLoaded[index]}
                    <div class="absolute inset-0 bg-grey-light dark:bg-grey-dark animate-pulse"></div>
                {/if}
                <img
                        src={item.image}
                        alt={item.title}
                        class="gallery-image"
                        on:load={() => handleImageLoad(index)}
                        class:opacity-0={!imagesLoaded[index]}
                        class:opacity-100={imagesLoaded[index]} transition-opacity duration-500
                />
                <div class="gallery-overlay">
                    <h3 class="font-secondary text-sm md:text-xl">{item.title}</h3>
                    <div class="date-info">
                        <i class="fas fa-calendar-alt text-[12px] sm:text-sm"></i>
                        <span class="font-secondary text-[12px] sm:text-sm">{formatDate(item.date)}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .gallery-grid {
        column-count: 3;
        padding-bottom: 100px;
    }

    .gallery-item {
        display: inline-block;
        width: 100%;
        overflow: hidden;
        position: relative;
        break-inside: avoid;
        transition: transform 0.3s ease-in-out;
        margin-bottom: 10px;
    }

    .gallery-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        border-radius: 8px;
    }

    .gallery-item:hover .gallery-image {
        transform: scale(1.05);
    }

    .gallery-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: background 0.3s ease-in-out, opacity 0.3s ease-in-out;
        color: white;
        text-align: center;
        font-weight: bold;
    }

    .gallery-item:hover .gallery-overlay {
        background: rgba(0, 0, 0, 0.3);
        opacity: 1;
    }

    .date-info {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        margin-top: 5px;
    }

    @media (max-width: 1024px) {
        .gallery-grid {
            column-count: 2;
        }
    }

    @media (max-width: 640px) {
        .gallery-grid {
            column-count: 2;
            padding: 0 16px;
        }

        .gallery-item {
            margin-bottom: 8px;
        }
    }
</style>