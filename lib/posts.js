import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

const getPosts = () => {
  let categories = []
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const date = id.slice(0, 10)
    const slug = id.slice(11)
    const dateDay = date.slice(8)
    const dateMonth = new Date(date).toLocaleString('en-US', { month: 'long' }).toUpperCase()
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const summary = content.split('\n')[1]
    const wordsLeft = content.replace(/\n/g, '').length - summary.length
    const { category } = data
    const index = categories.findIndex(item => item.category == category)
    if (index == -1) {
      categories.push({
        name: category,
        amount: 1
      })
    } else {
      categories[index].amount++
    }
    return {
      date,
      slug,
      dateDay,
      dateMonth,
      ...data,
      summary,
      wordsLeft
    }
  })
  return { posts, categories }
}

export default getPosts
