function postComment() {
  let comment = document.getElementById('commentText').value
  let commenter = document.getElementById('commentName').value
  let commentTemplate = document.getElementById('comment-template').innerHTML
  let templateFn = _.template(commentTemplate)
}

function createPost() {

}
