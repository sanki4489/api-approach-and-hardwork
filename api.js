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


// import { defineComponent } from '@nuxtjs/composition-api'
// import { getContent } from '@/utils/frameCamera'
// import axios from 'axios'

// Solution 1
// export default {
//   async asyncData() {
//     const iframesrc = document.getElementById('iframesrc')
//     const { content } = await getContent(
//       `https://api-dev.conecame.com/v1/view/18`
//     )
//     iframesrc?.contentWindow.document.open()
//     iframesrc?.contentWindow.document.write(content)
//     iframesrc?.contentWindow.document.close()
//   },
// }
// Solution 2

// axios.defaults.headers.common['content-type'] = 'application/json'
// async function getSrc() {
//   const token =
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTFhYTlkOGI4ODA0NjdmNDA4ZGJiMWYxZjViMDg4YmI5NzhlZjU2MWFlNTllMDkxYzQ1YTBlZWVkM2RiMzk3MGE4NmZhMjQwZTYxNzdlZWIiLCJpYXQiOjE2NjU1MzI4MTQuNzEwMzQsIm5iZiI6MTY2NTUzMjgxNC43MTAzNDYsImV4cCI6MTY2NTYxOTIxNC41NzcwNzEsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.iMBcrB8th45QDzMJpIgpcoeA_sa3DY8ZCY1ycTblgxw2gYQD8DoMBuuxSwHQI5JnsL-VqS4FyCmfCrS3m4M4yeLFOARzKUMwPFvgwOUQ6H8sIOv6GxYMxIiaYmYg6I1WsVVZzaryS12bUjbIT-Y8DGfqipfY2-DUuHYZK5Xe0izXyGV9UXPXNg2LxVU7c7ToP2CBHZ9dUePmjFL7vHt3hIEqYrr5zb8y3YC3jQEhHv3CQrGMg2CeTXywdGwTJui4lZxhsL3J1cBh5HRlz2pb3UEijiV36I81pC12GPJamUfEoF1vBxi2Y8zSx9TKYj_XoDcJs1EsH-g3yMVACrcVbwWxxVNELAG-fERFhPHdEPkyV-AWu-hAMJdGcCRE48hQvxD8MB0hj671uhS5FK725QVfJwVC6c8dkzgub_Q3yuZ34sJkHfwBf7J2Wjrc7wz2m-uj5axvEXPqyUkF6fv6I9NRaS2NN1FJz5BiecDFKe9fJ9j6TuTjLgOZsLwOVT-dZMWEmliT1AxbZ-zXo36bt2wNHsimQTRzhIL6JgHSvZrRxEcdmWIUgUwEyDbtOzHbhiDEaowSqIas6h4VFFtJYzru39DbNua4CE47za0PGfA8j1KCGXzf12wGCdYYHxHOvNE8V_8Zrimk4mCIkWmmfQDlyUhq-xzTpN53yzoBaEs'
//   const res = await axios('https://api-dev.conecame.com/v1/view/18', {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   const blob = await res.blob()
//   const urlObject = URL.createObjectURL(blob)
//   document.querySelector('iframe').setAttribute('src', urlObject)
// }
// getSrc()

// Solution 3

// export default {
//   async asyncdata() {
//     try {
//       // const content =
//       //   document.getElementById('iframesrc').contentWindow.document
//       const api = 'https://api-dev.conecame.com/v1/view/18'
//       const token =
//         'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTFhYTlkOGI4ODA0NjdmNDA4ZGJiMWYxZjViMDg4YmI5NzhlZjU2MWFlNTllMDkxYzQ1YTBlZWVkM2RiMzk3MGE4NmZhMjQwZTYxNzdlZWIiLCJpYXQiOjE2NjU1MzI4MTQuNzEwMzQsIm5iZiI6MTY2NTUzMjgxNC43MTAzNDYsImV4cCI6MTY2NTYxOTIxNC41NzcwNzEsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.iMBcrB8th45QDzMJpIgpcoeA_sa3DY8ZCY1ycTblgxw2gYQD8DoMBuuxSwHQI5JnsL-VqS4FyCmfCrS3m4M4yeLFOARzKUMwPFvgwOUQ6H8sIOv6GxYMxIiaYmYg6I1WsVVZzaryS12bUjbIT-Y8DGfqipfY2-DUuHYZK5Xe0izXyGV9UXPXNg2LxVU7c7ToP2CBHZ9dUePmjFL7vHt3hIEqYrr5zb8y3YC3jQEhHv3CQrGMg2CeTXywdGwTJui4lZxhsL3J1cBh5HRlz2pb3UEijiV36I81pC12GPJamUfEoF1vBxi2Y8zSx9TKYj_XoDcJs1EsH-g3yMVACrcVbwWxxVNELAG-fERFhPHdEPkyV-AWu-hAMJdGcCRE48hQvxD8MB0hj671uhS5FK725QVfJwVC6c8dkzgub_Q3yuZ34sJkHfwBf7J2Wjrc7wz2m-uj5axvEXPqyUkF6fv6I9NRaS2NN1FJz5BiecDFKe9fJ9j6TuTjLgOZsLwOVT-dZMWEmliT1AxbZ-zXo36bt2wNHsimQTRzhIL6JgHSvZrRxEcdmWIUgUwEyDbtOzHbhiDEaowSqIas6h4VFFtJYzru39DbNua4CE47za0PGfA8j1KCGXzf12wGCdYYHxHOvNE8V_8Zrimk4mCIkWmmfQDlyUhq-xzTpN53yzoBaEs'
//       const material = await axios
//         .get(api, { headers: { Authorization: `Bearer ${token}` } })
//         .response((response) => {
//           // eslint-disable-next-line no-console
//           console.log(response.data)
//         })
//       return { material }
//       // const blob = await material.blob()
//       // const urlObject = URL.createObjectURL(blob)
//       // content.open()
//       // content.write(urlObject)
//       // content.close()
//     } catch (error) {
//       return { error }
//     }
//   },
// }
