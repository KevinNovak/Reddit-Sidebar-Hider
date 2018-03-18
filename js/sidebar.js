chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    var sides = document.getElementsByClassName('side');
    if (message.shouldHide) {
        for (side of sides) {
            side.style['display'] = 'none';
        }
    } else {
        for (side of sides) {
            side.removeProperty('display');
        }
    }
});
