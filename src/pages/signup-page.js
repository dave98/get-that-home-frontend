import { useParams } from "react-router-dom";
import ChooseComponent from "../components/ChooseComponent/choose";
import CreateUserForm from "../components/CreateUser";
import { SignUpPageWrapper } from "./pages-styles";

const SignUpPage = () => {
  const params = useParams();
  let userType = params.landlord || params.seeker;

  return (
    <SignUpPageWrapper>
      {userType ? <CreateUserForm type={userType} /> : <ChooseComponent />}
    </SignUpPageWrapper>
  );
};
export default SignUpPage;
