<script>
    import { onMount } from "svelte";
    import { gallery } from "$lib/data/gallery.js";
    import gsap from "gsap";

    let imagesLoaded = {};

    function handleImageLoad(index) {
        imagesLoaded = { ...imagesLoaded, [index]: true };
    }

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return date.toLocaleDateString("en-GB", options);
    }

</script>

<svelte:head>
    <title>fdiwangkara - Gallery</title>
</svelte:head>

<div class="min-h-screen flex flex-col justify-start bg-bg-light dark:bg-bg-dark transition-all duration-300">
    <div class="px-10 md:px-20 lg:px-36 xl:px-[200px] pt-[100px]">
        <h1 class="font-primary text-center text-xl md:text-4xl text-primary-light dark:text-primary-dark">
            GallerY
        </h1>
    </div>

    <div class="gallery-grid px-10 md:px-20 lg:px-36 xl:px-[200px] pt-10">
        {#each gallery as item, index}
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
                        class:opacity-100={imagesLoaded[index]}
                        transition-opacity duration-500
                />
                <div class="gallery-overlay">
                    <h3 class="font-secondary text-lg md:text-xl">{item.title}</h3>
                    <div class="date-info">
                        <i class="fas fa-calendar-alt text-sm"></i>
                        <span>{formatDate(item.date)}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .gallery-grid {
        column-count: 3;
        column-gap: 6px;
        padding-bottom: 100px;
    }

    .gallery-item {
        display: inline-block;
        width: 100%;
        overflow: hidden;
        position: relative;
        break-inside: avoid;
        transition: transform 0.3s ease-in-out;
    }

    .gallery-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
    }

    .gallery-item:hover .gallery-image {
        transform: scale(1.1);
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
        background: rgba(0, 0, 0, 0.25);
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
            column-count: 1;
        }
    }
</style>
