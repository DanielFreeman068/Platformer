// all my imports
import kaboom from "./libs/kaboom.mjs"
import { load } from "./utils/loader.js"
import { uiManager } from "./utils/UIManager.js"
//declares the canvas
kaboom({
    width: 1280,
    height: 720,
    letterbox: true//preserves aspect ratio
})

//grabs from loader.js all my sprite items
load.fonts()
load.sounds()
load.assets()

//object for scenes
const scenes = {
    menu: () => {
        uiManager.displayMainMenu()
    },
    controls: () => {

    },
    // 1: () => {

    // },
    // 2: () => {

    // },
    // 3: () => {

    // },
    // gameover: () => {

    // }
}
//for loop to go through scenes
for(const key in scenes){
    scene(key, scenes[key])//scene is built into kaboom lib
}

go("menu")//initializes menu