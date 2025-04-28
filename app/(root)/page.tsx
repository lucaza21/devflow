import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <div className=" bg-white  dark:bg-green-200 dark:text-green-300">
        <h1 className="h1-bold font-inter">Welcome to the world of Next.js </h1>
      </div>
      <div className="background-light850_dark100">
        <h1 className="h1-bold font-spaceGrotesk">
          Welcome to the world of Next.js
        </h1>
      </div>

      <form>
        <Button
          type="submit"
          className="px-10 pt-[10px]"
          formAction={async () => {
            "use server";

            await signOut({ redirectTo: ROUTES.SIGN_IN });
          }}
        >
          Log Out
        </Button>
      </form>
    </>
  );
}
