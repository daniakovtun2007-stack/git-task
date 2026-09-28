import { useEffect, useState } from 'react'
function App() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(5);
function removePost(id){
    setPosts(posts.filter(post=>post.id!==id));
}
    useEffect(() => {
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data.slice(0, count));
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });

    }, [count]);

    function loadMore() {
        setCount(count => count + 5);
    }

    return (
        <>
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div>
                    <div
                        style={{
                            width: "300px",
                            height: "500px",
                            borderRadius: "40px",
                            border: "2px solid black",
                            overflowY: "auto"
                        }}
                    >
                        {loading && <h3>Loading...</h3>}

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>UserId</th>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                            </thead>

                            <tbody>
                                {posts.map(post => (
                                    <tr key={post.id}>
                                        <td>{post.userId}</td>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td><button onClick={()=>removePost(post.id)} style={{   color: "white",
                            padding: "10px 5px",
                            backgroundColor: "red",
                            borderRadius: "40px",
                            marginTop: "20px"}}>Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <button
                        onClick={loadMore}
                        style={{
                            color: "white",
                            padding: "20px 5px",
                            backgroundColor: "blue",
                            borderRadius: "40px",
                            marginTop: "20px"
                        }}
                    >
                        Додати пост
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;