const collapsibles = document.querySelectorAll('.collapsible')

collapsibles.forEach((item) => {
  console.log('Item: ', item)
  item.addEventListener('click', () => {
    console.log('clicked')
    item.classList.toggle('collapsible--expanded')
  })
})
