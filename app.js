const currentVersion = '1.5.2';
const versionElement = document.getElementById('current-version');
const updateMessage = document.getElementById('update-message');

versionElement.textContent = currentVersion;

function checkVersion() {
    fetch('version.json')
        .then(response => response.json())
        .then(data => {
            if (data.version !== currentVersion) {
                updateMessage.textContent = `Last Version Avaible: ${data.version}.`;
            }
        })
        .catch(error => console.error('Error fetching version:', error));
}

checkVersion();
setInterval(checkVersion, 5 * 60 * 1000);