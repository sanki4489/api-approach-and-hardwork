const api = 'link'
const token =`none`
console.log('hello')
fetch(api, {
    headers: {
      'Content-Type': `application/json`,  
      Authorization: `Bearer ${token}`
    }
})
  .then(res => res.text())
  .then(data => {
    content = document.getElementById('iframesrc').contentWindow.document
    content.open()
    content.write(data)
    content.close()
  })
//   .catch(error => console.log('Error'))
