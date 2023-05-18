import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import unoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'
import {presetAttributify, presetIcons, presetUno} from "unocss";

const plugins: (PluginOption | PluginOption[])[] = [
  unoCSS({
    shortcuts: [
      { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
    ],
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    ],
    inspector: true,
  }),
  react()
]

// https://vitejs.dev/config/
export default defineConfig({ plugins })
