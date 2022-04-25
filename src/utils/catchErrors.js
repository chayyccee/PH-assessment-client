export const catchErrors = fn => {
    return function (...args) {
        return fn(...args).catch((err) => {
            console.log(err);
            alert('An error occurred. Check the console.');
        });
    }
}