<template>
  <div class="app">
  

    <div :class="[{flexStart: step === 1}, 'wrapper']">
         <transition name="slide" v-if="step === 1">
            <img src="./assets/logo.png" class="logo"/>
        </transition>
        <transition name="fade">
            <HeroImage v-if="step === 0"  />
        </transition>
        
        <Claim v-if="step === 0" />
        <SearchInput :value="searchValue" v-model="searchValue" @input="handleInput" :dark="step === 1" />
        <div class="results" v-if="results && !loading && step === 1" >
            <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id" @click.native="handleModalOpen(item)" />
        </div>
         <div class="loader" v-if="step === 1 && loading" />
        <Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false" />
    </div>



  </div>
</template>

<script>
// @ is an alias to /src
import HeroImage from '@/components/HeroImage';
import Claim from '@/components/Claim';
import SearchInput from '@/components/SearchInput';
import Item from '@/components/Item';
import Modal from '@/components/Modal';
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov';

export default {
  name: 'App',
  components: { Claim, SearchInput, HeroImage, Item, Modal},
  data(){
      return {
          modalOpen: false,
            modalItem: null,
          loading: false,
          step: 0,
          searchValue: '',
          results: [],
      }
  },
  methods: {
     handleModalOpen(item) {
      this.modalOpen = true;
      this.modalItem = item;
    },
      handleInput: debounce(function() {
      this.loading = true;
           axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
           .then((response) => {
               this.results = response.data.collection.items;
                 this.loading = false;
                  this.step = 1;
           })
           .catch((error)=> {
               console.log(error);
           })
           
     
        }, 500),
      },

};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');
*, *::after, *::before {box-sizing: border-box; }
body{
  font-family: 'Raleway', sans-serif;
  margin:0;
  padding:0;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper{
    position: relative;
    margin:0;
    width:100%;
    min-height: 100vh;
    justify-content: center;
    padding:2rem;
    display:flex;
    flex-direction:column;
    align-items:center;

    &.flexStart {
        justify-content: flex-start;
    }
 
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.slide-enter-active, .slide-leave-active {
    transition: margin-top .4s ease;
}

.slide-enter, .slide-leave-to {
   margin-top:-50px;
}

.logo {
    position: absolute;
    top:   2.5rem;
}

.results {
   margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media(min-width:768px){
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.loader {
  margin-top: 100px;
  display: inline-block;
  width: 64px;
  height: 64px;
  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
}
.loader:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #1e3d4a;
  border-color: #1e3d4a transparent #1e3d4a transparent;
  animation: loading 1.2s linear infinite;
  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
