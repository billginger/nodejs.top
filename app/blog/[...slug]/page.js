import { getPostBySlug } from '/lib/posts'
import Category from '../../components/category'

const Post = async ({ params }) => {
  const { slug } = params
  const { title, category, body } = await getPostBySlug(slug)
  const date = slug[0]
  const content = body.replace(/<a href="http/g, '<a target="_blank" href="http')
  return (
    <>
      <h1 className="text-2xl text-center font-[MarcellusSC]">{title}</h1>
      <div className="text-sm text-center text-neutral-500 my-2">
        <Category>{category}</Category> / {date}
      </div>
      <div className="my-8" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default Post
