// Essa função foi criada para generalizar a estrutura de uma requisição do tipo QUERY feita no SUPABASE, enviamos como parâmetro a função específica de consulta

import { useEffect, useState } from "react";

type UseAppQueryReturn<DataT> = {
  data?: DataT;
  loading: boolean;
  error: unknown;
};

export function useAppQuery<DataT>(
  fetchData: () => Promise<DataT>,
  dependencies: React.DependencyList = [],
): UseAppQueryReturn<DataT> {
  const [data, setData] = useState<DataT>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const _fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const _data = await fetchData();
      setData(_data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    _fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return {
    data: data,
    loading: isLoading,
    error: error,
  };
}
