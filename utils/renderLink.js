function renderLink(link, title) {
  if (link !== '') {
    return `[${
      title.charAt(0).toUpperCase() + title.substring(1).toLowerCase()
    }](#${title.toLowerCase()})`;
  } else {
    return '';
  }
}

module.exports = renderLink;
