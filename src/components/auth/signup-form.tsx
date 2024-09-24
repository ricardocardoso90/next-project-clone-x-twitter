"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function SignUpForm() {
  const router = useRouter();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passworldField, setPasswordField] = useState('');

  function handleButton() {
    router.replace('/home');
  };

  return (
    <>
      <Input
        value={nameField}
        placeholder="Digite seu Nome"
        onChange={(e) => setNameField(e)}
      />

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
        label="Criar conta"
        onClick={handleButton}
      />
    </>
  )
};