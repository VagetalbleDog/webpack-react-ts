const {statSync} = require('fs');
const {resolve} = require('path');

class BundleSizePlugin{

  constructor(options) {
    this.options = options; // {limit:3}
  }

  apply = (compiler)=>{
    const {limit} = this.options;
    compiler.hooks.done.tap('BundleSizePlugin',(stats)=>{
      const {path} = stats.compilation.outputOptions;
      const bundlePath = resolve(path);
      const {size} = statSync(bundlePath);

      console.log(`BundleSizePlugin 输出 ${bundlePath} 大小为 ${size},限制为 ${limit}`)
    })
  }
}

module.exports = BundleSizePlugin;