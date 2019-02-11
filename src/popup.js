function enable() {
  chrome.tabs.executeScript({
    code: "document.body.classList.add('github-pr-cleanup-enabled')"
  })
}

function disable() {
  chrome.tabs.executeScript({
    code: "document.body.classList.remove('github-pr-cleanup-enabled')"
  })
}

document.getElementById('enable').addEventListener('click', enable)
document.getElementById('disable').addEventListener('click', disable)
