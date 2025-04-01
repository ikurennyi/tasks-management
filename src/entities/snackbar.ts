export interface SnackBar {
  text: string
  color: string
  duration?: number
}

export type SnackBarType = 'success' | 'error'

type SnackBarColorsObject = {
  color: string
}

export const SnackBarColorsModel: Record<SnackBarType, SnackBarColorsObject> = {
  success: { color: 'success' },
  error: { color: 'error' },
}
