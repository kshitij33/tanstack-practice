import { useQueries, useQuery } from '@tanstack/react-query';
import { getTodoIds, getTodo } from './api';

export function useTodoIds() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodoIds,
    refetchOnWindowFocus: false,
  });
}

export function useTodos(ids: (number )[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ['todo', id],
        queryFn: () => getTodo(id!),
      };
    }),
  });
}
