/*
    * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
    * For example:
    
    * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
    * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    * url = "https://www.cnet.com"                -> domain name = cnet"
    
*/

function domainName(url) {
    const regExURL = /(https?:\/\/)|(www\.)|([a-zA-Z0-9\-]+)/g;
    const urlSplit = url.match(regExURL).filter(str => str !== 'http://' && str !== 'https://' && str !== 'www.');
    console.log(urlSplit)
    return console.log(urlSplit[0]);
}

domainName("http://github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com");
domainName("www.xakep.ru");
domainName("http://google.co.jp");
domainName("http://google.com");