import React, { useEffect, useState } from 'react';
import { useUser, useAuth } from "@clerk/clerk-react";

const MiniPost = () => {
  const { user } = useUser();

  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/Posts');
        const data = await response.json();
  
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
  
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    fetchPosts();
  }, [likes]);
  console.log(posts)
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
        const emailAddress = address; 

        const subject = 'Hello, I would like to inquire about your post on CommunityConnect.'; // Replace with the desired subject

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    }

    async function handleUpdate(postId, postLikes, author) {
        try {
            const response = await fetch(`http://localhost:5000/update/${postId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ likes: postLikes, likedBy: author }),
          });

          if (response.ok) {
            const responseData = await json.response();
            console.log(responseData);
          } else {
            throw new Error('put request failed');
          }
        } catch (error) {
          console.log(error);
        }

        setLikes(postLikes);
    }

    function handle(likedBy, postId, postLikes, author) {
      const exists = likedBy.includes(user.fullName);
      if (exists) {
        handleUpdate(postId, postLikes - 1, [])
      } else {
        handleUpdate(postId, postLikes + 1, [...likedBy, author])
      }
    }


    return (
    <>   
      {posts 
      ? (<div className="py-5">
        {posts.map((post, index) => 
          <div key={index} className="flex m-auto bg-white max-w-3xl rounded-lg overflow-hidden drop-shadow-md my-3">
            <div className="p-6 w-full">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img className="h-12 w-12 rounded-full" src="src/assets/icons/user.svg" alt="" />
                    <div>
                      <p className="font-medium text-sm text-black">{post.author.name}</p>
                      <p className="text-sm text-gray-text">{post.date}</p>
                    </div>
                </div>
                {post.min_price ? (
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                    Service
                  </span>
                  ) : (
                  <span className="inline-flex items-center bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    <span className="w-2 h-2 mr-1 bg-sky-500 rounded-full"></span>
                    Post
                  </span>
                  )}
              </div>
              <p className="mt-3 font-medium text-sm text-black">{post.title}</p>
              <p className="text-black text-sm">{post.description}</p>
              
              <div className="my-3">
                {post.image ? (
                  <img className="rounded-lg" src={post.image} alt="" />
                ) : (
                  <></>
                )}
              </div>

              <div className="flex justify-start space-x-4 items-center mt-5">
                <button className="bg-blue p-2 rounded-lg text-sm hover:bg-blue/90 text-white transition-color ease duration-150" onClick={() => sendEmail(post.author.email)}>📧 Inquire</button>
                <div className="bg-gray-comps p-2 rounded-md flex justify-between space-x-4 text-sm">
                  {post.min_price ? (
                    <span>💸 {post.min_price + "-" + post.max_price}</span>
                  ) : (
                    <></>
                  )}
                  <button onClick={() => handle(post.likedBy, post._id, post.likes, user.fullName)}>👍 {post.likes}</button>
                  <span>💬 {post.comments}</span>
                  {/* <span>👀 {post.seenBy}</span> */}
                </div>
              </div>
            </div>
          </div> 
          )}
        </div>)
        : <><h1 className="text-center m-10">Nothing to see here...</h1></>
        }
    </>
    )
}

export default MiniPost;