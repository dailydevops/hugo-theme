(function (d, n) {
  function addCopyButtons(d, c) {
    d.querySelectorAll("pre.chroma > code").forEach(function (cb) {
      var b = d.createElement("button");
      b.className = "copy-code-button";
      b.type = "button";
      b.title = "Copy";
      b.innerHTML = '<i class="fa-solid fa-copy fa-fw"></i>';
      b.addEventListener("click", function () {
        c.writeText(cb.innerText).then(
          function () {
            b.blur();
            b.title = "Copied to clipboard.";
            b.innerHTML = '<i class="fa-solid fa-check fa-fw"></i>';
            setTimeout(function () {
              b.title = "Copy";
              b.innerHTML = '<i class="fa-solid fa-copy fa-fw"></i>';
            }, 4000);
          },
          function () {
            b.title = "It's a feature";
            b.innerHTML = '<i class="fa-solid fa-bug fa-fw"></i>';
          }
        );
      });
      cb.parentNode.insertBefore(b, cb);
    });
  }

  if (n && n.clipboard) {
    addCopyButtons(d, n.clipboard);
  } else {
    var script = d.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/3.0.3/promise/clipboard-polyfill.promise.min.js";
    script.integrity = "sha512-O9Q+AhI1w7LT1/tHysPWDwwrgB1fKJ/nXPNLC30i8LF6RdSz4dGZyWB9WySag3DZMdGuK5yHJEdKXMKI2m5uSQ==";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";
    script.onload = function () {
      addCopyButtons(clipboard);
    };
    d.body.appendChild(script);
  }
})(document, navigator);
