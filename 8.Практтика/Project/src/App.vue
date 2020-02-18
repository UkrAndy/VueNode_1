<template>
  <div> 
    <hr>
    <h1>Дз1</h1>   
    <currency-viewer currencyName="Долар" :course="24"/>
    <currency-viewer currencyName="Євро" :course="26"/>
    <hr>
    <h1>Дз2</h1>  

    <students-viewer :studentsList="students" />

    <hr>
    <h1>Ще один список</h1>  

    <students-viewer :studentsList="pupils" />
<hr>
        <img :src="imgPath" alt="">

        <hr>
        <products-viewer/>
  </div>
</template>

<script>
import CurrencyViewer from "@/components/CurrencyViewer";
import StudentsViewer from "@/components/StudentsViewer";
import ProductsViewer from "@/components/ProductsViewer";

export default {
  name: "App",
  components: {
    CurrencyViewer,
    StudentsViewer,
    ProductsViewer
  },

  data() {
    return {
      students:["Ivan","Petro","Olga","Vasja"],
      pupils:['1111','aaaaa','dddd']
    };
  },

  computed: {
    imgPath() {
      return require("@/assets/images/notes/_1.jpg")
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
