import HelloWorld from "../components/HelloWorld.vue"
import HomePage from "../components/HomePage.vue"

let routes = [
    {path : "/hello", component : HelloWorld},
    {path : "/", component : HomePage}
]

export default routes