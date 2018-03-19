// Grab the default value and process it
chrome.storage.sync.get(['hideByDefault'], (result) => {
    var shouldHide = result.hideByDefault ? true : false;
    hideSidebar(shouldHide);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    hideSidebar(message.shouldHide);
});

function hideSidebar(shouldHide) {
    var sides = document.getElementsByClassName('side');

    if (shouldHide) {
        for (side of sides) {
            side.style['display'] = 'none';
        }
    } else {
        for (side of sides) {
            side.style['display'] = 'block';
        }
    }
}