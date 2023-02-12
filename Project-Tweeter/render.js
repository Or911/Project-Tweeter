const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (let post of posts) {
      let text = `<div class="post" id="${post.id}"><div class="delete"><img src="./img/trash.png" alt="trash"></div><h3>${post.text}</h3></div>`;
      $("#posts").append(text);
      for (let comment of post.comments) {
        $(`#${post.id}`).append(`<div  class="comments" id="${comment.id}"><span class="delete-comment"><img src="./img/trash.png" alt="trash"></span> <span >${comment.text}</span></div>`);
      }
      $(`#${post.id}`).append(`<div><input type="text" placeholder="Got something to say?"><button>Comment</button></div>`)
    }
  };

  return {renderPosts}
};


