document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  const sideNavOptions = {};
  const sideNavInstances = M.Sidenav.init(elems, sideNavOptions);
  var elems = document.querySelectorAll('.collapsible');
  const collapsibleOptions = {accordion: true};
  const collapsibleInstances = M.Collapsible.init(elems, collapsibleOptions)

  // var targetOffset, currentPosition,
  //     body = document.body,
  //     button = document.getElementById('scrollButton'),
  //     animateTime = 900;

  // function getPageScroll() {
  //   var yScroll;

  //   if (window.pageYOffset) {
  //     yScroll = window.pageYOffset;
  //   } else if (document.documentElement && document.documentElement.scrollTop) {
  //     yScroll = document.documentElement.scrollTop;
  //   } else if (document.body) {
  //     yScroll = document.body.scrollTop;
  //   }
  //   return yScroll;
  // }

  // button.addEventListener('click', function (event) {

  //   targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
  //   currentPosition = getPageScroll();

  //   body.classList.add('in-transition');
  //   body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  //   body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  //   body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

  //   window.setTimeout(function () {
  //     body.classList.remove('in-transition');
  //     body.style.cssText = "";
  //     window.scrollTo(0, targetOffset);
  //   }, animateTime);

  //   event.preventDefault();

  // }, false);
  const contact_form_request=new XMLHttpRequest();
  contact_form_request.open('get','/contact_form.txt');
  contact_form_request.send();
  contact_form_request.onload=function(){document.getElementById('contact').innerHTML=contact_form_request.responseText}
});
