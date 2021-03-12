import Banner from '../components/layout/user/blogPage/Banner';
import ListBlog from '../components/layout/user/blogPage/ListBlog';

function NewsPage() {
    return (
        <>
            <Banner title='Tin Tức' />
            <ListBlog categoryBlogId='2' urlCurrent='/tin-tuc' />
        </>
    );
}
export default NewsPage;
