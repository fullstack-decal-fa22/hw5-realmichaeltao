import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";

const Feed = () => {
  const [data, setData] = useState();

  const getPostsData = () => {
    axios
      .get('http://localhost:3002/posts') 
      .then((data) => setData(data.data)) 
      .catch((error) => console.log(error));  
  };

  useEffect(() => {
    getPostsData();
  }, [])

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data && data.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} id={d.id} key={d.id} />
        )
      }

      <NewPost function={getPostsData} />
    </div>
  )

}


export default Feed;
