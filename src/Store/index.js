import { createStore } from "redux";

const INITIAL_STATE = [
    {
        name: "Audi",
        url: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        name: "Mercedes",
        url: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        name: "Ferrari",
        url: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
]

function reducer(store = INITIAL_STATE, action){
    return store
}

export default createStore(reducer)