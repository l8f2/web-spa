import { createRoot } from 'react-dom/client'
import {App} from "@/app.tsx";

export const initApp = () => {
  const root = document.getElementById('root')!
  createRoot(root).render(<App />)
}
