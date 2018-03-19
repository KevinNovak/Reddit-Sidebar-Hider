var style = document.createElement('style');
style.id = 'reddit-sidebar-hider';
style.type = 'text/css';

// After loading the default:
chrome.storage.sync.get(['hideByDefault'], (result) => {
    document.head.appendChild(style);
    if (result.hideByDefault) {
        hideSidebar();
    }
});

// When toggle button is pressed:
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.shouldHide) {
        hideSidebar();
    } else {
        showSidebar();
    }
});

function hideSidebar() {
    style.sheet.insertRule('.side{display:none;}', 0);
}

function showSidebar() {
    style.sheet.deleteRule(0);
}