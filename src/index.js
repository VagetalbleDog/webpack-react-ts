console.log('hello world')
import avatar from './avatar.png'
import markdown from '../markdown.md'
Image.src = avatar;
console.log(Image.src)
console.log(markdown)
fetch('/api/article').then((res)=>{
    return Promise.resolve(res)
}).then(res=>console.log(res))
