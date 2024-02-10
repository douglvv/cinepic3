import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="min-h-[90vh] container flex items-center mt-6 justify-center ">
      <SignIn signUpUrl="/" redirectUrl={'/'} appearance={{baseTheme: dark}}/>
    </div>
  );
}
