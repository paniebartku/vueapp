<template>
  <div class="wrapper">
    <div class="search">
        <label for="search">Search</label>
        <input name="search" id="search" v-model="searchValue" @input="handleInput"/>
        
        <h1>Search</h1>
    </div>
    <ul>
        <li v-for="item in results" key="item.data[0].nasa_id">
            <p>{{ item.data[0].description }}</p>
        </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import debounce from 'lodash.debounce';
const API = 'https://images-api.nasa.gov';

export default {
  name: 'Search',
  data(){
      return {
          searchValue: '',
          results: [],
      }
  },
  methods: {
      handleInput: debounce(function() {

           axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
           .then((response) => {
               this.results = response.data.collection.items;
           })
           .catch((error)=> {
               console.log(error);
           })
           
     
        }, 500),
      },

};
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin:0;
        padding: 20px;
        width: 100%;
    }
    .search  {
        display: flex;
        flex-direction: column;
        width:25%;
    }
    label {
        font-family: 'Raleway', sans-serif;
    }
    input {
        height: 30px;
        border:0;
        border-bottom: 1px solid grey;

    }
</style>