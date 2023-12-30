import {createStore} from "vuex"

let store = createStore({
    state () {
        return {
            testData : ""
        }
    },
    mutations : {
        changeTestData (state,payload) {
            state.testData = payload
        }
    }
})

export default store