import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
