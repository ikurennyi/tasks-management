import type { SnackBarType } from '@/entities/snackbar'

export function useSnack(store: {
  dispatch: (action: string, { text, type }: { text: string; type?: SnackBarType }) => void
}) {
  const showSnack = ({ text, type = 'success' }: { text: string; type?: SnackBarType }) => {
    store.dispatch('snacks/add', { text, type })
  }

  return { showSnack }
}
