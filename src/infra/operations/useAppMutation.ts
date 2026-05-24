// Essa função foi criada para generalizar a estrutura de uma requisição do tipo QUERY feita no SUPABASE, enviamos como parâmetro a função específica de consulta

import { useState } from "react";

type UseAppMutationReturn<DataT, VariablesT> = {
  mutate: (variables: VariablesT) => Promise<DataT | void>;
  loading: boolean;
  error: unknown;
};

export type UseAppMutationOptions<DataT> = {
  onSuccess?: (data: DataT) => void;
  onError?: (error: unknown) => void;
};

type UseAppMutationParams<DataT, VariablesT> = {
  mutateFn: (variables: VariablesT) => Promise<DataT>;
} & UseAppMutationOptions<DataT>;

export function useAppMutation<DataT, VariablesT>({
  mutateFn,
  onSuccess,
  onError,
}: UseAppMutationParams<DataT, VariablesT>): UseAppMutationReturn<
  DataT,
  VariablesT
> {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const mutate = async (variables: VariablesT) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await mutateFn(variables);
      onSuccess?.(data);
    } catch (error) {
      onError?.(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate: mutate,
    loading: isLoading,
    error: error,
  };
}
