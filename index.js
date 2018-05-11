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
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  let postTemplate = _.(document.getElementById('post-template').innerHTML)
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  let author = document.getElementById('postAuthor').value
  let body = document.getElementById('postBody').value
  let title = document.getElementById('postTitle').value
  

  

  let templateHTML = templateFn({'author': author, 'title': title, 'body': body})

  pageDiv.innerHTML += templateHTML
}
