import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="min-h-[90vh] container flex mt-12 justify-center ">
      <SignUp
        appearance={{ baseTheme: dark }}
        redirectUrl={"/"}
        afterSignUpUrl={'/browse'}
      />
    </div>
  );
}
