export default {

    products:{
        read:`${process.env.VUE_APP_API_URL}/products`,
        add:`${process.env.VUE_APP_API_URL}/products/add`,
        delete:`${process.env.VUE_APP_API_URL}/products`,
    }

}