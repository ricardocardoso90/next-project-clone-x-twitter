import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { SignInForm } from "@/components/SignInForm/signin-form";

export default function SignIn() {
  return (
    <div className="max-w-lg mx-auto mt-12 px-6">
      <Logo size={56} />
      <h1 className="mt-10 text-2xl">Entre na sua conta</h1>

      <div className="mt-10 mb-14 flex flex-col gap-6">
        <SignInForm />
      </div>

      <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
        <div className="text-gray-500">Ainda não tem uma conta?</div>
        <Link href="/signup" className="hover:underline">Cadastre-se</Link>
      </div>
    </div>
  )
};