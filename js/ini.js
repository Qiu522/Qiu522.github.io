function goPAGE() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      /*window.location.href="你的手机版地址";*/
     return true;
  }
  else {
      /*window.location.href="你的电脑版地址";    */
    return false;
  }
}

if(goPAGE()){
  var html = document.documentElement;
  var hWidth = html.getBoundingClientRect().width;
  html.style.fontSize = hWidth/16 + "px";

  var con = '<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 600px)" href="css/tinyScreen.css" />'
  var link = document.createElement('link');
  
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "css/tinyScreen.css";

  document.head.appendChild(link);
}else{
  var link = document.createElement('link');
  
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "css/index.css";

  document.head.appendChild(link);
}