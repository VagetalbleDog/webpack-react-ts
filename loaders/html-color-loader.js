function htmlColorLoader(source){

  const options = this.getOptions();
  const html = source.replace('hello',`<span> hello ${options.text}</span>`)
  const code = `module.exports = ${html}`
  return code
}

module.exports = htmlColorLoader;