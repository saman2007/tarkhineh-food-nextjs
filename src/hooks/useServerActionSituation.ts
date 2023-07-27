import { serverActionsSituationContext } from "@/contexts/ServerActionsSituationContext";
import { useContext } from "react";

interface UseServerActionSituationReturn {
  isLoading: boolean | undefined;
  hasError: boolean | undefined;
}

/**
 * a hook to get the situation of a server action. for example to see that server action is loading or not, or it had error or not.
 * @param id id of server action that is registered with
 * @returns {object} an object with isLoading and hasError props
 */
const useServerActionSituation = (
  id: string
): UseServerActionSituationReturn => {
  const { situations } = useContext(serverActionsSituationContext);

  const situation = situations.find((situation) => situation.id === id)!;

  return { isLoading: situation?.isLoading, hasError: situation?.hasError };
};

export default useServerActionSituation;
