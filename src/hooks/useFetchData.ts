// Essa função foi criada para generalizar a estrutura de uma requisição feita no SUPABASE, enviamos como parâmetro a função específica de consulta

import { useEffect, useState } from "react";

type UseFetchDataReturn<DataT> = {
  data?: DataT;
  loading: boolean;
  error: unknown;
};

export function useFetchData<DataT>(
  fetchData: () => Promise<DataT>,
  dependencies: React.DependencyList = [],
): UseFetchDataReturn<DataT> {
  const [data, setData] = useState<DataT>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const _fetchData = async () => {
    try {
      setIsLoading(true);
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
