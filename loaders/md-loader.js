const marked = require('marked')

function markdownLoader(source){
  const options = this.getOptions();
  const html = marked.parse(source,options)
  return JSON.stringify(html);
}

module.exports = markdownLoader