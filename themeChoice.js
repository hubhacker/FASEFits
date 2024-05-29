function changeTheme(theme) {
    const videoElement = document.getElementById('backgroundVideo');
    let videoSource;

    switch (theme) {
        case 'test':
            videoSource = 'testBackground.mp4';
            break;
        case 't2':
            videoSource = 't2Background.mp4';
            break;
        case 't3':
            videoSource = 't3Background.mp4';
            break;
        case 't4':
            videoSource = 't4Background.mp4';
            break;
        default:
            videoSource = 'defaultBackground.mp4';
            break;
    }

    videoElement.querySelector('source').setAttribute('src', videoSource);
    videoElement.load();
    window.location.href = `index.html?theme=${theme}`;
}
