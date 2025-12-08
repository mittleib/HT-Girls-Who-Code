$(function () {
  $(document).scroll(function () {
    var $nav = $(".bar");
    if (window.scrollY > 0) {
      $nav.toggleClass("scrolled", $(this).scrollTop() > 0);
      var $selected = $(".selected");
      $selected.toggleClass("scrolled", $(this).scrollTop() > 0);

    } else if (window.scrollY==0) {
      $nav[0].innerHTML = `<li>
        <a class="logo-link" href="index.html">
          <div class="logo scrolled"></div>
        </a>
      </li>
      <li class="tab">
        <a href="projects.html" class="unselected" style="color: var(--lightyellow);">Project Gallery</a>
      </li>
      <li class="tab">
        <a href="calendar.html" class="selected">Calendar</a>
      </li>
      <li class="tab">
        <a href="tutorials.html" class="unselected" style="color: var(--lightyellow);">Tutorials</a>
      </li>
      <li class="tab"><a href="faqs.html" class="unselected" style="color: var(--lightyellow);">FAQs</a></li>
      <li class="tab"><a href="about.html" class="unselected" style="color: var(--lightyellow);">About</a></li>`;
    }
  });
});
