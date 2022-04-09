import { getDatabase, onValue, ref, set } from "firebase/database";

//! This function saves a new blog to firebase
export const blogToFirebase = (blog) => {
  const { title, date, img, description } = blog;
  const db = getDatabase();
  set(ref(db, "blogs/" + title), {
    title: title,
    date: date,
    img: img,
    description: description,
  });
};

//! This function fetch blogs from firebase
export const blogsFromFirebase = (setBlogs) => {
  const db = getDatabase();
  const starCountRef = ref(db, "blogs/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const arrayData = Object.values(data);
    // console.log(arrayData);
    setBlogs([...arrayData]);
  });
};
