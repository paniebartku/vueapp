<template>
   
    
            
            <input 
         id="search"
    name="search"
   :class="{ dark }"
    :value="value"
@input="handleChange"
            />
    
   
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};

</script>

<style lang="scss" scoped>


    input {
             display: flex;
        flex-direction: column;
        align-items: center;
        margin:7.5rem 0 0 0;
        padding: 20px;
        width: 56vw;
        color:white;
        height: 30px;
        border:0;
        border-bottom: 1px solid white;
        background: none;
        transition: box-shadow .5s ease-out;
        color: white;
        text-align: center;
        font-size: 1.6rem;
        letter-spacing: 2px;
        @media(min-width:768px){
          width:25%;
        }
    }

    input:focus {
        outline:none;
        box-shadow: 0 10px 20px -8px rgba(255,255,255, 0.3);
    }

    .dark {
        color: black;
        border-bottom-color: black;
    }
    
    .dark:focus {
 
        box-shadow: 0 10px 20px -8px rgba(0,0,0, 0.3);
    }
</style>