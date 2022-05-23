import Feed from './Feed';

const Home = ({ posts, fetchError, isLoading }) => {
    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading Posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>Error fetching posts</p>}
            {!isLoading && !fetchError && posts.length ? <Feed posts={posts}
            /> : <p className="statusMsg">No posts to display</p>}
        </main>
    )
}

export default Home