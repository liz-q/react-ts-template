import _ from 'lodash'
import './style.css'
import icon from './icon.png'
import './iconfont/iconfont.css'
import data from './data.xml'

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  const myIcon = new Image();
  myIcon.src = icon
  element.appendChild(myIcon);

  const i = document.createElement('i')
  i.classList.add('iconfont')
  i.classList.add('iconzirenwu')
  element.appendChild(i)

  console.log(data)

  return element;
}

document.body.appendChild(component());
