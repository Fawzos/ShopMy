import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsCategory } from "../actions/categoriesActions";
import Category from "../components/Category";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function CategoriesScreen(props) {
  const dispatch = useDispatch();
  const categoryId = props.match.params.category_id;
  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { loading, error, category } = categoryDetails;

  useEffect(() => {
    dispatch(detailsCategory(categoryId));
  }, [dispatch, categoryId]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Category
          key={category?.id}
          category={category}
          products={category?.products}
        />
      )}
    </div>
  );
}

export default CategoriesScreen;
