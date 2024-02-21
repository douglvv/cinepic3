import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="min-h-[90vh] container flex mt-12 justify-center ">
      <SignUp
        appearance={{
          baseTheme: dark,
          elements: {
            formButtonPrimary:
              "bg-red-800 hover:bg-red-900 active:bg-red-950 active:shadow-inner text-neutral-300 hover:text-neutral-200 font-semibold",
          },
        }}
        // redirectUrl={"/"}
        // afterSignUpUrl={"/browse"}
      />
    </div>
  );
}
