"use client";

import { user } from "@/data/user";
import { GeneralHeader } from "@/components/ui/general-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Edit() {
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">Editar perfil</div>
      </GeneralHeader>

      <section className="border-b-2 border-gray-900">
        <div
          style={{ backgroundImage: 'url(' + user.cover + ')' }}
          className="flex justify-end gap-2 p-2 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
        >
          <div className="cursor-pointer bg-black/80 flex items-center justify-center size-12 rounded-full">
            <FontAwesomeIcon
              icon={faCamera}
              className="size-6"
            />
          </div>

          <div className="cursor-pointer bg-black/80 flex items-center justify-center size-12 rounded-full">
            <FontAwesomeIcon
              icon={faXmark}
              className="size-6"
            />
          </div>
        </div>

        <div className="-mt-12 px-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />

          <div className="-mt-24 size-24 flex justify-center items-center">
            <div className="cursor-pointer bg-black/80 flex items-center justify-center size-12 rounded-full">
              <FontAwesomeIcon
                icon={faCamera}
                className="size-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 flex flex-col gap-4">
        <label>
          <p className="text-lg text-gray-500 mb-2">Nome</p>
          <Input value={user.name} placeholder="Digite seu nome" />
        </label>

        <label>
          <p className="text-lg text-gray-500 mb-2">Bio</p>
          <Textarea
            rows={4}
            value={user.bio}
            placeholder="Descreva você mesmo"
          />
        </label>

        <label>
          <p className="text-lg text-gray-500 mb-2">Link</p>
          <Input value={user.link} placeholder="Digite um link" />
        </label>

        <Button size={1} label="Salvar alterações" />
      </section>
    </div>
  )
};