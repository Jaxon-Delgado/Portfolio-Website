function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
      /* clipboard successfully set */
    }, () => {
      /* clipboard write failed */
    });
}