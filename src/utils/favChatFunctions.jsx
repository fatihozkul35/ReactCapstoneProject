import { getDatabase, ref, update } from "firebase/database";

export const blogAddToFavorite = (blog, currentUser) => {
  const db = getDatabase();
  let updateBlog;
  if (!blog.whoLiked.includes(`${currentUser.email}`)) {
    blog.whoLiked.push(`${currentUser.email}`);
    updateBlog = {
      ...blog,
      whoLiked: blog.whoLiked,
      likedCounter: blog.likedCounter + 1,
    };
  } else {
    blog.whoLiked = blog.whoLiked.filter((item) => {
      return item !== currentUser.email;
    });

    updateBlog = {
      ...blog,
      whoLiked: blog.whoLiked,
      likedCounter: blog.likedCounter - 1,
    };
  }

  const updates = {};
  updates["/blogs/" + blog.id] = updateBlog;
  return update(ref(db), updates);
};

export const blogAddComment = (blog, currentUser) => {
  // const db = getDatabase();
  // let updateBlog;
  // if (!blog.whoLiked.includes(`${currentUser.email}`)) {
  //   blog.whoLiked.push(`${currentUser.email}`);
  //   updateBlog = {
  //     ...blog,
  //     whoLiked: blog.whoLiked,
  //     likedCounter: blog.likedCounter + 1,
  //   };
  // } else {
  //   blog.whoLiked = blog.whoLiked.filter((item) => {
  //     return item !== currentUser.email;
  //   });
  //   updateBlog = {
  //     ...blog,
  //     whoLiked: blog.whoLiked,
  //     likedCounter: blog.likedCounter - 1,
  //   };
  // }
  // console.log(blog.whoLiked);
  // const updates = {};
  // updates["/blogs/" + blog.id] = updateBlog;
  // return update(ref(db), updates);
};
