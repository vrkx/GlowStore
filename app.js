const currentVersion = '1.0.0';
const versionElement = document.getElementById('current-version');
const updateMessage = document.getElementById('update-message');

versionElement.textContent = currentVersion;

function checkVersion() {
    fetch('version.json')
        .then(response => response.json())
        .then(data => {
            if (data.version !== currentVersion) {
                updateMessage.textContent = `New version available: ${data.version}. Please refresh to update.`;
            }
        })
        .catch(error => console.error('Error fetching version:', error));
}

checkVersion();
setInterval(checkVersion, 5 * 60 * 1000);