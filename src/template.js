function template(title, initialState = {}, content = "", entryName){
  let scripts = '';
  scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/${entryName}.js"></script>
                `
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/css/${entryName}.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              </html>
              `;

  return page;
}

module.exports = template;