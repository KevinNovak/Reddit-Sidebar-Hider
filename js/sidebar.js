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

function insertRule(rule) {
    style.sheet.insertRule(rule, style.sheet.cssRules.length);
}

function deleteAllRules() {
    for (var i = 0; i < 3; i++) {
        style.sheet.deleteRule(0);
    }
}

function hideSidebar() {
    insertRule('.side{display:none;}');
    insertRule('.listing-chooser{display:none;}');
    insertRule('body.with-listing-chooser>.content{margin-left:5px;}');
}

function showSidebar() {
    deleteAllRules();
}