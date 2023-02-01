const timeoutPromise = (ms: number) => {
    return new Promise(resolve => setTimeout(() => {
        var colorsHueRotate = [25, 100, 155, 290];
        resolve(colorsHueRotate[Math.floor(Math.random()*colorsHueRotate.length)])
    }, ms));
}

export const fakeBackendCall = async () => {
    return await timeoutPromise(1000);
}