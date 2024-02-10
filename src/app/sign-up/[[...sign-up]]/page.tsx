import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-[90vh] container flex mt-12 justify-center ">
      <SignUp
        signInUrl="/sign-in"
        initialValues={{ username: "admin" }}
        redirectUrl={"/"}
      />
    </div>
  );
}
