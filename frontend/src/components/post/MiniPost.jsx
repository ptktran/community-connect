import React, { useEffect, useState } from 'react';

const MiniPost = () => {


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/Posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); 

    async function postRequest(url, jsonData) {
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data
    }

    function sendEmail(address) {
        // const emailAddress = address; 

        // const subject = 'Hello, I would like to inquire about your post on CommunityConnect.'; // Replace with the desired subject

        // const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        // window.location.href = mailtoLink;
    }

    // const handleUpdate = () => {
    //     let id = post._id
    //     fetch("http://localhost:5000/update/${id}", {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({"likes": post.likes + 1})
    //     })
    // }


    return (
    <>   
        {posts
        ? (<div>
            {posts.map((post, index) => 
                  <div key={index} className="flex m-auto bg-white max-w-2xl rounded-lg overflow-hidden drop-shadow-md my-5">
                      <div className="p-6">
                          <div className="mb-2 flex gap-4 items-center">
                              {/* <img className="h-12 w-12 rounded-full border" src={post.author.profile} alt="" /> */}
                              <div className="flex flex-col">
                                  <p className="font-medium text-sm text-black">{post.author.name}</p>
                                  <p className="text-sm text-gray-text">{post.location + " - " + post.date}</p>
                              </div>
                          </div>
                      
                          <p className="mt-3 font-medium text-sm text-black">{post.title}</p>
                          <p className="text-black text-sm">{post.description}</p>
                          
                          <div className="my-3">
                            <img className="rounded-lg" src={post.image} alt="" />
                          </div>
          
                          <div className="flex justify-start space-x-4 items-center mt-5">
                              <button className="bg-blue p-2 rounded-lg text-sm hover:bg-blue/90 text-white transition-color ease duration-150" onClick={sendEmail(post.author.email)}>📧 Inquire</button>
                              <div className="bg-gray-comps p-2 rounded-md flex justify-between space-x-4 text-sm">
                                  <span>💸 {post.min_price + "-" + post.max_price}</span>
                                  <span>👍 {post.likes}</span>
                                  <span>💬 {post.comments}</span>
                                  {/* <span>👀 {post.seenBy}</span> */}
                              </div>
                          </div>
                      </div>
                  </div> 
            )}
        </div>)
        : <><span>No posts!!!!</span></>
        }
    </>
    )
}

export default MiniPost;