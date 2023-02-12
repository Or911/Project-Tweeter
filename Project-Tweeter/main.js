const tweeter = Tweeter()
const renderer = Renderer()




$("#post").on("click", function () {
    let CreateTweet =$(this).siblings("input").val()
    tweeter.addPost(CreateTweet)
    renderer.renderPosts(tweeter.getPosts())
    $(this).siblings("input").val("")
})

$("#posts").on("click",".delete" ,function (){
   let idOfPostToRemove = $(this).closest(".post").attr("id")
   tweeter.removePost(idOfPostToRemove)
   renderer.renderPosts(tweeter.getPosts())

})

$("#posts").on("click","button", function (){
    let idOfPostToAddComment = $(this).closest(".post").attr("id")
    let inputComment = $(this).closest(".post").find("input").val()
    tweeter.addComment(inputComment, idOfPostToAddComment )
    renderer.renderPosts(tweeter.getPosts())
})
    
$("#posts").on("click",".delete-comment", function (){
   let idOfPostToRemoveComment =  $(this).closest(".post").attr("id")
   let idOfCommentToRemove = $(this).closest(".comments").attr("id")
   tweeter.removeComment(idOfPostToRemoveComment , idOfCommentToRemove )
   renderer.renderPosts(tweeter.getPosts())
})

renderer.renderPosts(tweeter.getPosts())