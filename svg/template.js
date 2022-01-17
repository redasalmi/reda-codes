function svgTemplate({ imports, componentName, props, jsx, exports }, { tpl }) {
  return tpl`
    ${imports}

    function ${componentName}(${props}) {
      return (
        ${jsx}
      );
    }

    ${exports}
  `;
}

module.exports = svgTemplate;
