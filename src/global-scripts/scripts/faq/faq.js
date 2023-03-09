/// Sample js file for demo purposes
/// Remember to always export your functions
/// so that they can be used in other files

export default function faq(element) {
  element.forEach(event => {
    event.addEventListener('click', function () {

      if (event.classList.contains('faq__active')) {
        close(event)
        window.addEventListener('resize', function () {
          setHeight(event)
        })

      } else {
        element.forEach(item => {
          if (item.classList.contains('faq__active')) {
            close(item)
          }
        })
        event.classList.add("faq__active");
        event.children[0].children[1].src = '../../public/images/minus.png'
        setHeight(event)
      }
    })
  })
}

function setHeight(element) {
  element.children[1].style.height = element.children[1].scrollHeight + 'px'
}

function close(element) {
  element.classList.remove("faq__active");
  element.children[1].style.height = 0
  element.children[0].children[1].src = '../../../public/images/plus.png'
}