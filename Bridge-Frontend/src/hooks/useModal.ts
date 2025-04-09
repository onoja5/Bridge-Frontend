"use client";
import { useState } from "react";

export const useModal = () => {
  const [openModals, setOpenModals] = useState<{ [key: string]: boolean }>({});
  const [itemId, setItemId] = useState<string>("");
  const [getData, setGetData] = useState<{
    [key: string]: string | number;
  }>({});

  const openModal = (id: string) => {
    setOpenModals((prev) => ({ ...prev, [id]: true }));
    setItemId(id);
  };

  const closeModal = (id: string) => {
    setOpenModals((prev) => ({ ...prev, [id]: false }));
  };

  const toggleModal = (id: string) => {
    setOpenModals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return {
    setItemId,
    itemId,
    openModals,
    openModal,
    closeModal,
    toggleModal,
    getData,
    setGetData,
  };
};
