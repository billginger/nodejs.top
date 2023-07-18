import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

const getPosts = () => {
  let categories = []
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const date = id.slice(0, 10)
    const name = id.slice(11)
    const dateDay = date.slice(8)
    const dateMonth = new Date(date).toLocaleString('en-US', { month: 'long' }).toUpperCase()
    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
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
      id,
      date,
      name,
      dateDay,
      dateMonth,
      ...data,
      summary,
      wordsLeft
    }
  })
  return { posts, categories }
}

export const getSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const date = id.slice(0, 10)
    const name = id.slice(11)
    return { slug: [date, name] }
  })
}

export const getPostBySlug = async (slug) => {
  const filename = slug.join('-') + '.md'
  const filePath = path.join(postsDirectory, filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const post = matter(fileContents)
  const result = await remark().use(html).process(post.content)
  const content = result.toString()
  return {
    ...post.data,
    content
  }
}

export default getPosts
