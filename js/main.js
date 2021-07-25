fetch('/html/components/Header.html')
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });
  // catch
  fetch('/html/components/Imagebig.html')
  .then(re => {
    return re.text()
  })
  .then(dat => {
    document.querySelector("imagebig").innerHTML = dat;
  });
fetch('/html/components/business.html')
.then(business_body=>{
    return business_body.text()
})
.then(data_business=>{
    document.querySelector("businessareas").innerHTML=data_business
})
fetch('/html/components/Latestnews.html')
.then(newss => {
return newss.text();
})
.then(data_news=>{
  document.querySelector("newsbody").innerHTML=data_news
})
fetch('/html/components/Event.html')
.then(events=>{
  return events.text();
})
.then(event_body=>{
  document.querySelector("eventbody").innerHTML=event_body
})