<template>
    <div>
        <label >
        Пошук імені: 
        <input type="text" v-model="serchName">
        </label> <br>
        <table>
            <students-row 
            v-for="(student,index) in filteredStudList"
            :key="index"
            :orderNumber="index+1"
            :studentsName="student"
            />
        </table>
    </div>
</template>

<script>
import StudentsRow from "./c/StudentsRow";
    export default {
        name:"StudentsViewer",
        components: {
            StudentsRow
        },

        props: {
            studentsList:{
                type:Array,
                default: ()=>{}
            }              
        },

        data() {
            return {
                serchName:null
            }
        },

        computed: {
            filteredStudList() {
                if(this.serchName)
                  return this.studentsList.filter(stud=>stud.startsWith(this.serchName))
                else
                return this.studentsList
            }
        },

    }
</script>

<style lang="css" scoped>
table, td, th{
    border:2px solid black
}
</style>