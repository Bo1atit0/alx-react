export function getFullYear() {
    const date = new Date();
    const year = date.getFullYear()
    return year;
};

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard'
};

export function getLatestNotifications() {
    return `<strong>Urgent requirement</strong> - complete by EOD`
}