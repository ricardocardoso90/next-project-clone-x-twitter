"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

export function SignInForm() {
  const router = useRouter();

  const [emailField, setEmailField] = useState('');
  const [passworldField, setPasswordField] = useState('');

  function handleButton() {
    router.replace('/');
  };

  return (
    <>
      <Input
        value={emailField}
        placeholder="Digite seu e-mail"
        onChange={(e) => setEmailField(e)}
      />

      <Input
        value={passworldField}
        placeholder="Digite sua senha"
        onChange={(e) => setPasswordField(e)}
        password
      />

      <Button
        size={1}
        label="Entrar"
        onClick={handleButton}
      />
    </>
  )
};