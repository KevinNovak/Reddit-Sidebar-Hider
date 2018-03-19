var rules = [
    '.side{display:none;}',
    '.listing-chooser{display:none;}',
    'body.with-listing-chooser>.content{margin-left:5px;}'
];

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

function insertRules(rules) {
    for (rule of rules) {
        insertRule(rule);
    }
}

function deleteAllRules() {
    for (var i = 0; i < rules.length; i++) {
        style.sheet.deleteRule(0);
    }
}

function hideSidebar() {
    insertRules(rules);
}

function showSidebar() {
    deleteAllRules();
}