const getExtensionFromMimeType = mineType => {
    const list = {
        'image/gif': 'gif',
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp',
    }
    return list[mineType];
}

export { getExtensionFromMimeType }