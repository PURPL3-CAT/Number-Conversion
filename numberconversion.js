const NCBlockIconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDguODgwMjkiIGhlaWdodD0iMjA4Ljg4MDI5IiB2aWV3Qm94PSIwLDAsMjA4Ljg4MDI5LDIwOC44ODAyOSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNS41NTk4NSwtNzUuNTU5ODUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIxNS41NTk4NSwxODBjMCwtNTcuNjgwNyA0Ni43NTk0NSwtMTA0LjQ0MDE1IDEwNC40NDAxNSwtMTA0LjQ0MDE1YzU3LjY4MDcsMCAxMDQuNDQwMTUsNDYuNzU5NDUgMTA0LjQ0MDE1LDEwNC40NDAxNWMwLDU3LjY4MDcgLTQ2Ljc1OTQ1LDEwNC40NDAxNSAtMTA0LjQ0MDE1LDEwNC40NDAxNWMtNTcuNjgwNywwIC0xMDQuNDQwMTUsLTQ2Ljc1OTQ1IC0xMDQuNDQwMTUsLTEwNC40NDAxNXoiIGZpbGw9IiMxYTQ3NmIiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0Ni4xMTk3MSwyMTIuMDE4NzUpIHNjYWxlKDIuMzQxODIsMi4zNDE4MikiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtb3BhY2l0eT0iMC41MDE5NiIgZmlsbD0iIzgwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IiZxdW90O01va290byBEZW1vJnF1b3Q7LCBTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjEuMGs8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDEuMTE5NzEsMjA3LjAxODc1KSBzY2FsZSgyLjM0MTgyLDIuMzQxODIpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZmYwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iJnF1b3Q7TW9rb3RvIERlbW8mcXVvdDssIFNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MS4wazwvdHNwYW4+PC90ZXh0PjwvZz48L2c+PC9zdmc+";
class NumberConversion {
    getInfo() {
        return {
            id: 'numberConversion',
            name: 'Number Conversion',
            color1: '#CC444B',
            menuIconURI: NCBlockIconURI,
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
