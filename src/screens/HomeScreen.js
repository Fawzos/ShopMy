import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategories } from "../actions/categoriesActions";
import Category from "../components/Category";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Slider from "../components/Slider";
import data from "../data";

function HomeScreen() {
  // TODO :: dispatch action here to get all products
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <Slider data={data} />
      <div style={{ height: 60 }} />
      <div className="container">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row">
            {categories?.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomeScreen;
