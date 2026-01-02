const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postFeed = document.getElementById('post-feed')

posts.forEach(function(post) {
    postFeed.innerHTML += `
        <section class="post-section">
            <header class="post-header">
                <img src="${post.avatar}" alt="avatar" class="avatar">
                <div class="post-user-info">
                    <p class="post-name">${post.name}</p>
                    <p class="post-location">${post.location}</p>
                </div>
            </header>
            <article>
                <div class="post-image-container">
                    <img src="${post.post}" alt="posted-pic" class="post-image">
                </div>
                <div class="post-icons">
                    <img src="images/icon-heart.png" alt="like-icon" class="post-icon">
                    <img src="images/icon-comment.png" alt="comment-icon" class="post-icon">
                    <img src="images/icon-dm.png" alt="dm-icon" class="post-icon">
                </div>
                <div class="post-likes">
                    <p class="post-likes-count">${post.likes} likes</p>
                </div>
            </article>
            <footer>
                <div class="post-comment-section">
                    <p><span class="post-username">${post.username}</span> ${post.comment}</p>
                </div>
            </footer>
        </section>
    `
})