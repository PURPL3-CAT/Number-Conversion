class NumberConversion {
    getInfo() {
        return {
            id: 'numberConversion',
            name: 'Number Conversion',
            blocks: [{
                    opcode: 'numToShort',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Convert [num] to short form',
                    arguments: {
                        num: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1000
                        }
                    }
                },
                {
                    opcode: 'shortToNum',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Convert [short] to number',
                    arguments: {
                        short: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1k'
                        }
                    }
                },
                {
                    opcode: 'addCommas',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Add commas to [num]',
                    arguments: {
                        num: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1000
                        }
                    }
                },
                {
                    opcode: 'removeCommas',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Remove commas from [numStr]',
                    arguments: {
                        numStr: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1,000'
                        }
                    }
                },
                {
                    opcode: 'numToWords',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Convert [num] to words',
                    arguments: {
                        num: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 500
                        }
                    }
                }
            ]
        };
    }

    numToShort(args) {
        const num = Number(args.num);
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'm';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
        return num.toString();
    }

    shortToNum(args) {
        const short = args.short;
        if (short.endsWith('m')) return Number(short.slice(0, -1)) * 1000000;
        if (short.endsWith('k')) return Number(short.slice(0, -1)) * 1000;
        return Number(short);
    }

    addCommas(args) {
        const num = Number(args.num);
        return num.toLocaleString();
    }

    removeCommas(args) {
        const numStr = args.numStr;
        return Number(numStr.replace(/,/g, ''));
    }

    numToWords(args) {
        const num = Number(args.num);
        return this.convertToWords(num);
    }

    convertToWords(num) {
        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];

        if (num === 0) return 'zero';
        if (num < 0) return 'negative ' + numberToWords(Math.abs(num));

        let word = '';
        let i = 0;

        while (num > 0) {
            if (num % 1000 !== 0) {
                word = helper(num % 1000) + thousands[i] + ' ' + word;
            }
            num = Math.floor(num / 1000);
            i++;
        }

        return word.trim();

        function helper(num) {
            if (num === 0) return '';
            else if (num < 10) return ones[num] + ' ';
            else if (num < 20) return teens[num - 11] + ' ';
            else if (num < 100) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);
            else return ones[Math.floor(num / 100)] + ' hundred ' + helper(num % 100);
        }

    }
}

Scratch.extensions.register(new NumberConversion());
