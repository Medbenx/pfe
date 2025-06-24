// app/(main)/become-guide/page.tsx
import MorcompassForm from "@/app/components/forms/MorcompassForm";

export default function BecomeGuidePage() {
  return (
    <div className="min-h-screen bg-black"> {/* Added bg-black here */}
      <div className="container mx-auto pt-20"> {/* Added pt-20 for top padding */}
        <MorcompassForm />
      </div>
    </div>
  );
}