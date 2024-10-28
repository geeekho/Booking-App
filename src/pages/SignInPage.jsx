import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignInForm from "@/components/SignInForm";
import { useAuth } from "@/hooks/useAuth";

const SignInPage = () => {
  const { token } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/", { replace: true });
  }, [token, navigate]);

  return (
    <div className="container flex h-screen items-center justify-center py-4">
      <SignInForm />
    </div>
  );
};

export default SignInPage;
