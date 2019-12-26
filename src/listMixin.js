export default {

    data() {
        return {
            searchName: '',
            names: ['Vald', 'max','Elena', 'Igor']
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter(name=>{
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
            })
        }
    }
}
