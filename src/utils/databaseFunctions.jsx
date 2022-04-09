import { getDatabase, onValue, ref, set } from "firebase/database";

//! This function saves a new blog to firebase
export const createBlogToFirebase = (blog) => {
  const { id, title, date, img, description, whoCreated } = blog;
  const db = getDatabase();
  set(ref(db, "blogs/" + id), {
    title: title,
    date: date,
    img: img,
    description: description,
    whoCreated: whoCreated,
  });
};

//! This function fetch blogs from firebase
export const getblogsFromFirebase = (setBlogs) => {
  const db = getDatabase();
  const starCountRef = ref(db, "blogs/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const arrayData = Object.values(data);
    // console.log(arrayData);
    setBlogs([...arrayData]);
  });
};
