function ajax() {
    return {
        getUsers:() => {
            console.log( "getting users" )
        },
        postUsers: () => {
            console.log( "posting users")
        }
    }
}
export default ajax()