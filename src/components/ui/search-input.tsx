"use client";

import { Input } from "./input"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

type Props = {
  defaultValue?: string;
  hideOnSearch?: boolean;
};

export function SearchInput({ defaultValue, hideOnSearch }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [searchInput, setSearchInput] = useState(defaultValue || '');

  function handleSearch() {
    if (searchInput) {
      router.push('/search?q=' + encodeURIComponent(searchInput));
    }
  };

  if (hideOnSearch && pathname === '/search') return null;

  return (
    <Input
      filled
      placeholder="Buscar"
      value={searchInput}
      icon={faMagnifyingGlass}
      onChange={e => setSearchInput(e)}
      onPress={handleSearch}
    />
  )
};