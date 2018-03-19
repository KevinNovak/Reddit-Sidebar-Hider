var style = document.createElement('style');
style.id = 'reddit-sidebar-hider';
style.type = 'text/css';

chrome.storage.sync.get(['hideByDefault'], (result) => {
    document.head.appendChild(style);
    hideSidebar(result.hideByDefault);
});

function hideSidebar(shouldHide) {
    if (shouldHide) {
        style.sheet.insertRule('.side{display:none;}', 0);
    } else {
        // Unhide
    }
}