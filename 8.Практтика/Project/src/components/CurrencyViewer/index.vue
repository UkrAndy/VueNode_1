<template>
    <div>
        <table  class="border">
            <tr>
                <th>Назва валюти</th>
                <th>Курс валюти</th>
            </tr>
            <tr>
                <td>
                    {{currencyName}}
                </td>
                <td>
                    {{course}}
                </td>                
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:"CurrencyViewer",

        props: {
            currencyName: {
                type: String,
               required:true
            },
            course:{
                type:Number,
                required:true
            }
        },
    }
</script>

<style lang="css" scoped>
.border, td, th{
    border: 2px solid black;
}
</style>