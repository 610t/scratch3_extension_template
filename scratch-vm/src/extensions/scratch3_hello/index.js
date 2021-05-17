const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');

class Scratch3Hello {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'hello',
            name: 'Hello',
            blocks: [
                {
                    opcode: 'alert', // <-- (1)
                    blockType: BlockType.COMMAND, // <-- (2)
                    text: 'alert [TEXT]', // <-- (3)
                    arguments: { // <-- (4)
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "hello"
                        }
                    }
                },
                {
                    opcode: 'alert_more', // <-- (1)
                    blockType: BlockType.COMMAND, // <-- (2)
                    text: 'more alert [TEXT]', // <-- (3)
                    arguments: { // <-- (4)
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "mutoh"
                        }
                    }
                }
            ],
            menus: {
            }
        };
    }

    alert (args) { // <-- (5)
        const text = Cast.toString(args.TEXT); // <-- (6)
        alert(text); // <-- (7)
    }
    alert_more (args) { // <-- (5)
        const text = Cast.toString(args.TEXT); // <-- (6)
        alert("More "+text); // <-- (7)
    }
}

module.exports = Scratch3Hello;
