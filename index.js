function postComment() {
  let comment = document.getElementById('commentText').value
  let commenter = document.getElementById('commentName').value
  let commentTemplate = document.getElementById('comment-template').innerHTML
  let templateFn = _.template(commentTemplate)
  let commentsDiv = document.getElementById('comments-template')

  let templateHTML = templateFn({'comment': comment, 'commenter': commenter})

  commentsDiv.innerHTML += templateHTML
}

function createPost() {
  let author = document.getElementById('postAuthor').value
  let body = document.getElementById('postBody').value
  let title = document.getElementById('postTitle').value
  let postTemplate = document.getElementById('post-template').innerHTML
  let templateFn = _.template(postTemplate)
  let postsDiv = document.getElementById('posts-template')

  let templateHTML = templateFn({'comment': comment, 'commenter': commenter})

  postsDiv.innerHTML += templateHTML  
}
