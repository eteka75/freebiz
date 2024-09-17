import Menu from "@/components/partials/Menu";
import Navbar from "@/components/partials/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Menu />
    </div>
  );
}
