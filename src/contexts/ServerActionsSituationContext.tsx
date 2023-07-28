"use client";

import { cloneDeep } from "@/utilities/helpers";
import { createContext, useCallback, useState } from "react";

type ServerActionsSituation = {
  id: string;
  isLoading: boolean;
  hasError: boolean;
}[];

type SubmitServerAction = (id: string) => void;

type SetServerActionSituation = (
  id: string,
  situation: { isLoading?: boolean; hasError?: boolean }
) => void;

interface ServerActionsSituationContextType {
  situations: ServerActionsSituation;
  submitServerAction: SubmitServerAction;
  setServerActionSituation: SetServerActionSituation;
}

interface Props {
  children: React.ReactNode;
}

//a context that stores server action situations
const serverActionsSituationContext =
  createContext<ServerActionsSituationContextType>({
    setServerActionSituation: (id, situation) => {},
    situations: [],
    submitServerAction: (id) => {},
  });

const ServerActionsSituationContext = ({ children }: Props) => {
  const [serverActionsSituation, setServerActionsSituation] =
    useState<ServerActionsSituation>([]);

  //a function to register a server action situation for a server action
  const submitServerAction: SubmitServerAction = useCallback((id) => {
    setServerActionsSituation((serverActionsSituation) => {
      const newServerActionsSituation = cloneDeep<ServerActionsSituation>(
        serverActionsSituation
      );

      //shouldn't store a server action situation that already exists
      if (newServerActionsSituation.find((situation) => situation.id === id))
        return serverActionsSituation;

      newServerActionsSituation.push({
        id,
        hasError: false,
        isLoading: false,
      });

      return newServerActionsSituation;
    });
  }, []);

  //a fcuntion to set situation of a server action
  const setServerActionSituation: SetServerActionSituation = (
    id,
    { hasError, isLoading }
  ) => {
    const newServerActionSituation = cloneDeep<ServerActionsSituation>(
      serverActionsSituation
    );
    const serverActionSituation = newServerActionSituation.find(
      (situation) => situation.id === id
    );

    if (!serverActionSituation) return;

    if (hasError) serverActionSituation.hasError = hasError;
    if (isLoading) serverActionSituation.isLoading = isLoading;

    setServerActionsSituation(newServerActionSituation);
  };

  const contextValues: ServerActionsSituationContextType = {
    situations: serverActionsSituation,
    submitServerAction,
    setServerActionSituation,
  };

  return (
    <serverActionsSituationContext.Provider value={contextValues}>
      {children}
    </serverActionsSituationContext.Provider>
  );
};

export { serverActionsSituationContext };
export default ServerActionsSituationContext;
