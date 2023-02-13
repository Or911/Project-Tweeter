const ifTextIsEmpty = function (input) {
  if (!input) {
    return true;
  }
};
const findPostToRemove = function (postID, postsList) {
  for (let indexPost in postsList) {
    if (postsList[indexPost].id == postID) {
      return indexPost;
    }
  }
};

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
    if (ifTextIsEmpty(text)) {
      return;
    }
    _postIdCounter += 1;
    let newPost = { text: text, id: `p${_postIdCounter}`, comments: [] };
    _posts.push(newPost);
  };

  const removePost = function (postID) {
    let index = findPostToRemove(postID, _posts);
    _posts.splice(index, 1);
  };

  const addComment = function (comment, postID) {
    if (ifTextIsEmpty(comment)) {
      return;
    }
    for (let post of _posts) {
      if (post.id == postID) {
        commentIdCounter++;
        let createComment = { id: `c${commentIdCounter}`, text: comment };
        post.comments.push(createComment);
      }
    }
  };

  const removeComment = function (postID, commentID) {
    let indexPost = findPostToRemove(postID, _posts);

    let comments = _posts[indexPost].comments;
    for (let indexComment in comments) {
      if (comments[indexComment].id == commentID) {
        _posts[indexPost].comments.splice(indexComment, 1);
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
