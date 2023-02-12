const Tweeter = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let _postIdCounter = 2;
  let commentIdCounter = 6;

  const getPosts = function () {
    return _posts;
  };

  const addPost = function (text) {
    if (!text) {
      return;
    }
    _postIdCounter += 1;
    _posts.push({ text: text, id: `p${_postIdCounter}`, comments: [] });
  };

  const removePost = function (postID) {
    for (let index in _posts) {
      if (_posts[index].id == postID) {
        _posts.splice(index, 1);
      }
    }
  };

  const addComment = function (comment, postID) {
    if (!comment) {
      return;
    }
    for (let post of _posts) {
      if (post.id == postID) {
        commentIdCounter++;
        post.comments.push({ id: `c${commentIdCounter}`, text: comment });
      }
    }
  };

  const removeComment = function (postID, commentID) {
    for (let post of _posts) {
      if (post.id == postID) {
        for (let index in post.comments) {
          if (post.comments[index].id == commentID) {
            post.comments.splice(index, 1);
          }
        }
      }
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
