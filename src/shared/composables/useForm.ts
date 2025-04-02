import { reactive } from 'vue'
import { useSnack } from './useSnack'

import store from '@/store'
const { showSnack } = useSnack(store)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RecordsStubType = Record<string, any>

export function useForm({ fields = {} as RecordsStubType, type = 'project', action = 'created' }) {
  const recordName = type === 'project' ? 'Project' : 'Task'
  const form = reactive({
    fields,
    disabled: false,
    responseError: '',
    async submit(sender: (fields: RecordsStubType) => Promise<void>) {
      // NOTE: just a pure "validation"
      if ('title' in fields) {
        if (!fields.title.trim()) {
          this.disabled = true
          showSnack({ text: 'You have to specify at least Title', type: 'error' })
          setTimeout(() => (this.disabled = false), 700)
          return
        }
      }
      this.disabled = true

      try {
        await sender(this.fields)
        showSnack({ text: `${recordName} "${fields.title}" was ${action}.` })
      } catch (error) {
        const text = error instanceof Error ? error.message : String(error)
        this.responseError = text
        showSnack({ text, type: 'error' })
      } finally {
        this.disabled = false
      }
    },
  })

  return form
}
