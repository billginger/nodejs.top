const Category = ({ children }) => {
  let colorBlock = 'bg-[#9ed]'
  switch(children) {
    case '随笔':
      colorBlock = 'bg-[#cf9]'
      break
    case '软件':
      colorBlock = 'bg-[#ff9]'
      break
    case '编程':
      colorBlock = 'bg-[#fc9]'
      break
    case '网络':
      colorBlock = 'bg-[#afa]'
      break
    case '游戏':
      colorBlock = 'bg-[#fcc]'
      break
    case '影视':
      colorBlock = 'bg-[#ccf]'
      break
  }
  colorBlock += ' w-8 h-2.5 absolute -right-0.5 bottom-0'
  return (
    <span className="relative">
      <div className={colorBlock} />
      <span className="relative">{children}</span>
    </span>
  )
}

export default Category
