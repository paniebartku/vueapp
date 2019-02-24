<template>
    <div class="heroImage" />
</template>
<script>
export default {
    name: 'HeroImage'
}
</script>

<style lang="scss">
.heroImage{
    width: 100%;
    height: 100vh;
    position: fixed;
    top:0;
    z-index: -1;
    background-image: url('../assets/mainImage.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.heroImage::after {
    content:'';
    background: rgba(0,0,0, 0.3);
    position: absolute;
    top:0;
    left:0;
    z-index:1;
    width:100%;
    height: 100vh;
}

</style>