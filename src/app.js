// document.addEventListener("DOMContentLoaded", function () {
//     var toggle_sidebar = false,
//       toggle_topbar = false,
//       nav_open = 0,
//       topbar_open = 0;
  
//     if (!toggle_sidebar) {
//       var toggle = document.querySelector('.sidenav-toggler');
//       toggle.addEventListener("click", function () {
//         if (nav_open === 1) {
//           document.documentElement.classList.remove('nav_open');
//           toggle.classList.remove('toggled');
//           nav_open = 0;
//         } else {
//           document.documentElement.classList.add('nav_open');
//           toggle.classList.add('toggled');
//           nav_open = 1;
//         }
//       });
//       toggle_sidebar = true;
//     }
  
//     if (!toggle_topbar) {
//       var topbar = document.querySelector('.topbar-toggler');
//       topbar.addEventListener("click", function () {
//         if (topbar_open === 1) {
//           document.documentElement.classList.remove('topbar_open');
//           topbar.classList.remove('toggled');
//           topbar_open = 0;
//         } else {
//           document.documentElement.classList.add('topbar_open');
//           topbar.classList.add('toggled');
//           topbar_open = 1;
//         }
//       });
//       toggle_topbar = true;
//     }
  
//     // Select all checkboxes
//     var checkboxes = document.querySelectorAll('[data-select="checkbox"]');
//     checkboxes.forEach(function (checkbox) {
//       checkbox.addEventListener("change", function () {
//         var target = checkbox.getAttribute('data-target');
//         document.querySelectorAll(target).forEach(function (element) {
//           element.checked = checkbox.checked;
//         });
//       });
//     });
//   });
  