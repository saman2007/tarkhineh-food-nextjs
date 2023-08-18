"use client";

import { cloneDeep } from "@/utilities/helpers";
import { createContext, useCallback, useState } from "react";

type Situation = {
  /** Is your server action being executed right now?? */
  isLoading: boolean;
  /** did your server action has error? */
  hasError: boolean;
};

type ServerActionsSituation = ({
  /** Unique id of server action situation */
  id: string;
} & Situation)[];

type SubmitServerAction = (id: string) => void;

type SetServerActionSituation = (
  /** The unique id that you set for your server action situation */
  id: string,
  /** The situation that you want to update */
  situation: Partial<Situation>
) => void;

interface ServerActionsSituationContextType {
  /** All stored situations */
  situations: ServerActionsSituation;
  /** A function to submit server action situation */
  submitServerAction: SubmitServerAction;
  /** A function to set situation for currently stored server action situation */
  setServerActionSituation: SetServerActionSituation;
}

interface Props {
  children: React.ReactNode;
}

/* A context that stores server action situations */
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
