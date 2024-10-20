//  var tl = gsap.timeline();

//  tl
//  .to("#loader", {
//     height: 0 ,
//     duration: 2 ,
//     ease: Expo.easeInOut
//  })
//  .to("#green", {
//     height: "100%" ,
//     delay: -2,
//     duration: 2 ,
//     ease: Expo.easeInOut
//  })
//  .to("#white", {
//     height: "100%" ,
//     delay: -1.4,
//     duration: 2 ,
//     ease: Expo.easeInOut
//  })

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");
    // parent and child both set their respective classes
    parent.classList.add("parent");
    child.classList.add("child");
    // span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    // elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

revealToSpan();

var tl = gsap.timeline();

tl.from(".child span", {
  x: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1.4,
  ease: "Power3.easeInOut",
})
  .to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: "Circ.InOut",
  })
  .to("#loader", {
    height: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
  .to("#green", {
    height: "100%",
    delay: -2,
    duration: 2,
    ease: Expo.easeInOut,
  })
  .to("#white", {
    height: "100%",
    delay: -1.4,
    duration: 2,
    ease: Expo.easeInOut,
  });
