import { createContext, FC, useContext, useMemo, useReducer } from 'react'

interface State {
  displaySidebar: boolean
}

const initialState = {
  displaySidebar: false,
}

type Action = { type: 'OPEN_SIDEBAR' } | { type: 'CLOSE_SIDEBAR' }

const UIContext = createContext<State | any>(initialState)

const uiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return {
        ...state,
        displaySidebar: true,
      }

    case 'CLOSE_SIDEBAR':
      return {
        ...state,
        displaySidebar: false,
      }

    default:
      return {
        ...state,
      }
  }
}

const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' })

  const value = useMemo(() => ({ ...state, openSidebar, closeSidebar }), [state])

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = useContext(UIContext)

  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }

  return context
}

export const ManagedUIContext: FC = ({ children }) => <UIProvider>{children}</UIProvider>
