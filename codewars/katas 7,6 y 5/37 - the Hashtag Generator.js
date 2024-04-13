function generateHashtag(str) {
    const hashtag = str.split(' ')
        .filter(e => e !== ' ')
        .map(e => e.charAt(0).toUpperCase() + e.slice(1))
        .join('');


    return  hashtag.length <= 139 && hashtag.length !== 0 
            ? '#' + hashtag 
            : false;
}