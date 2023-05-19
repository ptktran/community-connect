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
        }
    ]


    return (
    <>   
        {posts
        ? (<div className="flex flex-col min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950 gap-12">
            {posts.map((post, index) => 
                <div key={index} className="flex max-w-4xl p-px rounded-3xl overflow-hidden border-2 shadow-lg">
                    <div className="w-4/5 p-10">
                        <div className="mb-2 flex gap-4 items-center">
                            <img className="h-12 w-12 rounded-full" src={post.author.profile} alt="" />
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 dark:text-white">{post.author.name}</h3>
                                <span className="text-sm tracking-wide text-[#A4A5A5]">{post.location + " " + post.date}</span>
                            </div>
                        </div>
                    
                        <p className="my-2 font-semibold text-gray-700">{post.title}</p>
                        <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
        
                        <div className="flex justify-between">
                            <div className="bg-gray-200 rounded-lg flex justify-between mt-4 space-x-4">
                                <div>Price: {post.min_price + "-" + post.max_price}</div>
                                <div>Likes: {post.likes}</div>
                                <div>Comments: {post.comments}</div>
                                <div>Seen By: {post.seenBy}</div>
                            </div>
        
                            <div className="bg-[#F6F7F8] rounded-lg flex justify-between mt-4">
                                <div> Inquire</div>
                            </div>
                        </div>
        
                    </div>
        
                    <div className="flex items-center">
                        <img className="h-40 w-50" src={post.image} alt="" />
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