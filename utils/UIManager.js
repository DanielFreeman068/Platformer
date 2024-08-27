class UIManager {
//blinking menu message using state
    displayBlinkingUIMessage(content, position){
        const message = add([
            text(content, {
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"])//first param shows initial state
        ])
//makes it go from 1 - 0 opacity
        message.onStateEnter("flash-up", async () => {
                await tween(//uses async await to make sure tween is ready before executing
                    message.opacity,
                    0,
                    0.5,
                    (nextOpacityValue) => message.opacity = nextOpacityValue,//constantly updates opacity as it goes from 1 - 0
                    easings.linear//animation type
                )
                message.enterState("flash-down")
        })
//makes it go from 0 - 1 opacity
        message.onStateEnter("flash-down", async () => {
            await tween(//uses async await to make sure tween is ready before executing
                message.opacity,
                1,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,//constantly updates opacity as it goes from 1 - 0
                easings.linear//animation type
            )
            message.enterState("flash-up")
    })
    }
//display all of our menu items
    displayMainMenu() {
        add([
            sprite("forest-background"),
            scale(4)
        ])
        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200),
            scale(8)
        ])
        this.displayBlinkingUIMessage(
            "Press [ Enter ] to Start Game",
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            play("confirm-ui", {speed: 1.5})
            go("controls")
        })
    }
}

export const uiManager = new UIManager()