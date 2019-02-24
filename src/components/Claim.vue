<template>
    <div class="claimWrapper">
        <h1 class="claimHeader">Khronos</h1>
        <p class="claimDescription">In the light of a young moon
The cold dark night becomes scary soon
A thorn in my soul your face fade away
Awake like an owl for salvation I pray</p>
        <p class="claimDescription">A thorn in my soul your face fade away
Awake like an owl for salvation I pray</p>
     </div>
</template>


<script>
export default {
  name: 'Claim',
};
</script>


<style lang="scss" scoped>
.claimWrapper {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    color: white;
    width: 70%;
    text-align: center;
}

.claimHeader {
    font-size: 2rem;
    text-transform: uppercase;
    @media(min-width:768px){
        font-size: 5rem;
        letter-spacing: 3px;
    }
}
.claimDescription {
    font-size:1.4rem;
    margin:2rem 0 0 0;
    line-height: 1.4;
    font-weight: 300;
    @media(min-width: 768px){
        font-size: 1.6rem;
    }
}
</style>