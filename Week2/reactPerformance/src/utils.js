const throttle = (func, options) => {
    let timeout = null;
    const wait = options.wait || 200;

    return (...args) => {
        if (!timeout) {
            timeout = setTimeout(() => {
                func(...args);
                timeout = null;
            }, wait);
        }
    };
};

const debounce = (func, options) => {
    let timeout = null;
    const wait = options.wait || 200;

    return (...args) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func(...args);
            timeout = null;
        }, wait);
    };
};


export {throttle, debounce};