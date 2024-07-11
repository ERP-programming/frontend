  async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
  }
  
  async function importTopbar() {
    const topbarHtml = await fetchHtmlAsText('../components/topbar.html');
    document.getElementById('topbar-placeholder').innerHTML = topbarHtml;
  }
  
  function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
      tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    importTopbar();
  });
  