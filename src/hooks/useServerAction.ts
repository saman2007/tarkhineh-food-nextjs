import { serverActionsSituationContext } from "@/contexts/ServerActionsSituationContext";
import { useContext, useEffect, useTransition } from "react";

type ServerAction<T> = (data: T) => Promise<void>;

interface UseServerActionReturn<T> {
  serverAction: (data: T) => void;
}

type Callback = () => void | undefined;

/**
 * a hook to register server action in context and return a better version of server action
 * that submits error and loading and can be used in client components
 * @param id unique id of server action that will be submit in server action situation context
 * @param serverAction server action function
 * @param onSuccess a callback function that will be executed if server action call was successful
 * @param onError a callback function that will be executed if server action had an error
 */
const useServerAction = <T>(
  id: string,
  serverAction: ServerAction<T>,
  onSuccess?: Callback,
  onError?: Callback
): UseServerActionReturn<T> => {
  const [, startTransition] = useTransition();
  const { submitServerAction, setServerActionSituation } = useContext(
    serverActionsSituationContext
  );

  const newServerAction = async (data: T) => {
    setServerActionSituation(id, { hasError: false, isLoading: true });

    startTransition(async () => {
      try {
        await serverAction(data);
        onSuccess?.();
      } catch (error) {
        setServerActionSituation(id, { hasError: true });
        onError?.();
      }

      setServerActionSituation(id, { isLoading: false });
    });
  };

  useEffect(() => {
    submitServerAction(id);
  }, [id, submitServerAction]);

  return {
    serverAction: newServerAction,
  };
};

export default useServerAction;
