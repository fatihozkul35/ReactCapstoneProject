import { getDatabase, onValue, ref, set } from "firebase/database";
import { setBlogs } from "../actions/blogsAction";

// export const createBlogToFirebase = (dispatch,blog) => {
//   const id = Date.now();
//   const db = getDatabase();
//   set(ref(db, "blogs/" + id), { ...blog, id: id });
// };

//! This function fetch blogs from firebase
export const getblogsFromFirebase = (dispatch) => {
  const db = getDatabase();
  const starCountRef = ref(db, "blogs/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const arrayData = Object.values(data);
      dispatch(setBlogs(arrayData));
      //   setBlogs([...arrayData]);
    }
  });
};
