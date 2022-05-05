kaboom({
    global: true,
    fullscreen : true,
    scale: 1,
    debug: true
});

add([
    pos(24, 24),
    text("Text Test", {
        size: 40, // 48 pixels tall
        width: 600, // it'll wrap to next line when width exceeds this value
        font: "sink", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
    }),
])

// addLevel([
//     "#####################",
//     "!                   !",
//     "!                   !",
//     "!                   !",
//     "!                   !",
//     "!                   !",
//     "!                   !",
//     "!                   !",
//     "#####################",
// ],
//     width: 40,
//     height: 40,
//     "#": () => [
        
//     ]
// );