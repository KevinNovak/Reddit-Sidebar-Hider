chrome.browserAction.onClicked.addListener((tab) => {
    var message = {
        shouldHide: true
    };
    // Send this chrome tab a message (or any data)
    chrome.tabs.sendMessage(tab.id, message);
});