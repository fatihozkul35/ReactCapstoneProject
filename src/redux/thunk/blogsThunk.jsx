import { getDatabase, onValue, ref, set } from "firebase/database";
import { setBlogs } from "../actions/blogsAction";
import { setLoadingFalse, setLoadingTrue } from "../actions/loadingActions";

//! This function fetch blogs from firebase
export const getblogsFromFirebase = (dispatch) => {
  dispatch(setLoadingTrue());
  const db = getDatabase();
  const starCountRef = ref(db, "blogs/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const arrayData = Object.values(data);
      dispatch(setBlogs(arrayData));
      dispatch(setLoadingFalse());
    }
  });
};
