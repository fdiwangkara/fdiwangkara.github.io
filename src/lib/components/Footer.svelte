<script>
    import { theme } from "$lib/stores/theme.js";

    $: isDark = $theme === "dark";

    $: logoSrc = isDark ? "/assets/icons/logo_light.svg" : "/assets/icons/logo_dark.svg";
</script>

<footer class={`w-full flex flex-col items-center py-6
    ${isDark ? 'bg-bg-light text-text-light' : 'bg-bg-dark text-text-dark'}`}>

    <div class={`relative font-primary text-center text-2xl md:text-4xl px-6 px-[75px] md:px-[200px] lg:px-[400px] pt-8 md:leading-[56px] tracking-wide
             underline decoration-[2px] md:decoration-[4px] underline-offset-[4px]
             ${isDark ? 'decoration-primary-dark' : 'decoration-primary-light'}`}>
        filemon diWangkara Taste of Designing and CreatioN
    </div>
    <div class="w-full flex flex-col md:flex-row justify-between items-start md:items-center mt-[100px] px-10 md:px-[50px] lg:px-[75px] space-y-6 md:space-y-0">
        <div class="flex items-center space-x-2">
            <img src={logoSrc} alt="Logo" class="h-6">
            <span class={`font-secondary text-xl font-bold ${isDark ? 'text-text-light' : 'text-text-dark'}`}>
                fdiwangkara
            </span>
        </div>
        <nav class="flex flex-col md:flex-row md:space-x-10 lg:space-x-20 text-sm font-secondary font-normal text-start md:text-center space-y-3 md:space-y-0">
            <a href="/about" class={`transition-colors duration-300 ${isDark ? 'text-grey-light hover:text-primary-light' : 'text-grey-dark hover:text-primary-dark'}`}>
                #ABOUT
            </a>
            <a href="/gallery" class={`transition-colors duration-300 ${isDark ? 'text-grey-light hover:text-primary-light' : 'text-grey-dark hover:text-primary-dark'}`}>
                #GALLERY
            </a>
            <a href="/projects" class={`transition-colors duration-300 ${isDark ? 'text-grey-light hover:text-primary-light' : 'text-grey-dark hover:text-primary-dark'}`}>
                #PROJECTS
            </a>
            <a href="/contact" class={`transition-colors duration-300 ${isDark ? 'text-grey-light hover:text-primary-light' : 'text-grey-dark hover:text-primary-dark'}`}>
                #CONTACT
            </a>
        </nav>
        <div class="flex space-x-4 text-xl">
            <a href="https://www.linkedin.com/in/filemon-diwangkara-bani-saptaji-21641b297/" target="_blank" rel="noopener noreferrer"
               class={`transition-colors duration-300 ${isDark ? 'text-text-light hover:text-[#0077B5]' : 'text-text-dark hover:text-[#0077B5]'}`}>
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/fdiwangkara" target="_blank" rel="noopener noreferrer"
               class={`transition-all duration-300 ${isDark ? 'text-text-light hover:text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text' : 'text-text-dark hover:text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text'}`}>
                <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:fdiwangkara@yahoo.com?subject=Let's%20make%20projects%20together!" target="_blank" rel="noopener noreferrer"
               class={`transition-colors duration-300 ${isDark ? 'text-text-light hover:text-[#6001D2]' : 'text-text-dark hover:text-[#6001D2]'}`}>
                <i class="fab fa-yahoo"></i>
            </a>
        </div>
    </div>
    <div class="w-full flex justify-center mt-8">
        <div class={`h-[1px] w-full md:max-w-[calc(100%-150px)] mx-10 md:mx-0 ${isDark ? 'bg-grey-light' : 'bg-grey-dark'}`}></div>
    </div>
    <div class="text-[12px] font-secondary mt-8 flex flex-col md:flex-row items-center justify-center text-center space-y-2 md:space-y-0">
        <span>Copyright © 2025 Filemon Diwangkara</span>
        <span class="hidden md:inline mx-2">|</span>
        <span class="flex items-center space-x-1">
        <img src="/assets/icons/svelte.svg" alt="Svelte" class="w-4 h-4">
        <span>Made with Svelte</span>
    </span>
    </div>

</footer>
