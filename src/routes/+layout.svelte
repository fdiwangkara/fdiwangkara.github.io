<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Loading from "$lib/components/Loading.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Loading />
<Navbar />
<slot />
<Footer />
