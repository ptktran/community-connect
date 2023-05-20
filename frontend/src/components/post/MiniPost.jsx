const MiniPost = () => {

    // the backend should respond an array of posts with attributes more or less given below (could be anything but you also need to change the ui below)
    const posts = [
        {
            author: {
                name: "Jennifer Lawrence",
                profile: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
    
            title: "Starting a garage sale tomorrow",
            location: "Toronto",
            date: "May 15, 2023 - 1:37 PM",
            description: "We are opening a garage sale tomorrow at 15 Alpine St, 3pm. There will be all sorts of stuff like old toys, computer accessories, old clothing, and textbooks. First come first serve :)",
            image: "https://media.istockphoto.com/id/1262901956/photo/nobody-at-garage-sale.jpg?s=612x612&w=is&k=20&c=75Dz14gJockS8hM-SJKgmjvXN42Buub1hXXwar5pWwM=",
            min_price: 5,
            max_price: 20,
            likes: 10,
            comments: 2, // should be length of comment objects;
            seenBy: 44,
        },
        {
            author: {
                name: "Vincent Aung",
                profile: "https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000&format=jpeg&auto=webp"
                // more fields?
            },
    
            title: "Starting a garage sale tomorrow",
            location: "Toronto",
            date: "May 15, 2023 - 1:37 PM",
            description: "We are opening a garage sale tomorrow at 15 Alpine St, 3pm. There will be all sorts of stuff like old toys, computer accessories, old clothing, and textbooks. First come first serve :)",
            image: "https://www.meme-arsenal.com/memes/f62e9ffba5d3de6c80f20ce36f83b258.jpg",
            min_price: 5,
            max_price: 20,
            likes: 10,
            comments: 2, // should be length of comment objects;
            seenBy: 44,
        },
        {
          author: {
              name: "Peter Tran",
              profile: "https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000&format=jpeg&auto=webp"
              // more fields?
          },
  
          title: "Lawn mowing service discount!",
          location: "Toronto",
          date: "May 20, 2023 - 2:00 PM",
          description: "We're having a discount for our lawn mowing service, 50% off! Only the first 5 customers who signs up will get the discount, first come first serve :)",
          image: "https://cdn.shopify.com/s/files/1/0666/8569/8340/products/LawnMowingServicesFortMcmurray.jpg?v=1680422537",
          min_price: 30,
          max_price: 35,
          likes: 24,
          comments: 7, // should be length of comment objects;
          seenBy: 44,
      },

    ]


    return (
    <>   
        {posts
        ? (<div>
            {posts.map((post, index) => 
                  <div key={index} className="flex m-auto bg-white max-w-3xl rounded-lg overflow-hidden drop-shadow-md my-5">
                      <div className="p-6">
                          <div className="mb-2 flex gap-4 items-center">
                              <img className="h-12 w-12 rounded-full border" src={post.author.profile} alt="" />
                              <div className="flex flex-col">
                                  <h3 className="text-sm font-medium text-black">{post.author.name}</h3>
                                  <span className="text-sm text-gray-text">{post.location + " - " + post.date}</span>
                              </div>
                          </div>
                      
                          <p className="mt-3 font-semibold text-md text-black">{post.title}</p>
                          <p className="text-black text-sm">{post.description}</p>
                          
                          <div className="my-3">
                            <img className="rounded-lg" src={post.image} alt="" />
                          </div>
          
                          <div className="flex justify-start space-x-4 items-center mt-5">
                              <button className="bg-blue p-2 rounded-lg text-sm hover:bg-blue/90 text-white transition-color ease duration-150">📧 Inquire</button>
                              <div className="bg-gray-comps p-2 rounded-md flex justify-between space-x-4 text-sm">
                                  <span>💸 {post.min_price + "-" + post.max_price}</span>
                                  <span>👍 {post.likes}</span>
                                  <span>💬 {post.comments}</span>
                                  <span>👀 {post.seenBy}</span>
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