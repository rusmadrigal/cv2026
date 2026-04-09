import Resume from "@/app/components/Resume";
import { resumeData } from "@/app/resumeData";

export default function Page() {
  return <Resume data={resumeData} />;
}
