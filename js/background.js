chrome.browserAction.onClicked.addListener((tab) => {
    toggleSidebar(tab);
});

function toggleSidebar(tab) {
    chrome.storage.sync.get(['hideByDefault'], (result) => {
        // If undefined, default to false
        var shouldHide = result.hideByDefault ? false : true;

        var message = {
            shouldHide
        };

        chrome.tabs.sendMessage(tab.id, message);

        chrome.storage.sync.set({
            hideByDefault: shouldHide
        }, function () {
            console.log('"hideByDefault" set to:', shouldHide);
        });
    });
}