<template>
    <tr>
        <td>{{orderNumber}}</td>
        <td>{{studentsName}}</td>
    </tr>
</template>

<script>
    export default {
        name: "StudentsRow",

        props: {
            orderNumber: {
                type: Number                
            },
            studentsName:{
                type:String
            }

        }
        
    }
</script>

<style lang="css" scoped>
table, td, th{
    border:2px solid black
}
</style>