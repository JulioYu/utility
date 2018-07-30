class Utility {
    static clone(obj: any) {
        if (obj === null || typeof (obj) !== 'object') return obj;

        var temp = new obj.constructor();

        if(obj instanceof Set) {
            for (let key of obj.keys()) temp.add(key);
        }
        else {
            for (let key in obj) temp[key] = Utility.clone(obj[key]);
        }

        return temp;
    }
    static generateUUID() {
        let d = Date.now();

        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    static isEquivalent(a, b) {
        if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
            const aProps = Object.getOwnPropertyNames(a);
            const bProps = Object.getOwnPropertyNames(b);

            if (aProps.length !== bProps.length) {
                return false;
            }

            for (let i = 0; i < aProps.length; i += 1) {
                const propName = aProps[i];

                if (typeof a[propName] === 'object') {
                    if (!Utility.isEquivalent(a[propName], b[propName])) return false;
                }
                else if (a[propName] !== b[propName]) return false;
            }

            for (let i = 0; i < bProps.length; i += 1) {
                const propName = bProps[i];

                if (typeof a[propName] === 'object') {
                    if (!Utility.isEquivalent(a[propName], b[propName])) return false;
                }
                else if (a[propName] !== b[propName]) return false;
            }
        }
        else if (a !== b) return false;

        return true;
    }
}

export default Utility;
