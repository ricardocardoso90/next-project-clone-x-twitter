import { user } from "@/data/user";
import { redirect } from "next/navigation";

export default function Profile() {
  redirect('/' + user.slug);

  return null;
};