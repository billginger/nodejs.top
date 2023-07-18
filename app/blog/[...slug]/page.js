import { getSlugs, getPostBySlug } from '/lib/posts'
import Category from '../../components/category'

const Post = async ({ params }) => {
  const { slug } = params
  const { title, category, content } = await getPostBySlug(slug)
  const date = slug[0]
  const html = content.replace(/<a href="http/g, '<a target="_blank" href="http')
  return (
    <>
      <h1 className="text-2xl text-center font-[MarcellusSC]">{title}</h1>
      <div className="text-sm text-center text-neutral-500 my-2">
        <Category>{category}</Category> / {date}
      </div>
      <div className="my-8" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params
  const { title } = await getPostBySlug(slug)
  return {
    title: `${title} - Nodejs.top`,
  }
}

export const generateStaticParams = () => getSlugs()

export default Post
