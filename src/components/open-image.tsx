function openImage(event: MouseEvent) {
  event.preventDefault();
  var image = new Image();
  image.src = (event.currentTarget as HTMLAnchorElement).getAttribute(
    'href'
  ) as string;
  image.onload = function () {
    var newWindow = window.open('', '_blank') as Window;
    if (newWindow) {
      var html =
        "<html><body><img src='" +
        image.src +
        "' alt='Full-size image' style='width:100%;height:auto;'></body></html>";
      var body = newWindow.document.body;
      var div = document.createElement('div');
      div.innerHTML = html;
      body.appendChild(div);
      newWindow.document.close();
      newWindow.focus();
    }
  };
}
export { openImage };
