'use client'

const Email = () => {
  const array = ['jf', 'g#1', '63.c', 'om']
  return (
    <span>
      {array.join('').replace('#', '@')}
    </span>
  )
}

export default Email
