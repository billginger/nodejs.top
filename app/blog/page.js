import Link from 'next/link'
import getPosts from '/lib/posts'
import PageTitle from '../components/page-title'
import NavCategory from '../components/nav-category'
import Category from '../components/category'
import Pagination from '../components/pagination'

const Blog = () => {
  // TODO: 分页功能，每页10篇
  const { posts, categories } = getPosts()
  return (
    <>
      <PageTitle>Blog List</PageTitle>
      <div className="flex">
        <div className="w-64">
          <div className="pb-4 font-[MarcellusSC]">Category</div>
          <NavCategory categories={categories} />
        </div>
        <div className="grow">
          <div className="pb-4 font-[MarcellusSC]">全部</div>
          {posts.map(({ date, slug, title, category }) => (
            <div className="py-3 flex justify-between border-t border-neutral-200" key={slug}>
              <div>
                <Category>{category}</Category>
                <h2 className="inline-block relative top-px left-3 text-lg font-[MarcellusSC]">
                  <Link className="hover:text-[--theme-color]" href={`/blog/${date}/${slug}`}>{title}</Link>
                </h2>
              </div>
              <div className="text-sm leading-6 text-neutral-500">{date}</div>
            </div>
          ))}
          <Pagination />
        </div>
      </div>
    </>
  )
}

export const metadata = {
  title: 'Blog List - Nodejs.top',
}

export default Blog
