class Dog {
    constructor(name, master, options = {}) {
        this.name = name;
        this.master = master;
        this.legsCount = options.legsCount ?? 4;
        this.tail = options.tail ?? true;
        this.furColor = 'black';

        this.print();
    }

    setName(newName) {
        if (typeof newName === 'string' && newName.length > 1) {
            this.name = newName;
        }
    }

    setFurColor(newColor) {
        const colorList = ['black', 'white', 'red'];
        for (const color of colorList) {
            if (color === newColor) {
                this.furColor = newColor;
                break;
            }
        }

        // if (colorList.includes(newColor)) {
        //     this.furColor = newColor;
        //     return true;
        // }

        return false;
    }

    print() {
        console.log(`Hi, my name is ${this.name}, my fur `);
    }
}

export { Dog };