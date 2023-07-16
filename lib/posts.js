import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')
const fileNames = fs.readdirSync(postsDirectory)

const getPosts = () => (
  fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const date = id.slice(0, 10)
    const slug = id.slice(11)
    const dateDay = date.slice(8)
    const dateObj = new Date(date)
    const dateMonth = dateObj.toLocaleString('en-US', { month: 'long' }).toUpperCase()
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const summary = content.split('\n')[1]
    const wordsLeft = content.replace(/\n/g, '').length - summary.length
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
)

export default getPosts
