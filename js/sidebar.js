var rules = [
    {
        selector: '.side',
        properties: [
            'display:none'
        ]
    },
    {
        selector: '.listing-chooser',
        properties: [
            'display:none'
        ]
    },
    {
        selector: 'body.with-listing-chooser>.content',
        properties: [
            'margin-left:5px'
        ]
    },
    {
        selector: 'body.listing-page[class]>.content,body[class]>.content',
        properties: [
            'margin-right:16px'
        ]
    },
    {
        selector: '.linklisting .link',
        properties: [
            'margin-right:0px'
        ]
    },
    {
        selector: '.sitetable',
        properties: [
            'margin-right:0px'
        ]
    },
    {
        selector: 'div#siteTable.sitetable.linklisting',
        properties: [
            'padding-right:0px'
        ]
    }
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

function insertRules(rules) {
    for (cssClass of rules) {
        for (property of cssClass.properties) {
            var rule = `${cssClass.selector}{${property}!important;}`;
            style.sheet.insertRule(rule, style.sheet.cssRules.length);
        }
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