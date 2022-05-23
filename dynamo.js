const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option buttons');

let state = {}

function startGame () {
    state = {}
    showTextNode(1)
}
function showOption(option) {
    return true
}

function selectOption(option){

}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click',() => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

const textNodes = [
    {
        id: 1,
        text: 'You have found the legendary but long-dormant Dynamo! You see a workbench to the West and a staircase leading up to a catwalk. On the ground to the east lies a spyglass.',
        options: [
            {
                text: 'Climb the stairs',
            },
            {
                text: 'Investigate the workbench',
            },
            {
                text: 'Take the spyglass',
                setState: { spyglass: true},
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "You climb the stairs and look down on the dormant Dynamo from the catwalk. You notice that several components are missing. The catwalk wraps around the back of the room and leads up to a loft.",
        options: [
        {
            text: "Examine the Dynamo",
            requiredState: (currentState) => currentState.spyglass,
            setState: {spyglass: true, examinedPieces: true},
            nextText: 3
            },
        {
            text: "Continue along the catwalk",
            nextText: 4
            }
        ]
    }
]


startGame()