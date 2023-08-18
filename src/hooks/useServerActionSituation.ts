import { serverActionsSituationContext } from "@/contexts/ServerActionsSituationContext";
import { useContext } from "react";

interface UseServerActionSituationReturn {
  /** is server action in being executed? */
  isLoading: boolean | undefined;
  /** did server action has an error in its execution? */
  hasError: boolean | undefined;
}

/**
 * A hook to get the situation of a server action. for example to see that server action is loading or not, or it had error or not.
 * @param id id of server action that is registered with
 * @returns An object with isLoading and hasError props
 * * This hook must be used inside the `ServerActionsSituationContext` Provider
 */
const useServerActionSituation = (
  id: string
): UseServerActionSituationReturn => {
  const { situations } = useContext(serverActionsSituationContext);

  const situation = situations.find((situation) => situation.id === id)!;

  return { isLoading: situation?.isLoading, hasError: situation?.hasError };
};

export default useServerActionSituation;
