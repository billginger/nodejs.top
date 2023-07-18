import Link from 'next/link'
import getPosts from '/lib/posts'
import PageTitle from '../components/page-title'
import NavCategory from '../components/nav-category'
import CategoryActive from '../components/category-active'
import Category from '../components/category'
import Pagination from '../components/pagination'

const Blog = () => {
  // TODO: 分页功能，每页10篇
  const { posts, categories } = getPosts()
  return (
    <>
      <PageTitle>Blog List</PageTitle>
      <div className="flex flex-col md:flex-row">
        <div className="w-64 pb-12">
          <div className="pb-4 font-[MarcellusSC]">Category</div>
          <NavCategory categories={categories} />
        </div>
        <div className="grow">
          <CategoryActive />
          {posts.map(({ id, date, name, title, category }) => (
            <div className="py-3 flex justify-between border-t border-neutral-200" key={id}>
              <div>
                <Category>{category}</Category>
                <h2 className="inline pl-3 relative top-px text-lg font-[MarcellusSC]">
                  <Link className="hover:text-[--theme-color]" href={`/blog/${date}/${name}`}>{title}</Link>
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
