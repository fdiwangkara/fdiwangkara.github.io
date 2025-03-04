<script>
    import { onMount } from "svelte";
    import { theme } from "$lib/stores/theme.js";

    let scrolled = false;
    let isMenuOpen = false;

    onMount(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
        systemTheme.addEventListener('change', (event) => {
            theme.set(event.matches ? 'dark' : 'light');
        });

        window.addEventListener("scroll", () => {
            scrolled = window.scrollY > 50;
        });
    });

    $: isDark = $theme === "dark";
    $: logoSrc = isDark ? "/assets/icons/logo_dark.svg" : "/assets/icons/logo_light.svg";
    $: hamburgerSrc = isDark ? "/assets/icons/hamburger_dark.svg" : "/assets/icons/hamburger_light.svg";
    $: closeSrc = isDark ? "/assets/icons/close_dark.svg" : "/assets/icons/close_dark.svg";
</script>
<nav class={`fixed z-50 top-0 left-0 w-full py-2 px-8 backdrop-blur-md transition-all duration-300
    hidden md:flex items-center justify-between
    ${isDark ? 'bg-bg-dark text-text-dark border-text-dark' : 'bg-bg-light text-text-light border-text-light'}
    border-b ${scrolled ? 'scrolled top-0' : 'top-[25px]'}`}>
    <div class="container mx-auto flex items-center justify-center">
        <ul class="flex space-x-10 text-sm font-secondary font-normal">
            <li><a href="/about" class="relative group font-secondary">
                #ABOUT
                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-1/2"></span>
            </a></li>
            <li><a href="/gallery" class="relative group font-secondary">
                #GALLERY
                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-1/2"></span>
            </a></li>
        </ul>
        <a href="/" class="mx-10">
            <img src={logoSrc} alt="Filemon Logo" class="h-6">
        </a>
        <ul class="flex space-x-10 text-sm font-secondary">
            <li><a href="#proyek" class="relative group font-secondary">
                #PROJECTS
                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-1/2"></span>
            </a></li>
            <li><a href="#kontak" class="relative group font-secondary">
                #CONTACT
                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-1/2"></span>
            </a></li>
        </ul>
    </div>
</nav>
<nav class={`fixed z-50 top-0 left-0 w-full py-2 px-8 backdrop-blur-md z-50 transition-all duration-300 flex md:hidden items-center justify-between
    ${isDark ? 'bg-bg-dark text-text-dark border-text-dark' : 'bg-bg-light text-text-light border-text-light'}
    ${scrolled ? 'scrolled top-0 border-b' : 'top-[25px] border-b'}`}>
    <a href="/">
        <img src={logoSrc} alt="Filemon Logo" class="h-6">
    </a>
    <button on:click={() => isMenuOpen = true}>
        <img src={hamburgerSrc} alt="Menu">
    </button>
</nav>
{#if scrolled}
    <div class="fixed top-[calc(100%+1px)] left-0 w-full h-[1px]
        ${isDark ? 'bg-text-dark' : 'bg-text-light'}">
    </div>
{/if}
{#if isMenuOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50" on:click={() => isMenuOpen = false}></div>
    <aside class="fixed top-0 right-0 h-screen w-1/2 bg-bg-dark dark:bg-bg-light text-text-dark dark:text-text-light z-50 shadow-lg
    {isMenuOpen ? 'animate-slideIn' : 'animate-slideOut'}">
        <button on:click={() => isMenuOpen = false} class="absolute top-[35px] left-[-50px]">
            <img src={closeSrc} alt="Close">
        </button>
        <ul class="flex flex-col space-y-6 mt-20 px-6 text-lg font-secondary">
            <li><a href="/about" on:click={() => isMenuOpen = false}>#ABOUT</a></li>
            <li><a href="/gallery" on:click={() => isMenuOpen = false}>#GALLERY</a></li>
            <li><a href="#proyek" on:click={() => isMenuOpen = false}>#PROJECTS</a></li>
            <li><a href="#kontak" on:click={() => isMenuOpen = false}>#CONTACT</a></li>
        </ul>
    </aside>
{/if}
