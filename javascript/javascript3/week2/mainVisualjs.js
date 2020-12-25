async function translateOneByOne() {
    try {
        await moveElement(document.querySelector('ul.marks li:nth-child(1)'), { x: (20 - parseInt(document.querySelector('ul.marks li:nth-child(1)').style.left)), y: (300 - parseInt(document.querySelector('ul.marks li:nth-child(1)').style.top)) })
        console.log("Red target element has been moved");

        await moveElement(document.querySelector('ul.marks li:nth-child(2)'), { x: (400 - parseInt(document.querySelector('ul.marks li:nth-child(2)').style.left)), y: (300 - parseInt(document.querySelector('ul.marks li:nth-child(2)').style.top)) })
        console.log("Blue target element has been moved");

        await moveElement(document.querySelector('ul.marks li:nth-child(3)'), { x: (400 - parseInt(document.querySelector('ul.marks li:nth-child(3)').style.left)), y: (20 - parseInt(document.querySelector('ul.marks li:nth-child(3)').style.top)) })
        console.log("Green target element has been moved");
    } catch (err) {
        console.error(err);
    }
}

translateOneByOne();


async function translateAllAtOnce() {
    try {
        await Promise.all([moveElement(document.querySelector('ul.marks li:nth-child(1)'), { x: (20 - parseInt(document.querySelector('ul.marks li:nth-child(1)').style.left)), y: (300 - parseInt(document.querySelector('ul.marks li:nth-child(1)').style.top)) }), moveElement(document.querySelector('ul.marks li:nth-child(2)'), { x: (400 - parseInt(document.querySelector('ul.marks li:nth-child(2)').style.left)), y: (300 - parseInt(document.querySelector('ul.marks li:nth-child(2)').style.top)) }), moveElement(document.querySelector('ul.marks li:nth-child(3)'), { x: (400 - parseInt(document.querySelector('ul.marks li:nth-child(3)').style.left)), y: (20 - parseInt(document.querySelector('ul.marks li:nth-child(3)').style.top)) })]);
        console.log("All three color element have been moved");
    } catch (err) {
        console.error(err);
    }

}
translateAllAtOnce();

