const getPrevParams = () => {
    if (typeof window !== 'undefined') {
        return window.location.search;
    } else {
        return '';
    }
}

export default getPrevParams;